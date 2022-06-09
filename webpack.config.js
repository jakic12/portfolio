const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});
module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /(\.js$)|(\.jsx$)/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        loader: "file-loader",
      },
      /*{
        test: /\.(webp)$/i,
        loader: "webp-loader",
      },*/
    ],
  },
  plugins: [htmlPlugin],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
