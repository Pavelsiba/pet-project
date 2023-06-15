import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildCssLoader } from "./loaders/buildcssLoader";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {

  const cssLoader = buildCssLoader(isDev)

  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "i18next-extract",
            {
              locales: ["en", "ru"],
              keyAsDefaultValue: false,
              saveMissing: true,
              outputPath: "public/locales/{{locale}}/{{ns}}.json"
            },
          ],
        ],
      },
    },
  };
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [fileLoader, svgLoader, babelLoader, typeScriptLoader, cssLoader];
}
