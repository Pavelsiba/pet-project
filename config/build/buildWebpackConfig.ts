import type webpack from 'webpack'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { type BuildOptions } from './types/config'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig (
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options

  return {
    mode, // указываем что мы находимся на этапе разработки для продакшена-production
    entry: paths.entry, // точка входа в приложение
    output: {
      filename: '[name].[contenthash].js', // указываем выходной файл нашей сборки [динамически будет изменяться]
      path: paths.build, // папка в которую будут складываться все файлы после сборки
      clean: true, // очищаем ненужные файлы после сборки,
      publicPath: '/'
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
