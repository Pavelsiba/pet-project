import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins (options: BuildOptions): webpack.WebpackPluginInstance[] {
  const { paths, isDev, apiUrl, project } = options

  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:5].css',
      chunkFilename: 'css/[name].[contenthash:5].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project)
    })]

  if (isDev) {
    plugins.push(new BundleAnalyzerPlugin())
  }
  return plugins
}
