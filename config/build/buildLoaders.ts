import { type BuildOptions } from './types/config'
import type webpack from 'webpack'
import { buildCssLoader } from './loaders/buildcssLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'
import ReactRefreshTypeScript from 'react-refresh-typescript'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options

  const cssLoader = buildCssLoader(isDev)

  const babelLoader = buildBabelLoader()

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const typeScriptLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
          transpileOnly: isDev,
        },
      },
    ],
  }

  return [fileLoader, svgLoader, babelLoader,  typeScriptLoader, cssLoader]
}
