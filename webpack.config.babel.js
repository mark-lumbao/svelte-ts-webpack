import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess';

const config = ({
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'deploy'),
    filename: '[fullhash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.svelte$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'svelte-loader',
            options: {
              preprocess: sveltePreprocess({}),
            },
          },
        ],
      },
      {
        // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false
        }
      }
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '.'),
    ],
    alias: {
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.mjs', '.js', '.ts', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'template/index.html'),
    }),
  ],
});

export default config;
