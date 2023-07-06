import { type BuildPaths } from '../build/types/config'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'
import type { StorybookConfig } from '@storybook/react-webpack5'
import type { Configuration, RuleSetRule } from 'webpack'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildcssLoader'

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  webpackFinal: async (config: Configuration) => {
    const paths: BuildPaths = {
      build: '',
      html: '',
      entry: '',
      src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve?.modules?.push(paths.src)
    if ((config.module?.rules) != null) {
      config.module.rules = config.module?.rules?.map(
        (rule: RuleSetRule | '...') => {
          if (rule !== '...' && (rule?.test?.toString().includes('svg'))) {
            return { ...rule, exclude: /\.svg$/i }
          }
          return rule
        }
      )
      config.module.rules.push({
        test: /\.svg$/i,
        use: ['@svgr/webpack']
      })
    }
    config.module?.rules?.push(buildCssLoader(true))

    new TsconfigPathsPlugin({extensions: config.resolve?.extensions})  /* eslint-disable-line */
    /* config.resolve?.extensions?.push('.ts', '.tsx') */

    return config
  }
}

export default config
