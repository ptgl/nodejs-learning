module.exports = {
    entry: "./public/MainModules.js",
    output: {
      filename: "bundle.js"
    },
    mode : "development",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }, 
        {
          test: /\.html$/,
          use: {
              loader: "html-loader",
              options: {
                  minimize: true
              }
          }
      },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: "file-loader",
          options: {
              name: 'images/[name].[ext]'
          }
      },
      {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ["file-loader"]
      }
      ]
    },
    watch: true
  }