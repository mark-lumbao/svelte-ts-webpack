import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess';

const config = (env) => ({
  mode: env.production ? 'production' : 'development',
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'deploy'),
    filename: '[fullhash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        use: 'babel-loader',
      },
      {
        test: /\.svelte$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'svelte-loader',
            options: {
              compilerOptions: {
                dev: !env.production,
              },
              preprocess: sveltePreprocess({}),
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '.')],
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
    },
    extensions: ['.mjs', '.js', '.ts', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'template/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './src/assets/',
          to: './assets',
        },
      ],
    }),
  ],
});

export default config;
