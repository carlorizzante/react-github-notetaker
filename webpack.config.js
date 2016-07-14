module.exports = {
  entry: "./app/App.jsx",
  output: {
    filename: "./public/bundle.js"
  },
  devServer: {
    inline: true,
    port: 3333
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      "node_modules",
      "./app/components",
      "./app/utils"
    ],
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  devtool: "cheap-module-eval-souce-map"
}
