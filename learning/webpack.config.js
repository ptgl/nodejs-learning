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
        }
      ]
    },
    watch: true
  }