const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Входной файл
  entry: [
    './src/js/index.js'
  ],

  // Выходной файл
  output: {
    filename: './js/bundle.js'
  },

  // Source maps для удобства отладки
  devtool: "source-map",

  module: {
    rules: [
      // Транспилируем js с babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },

      // Компилируем SCSS в CSS
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          'css-loader', // translates CSS into CommonJS
          'postcss-loader', // parse CSS and add vendor prefixes to CSS rules
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },

      // Подключаем шрифты из css
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader?name=./fonts/[name].[ext]'
          },
        ]
      },

      // Подключаем картинки из css
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        use: [
          {
            loader: 'file-loader?name=./static/[name].[ext]'
          },
        ]
      },
    ],
  },
  plugins: [
    // Подключаем файл html, стили и скрипты встроятся автоматически
    new HtmlWebpackPlugin({
      title: 'Webpack 4 Starter',
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['main'],
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'personalAccount.html',
      template: './src/personalAccount.html',
      chunks: ['personalAccount.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'aboutHTML.html',
      template: './src/aboutHTML.html',
      chunks: ['aboutHTML.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'aboutCss.html',
      template: './src/aboutCss.html',
      chunks: ['aboutCss.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'aboutJavaScript.html',
      template: './src/aboutJavaScript.html',
      chunks: ['aboutJavaScript.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'aboutReactJS.html',
      template: './src/aboutReactJS.html',
      chunks: ['aboutReactJS.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'aboutSass.html',
      template: './src/aboutSass.html',
      chunks: ['aboutSass.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'aboutWebpack.html',
      template: './src/aboutWebpack.html',
      chunks: ['aboutWebpack.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'aboutNodeJS.html',
      template: './src/aboutNodeJS.html',
      chunks: ['aboutNodeJS.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'aboutGit.html',
      template: './src/aboutGit.html',
      chunks: ['aboutGit.html']
    }),
    //Git
    new HtmlWebpackPlugin({
      filename: 'Git_1.0.html',
      template: './src/Git/Git_1.0.html',
      chunks: ['Git_1.0.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'Git_1.1.html',
      template: './src/Git/Git_1.1.html',
      chunks: ['Git_1.1.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'Git_1.2.html',
      template: './src/Git/Git_1.2.html',
      chunks: ['Git_1.2.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'Git_1.3.html',
      template: './src/Git/Git_1.3.html',
      chunks: ['Git_1.3.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'Git_1.4.html',
      template: './src/Git/Git_1.4.html',
      chunks: ['Git_1.4.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'Git_1.5.html',
      template: './src/Git/Git_1.5.html',
      chunks: ['Git_1.5.html']
    }),
    //Node
    new HtmlWebpackPlugin({
      filename: 'Node_1.0.html',
      template: './src/Node/Node_1.0.html',
      chunks: ['Node_1.0.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'Node_1.1.html',
      template: './src/Node/Node_1.1.html',
      chunks: ['Node_1.1.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'Node_1.2.html',
      template: './src/Node/Node_1.2.html',
      chunks: ['Node_1.2.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'Node_1.3.html',
      template: './src/Node/Node_1.3.html',
      chunks: ['Node_1.3.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'Node_1.4.html',
      template: './src/Node/Node_1.4.html',
      chunks: ['Node_1.4.html']
    }),
    //React
    new HtmlWebpackPlugin({
      filename: 'React_1.0.html',
      template: './src/React/React_1.0.html',
      chunks: ['React_1.0.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'React_1.1.html',
      template: './src/React/React_1.1.html',
      chunks: ['React_1.1.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'React_1.2.html',
      template: './src/React/React_1.2.html',
      chunks: ['React_1.2.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'React_1.3.html',
      template: './src/React/React_1.3.html',
      chunks: ['React_1.3.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'React_1.4.html',
      template: './src/React/React_1.4.html',
      chunks: ['React_1.4.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'React_1.5.html',
      template: './src/React/React_1.5.html',
      chunks: ['React_1.5.html']
    }),
    //Sass
    new HtmlWebpackPlugin({
      filename: 'Sass_1.0.html',
      template: './src/Sass/Sass_1.0.html',
      chunks: ['Sass_1.0.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'Sass_1.1.html',
      template: './src/Sass/Sass_1.1.html',
      chunks: ['Sass_1.1.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'Sass_1.3.html',
      template: './src/Sass/Sass_1.3.html',
      chunks: ['Sass_1.3.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'Sass_1.4.html',
      template: './src/Sass/Sass_1.4.html',
      chunks: ['Sass_1.4.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'Sass_1.5.html',
      template: './src/Sass/Sass_1.5.html',
      chunks: ['Sass_1.5.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'Sass_1.6.html',
      template: './src/Sass/Sass_1.6.html',
      chunks: ['Sass_1.6.html']
    }),
    //Webpack
    new HtmlWebpackPlugin({
      filename: 'Webpack_1.0.html',
      template: './src/Webpack/Webpack_1.0.html',
      chunks: ['Webpack_1.0.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'Webpack_1.1.html',
      template: './src/Webpack/Webpack_1.1.html',
      chunks: ['Webpack_1.1.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'Webpack_1.2.html',
      template: './src/Webpack/Webpack_1.2.html',
      chunks: ['Webpack_1.2.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'Webpack_1.3.html',
      template: './src/Webpack/Webpack_1.3.html',
      chunks: ['Webpack_1.3.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'Webpack_1.4.html',
      template: './src/Webpack/Webpack_1.4.html',
      chunks: ['Webpack_1.4.html']
    }),
    //JavaScript
    new HtmlWebpackPlugin({
      filename: 'JS_1.0.html',
      template: './src/JavaScript/JS_1.0.html',
      chunks: ['JS_1.0.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'JS_1.1.html',
      template: './src/JavaScript/JS_1.1.html',
      chunks: ['JS_1.1.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'JS_1.2.html',
      template: './src/JavaScript/JS_1.2.html',
      chunks: ['JS_1.2.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'JS_1.3.html',
      template: './src/JavaScript/JS_1.3.html',
      chunks: ['JS_1.3.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'JS_1.4.html',
      template: './src/JavaScript/JS_1.4.html',
      chunks: ['JS_1.4.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'JS_1.5.html',
      template: './src/JavaScript/JS_1.5.html',
      chunks: ['JS_1.5.html']
    }),
    //CSS
    new HtmlWebpackPlugin({
      filename: 'CSS_1.0.html',
      template: './src/CSS/CSS_1.0.html',
      chunks: ['CSS_1.0.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'CSS_1.1.html',
      template: './src/CSS/CSS_1.1.html',
      chunks: ['CSS_1.1.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'CSS_1.2.html',
      template: './src/CSS/CSS_1.2.html',
      chunks: ['CSS_1.2.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'CSS_1.3.html',
      template: './src/CSS/CSS_1.3.html',
      chunks: ['CSS_1.3.html']
    }),

    //HTML
    new HtmlWebpackPlugin({
      filename: 'HTML_1.0.html',
      template: './src/HTML/HTML_1.0.html',
      chunks: ['HTML_1.0.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'HTML_1.1.html',
      template: './src/HTML/HTML_1.1.html',
      chunks: ['HTML_1.1.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'HTML_1.2.html',
      template: './src/HTML/HTML_1.2.html',
      chunks: ['HTML_1.2.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'HTML_1.3.html',
      template: './src/HTML/HTML_1.3.html',
      chunks: ['HTML_1.3.html']
    }),
    new HtmlWebpackPlugin({
      filename: 'HTML_1.4.html',
      template: './src/HTML/HTML_1.4.html',
      chunks: ['HTML_1.4.html']
    }),
    //HTML_test
    new HtmlWebpackPlugin({
      filename: 'HTML_test.html',
      template: './src/HTML/HTML_test.html',
      chunks: ['main','index']
    }),
    new HtmlWebpackPlugin({
      filename: 'Sass_test.html',
      template: './src/Sass/Sass_test.html',
      chunks: ['main','index']
    }),
    // Кладем стили в отдельный файлик
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),

    // Копируем картинки
    new CopyWebpackPlugin([
      {
        from: './src/img',
        to: 'img',
      },
    ])
  ],
};
