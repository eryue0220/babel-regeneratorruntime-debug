const path = require('path')
const plugins = []

module.exports = {
  entry: {
    async: path.join(__dirname, './async.js')
  },
  output: {
    filename: '[name].test.js',
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ["@babel/preset-env"],
            ["@babel/preset-react", {}],
          ],
          plugins: plugins.concat([
            'syntax-dynamic-import',
            'transform-class-properties',
            'transform-decorators-legacy',
            'transform-object-rest-spread'
          ].map(x => require.resolve(`babel-plugin-${x}`)))
        }
      }
    ]
  }
}
