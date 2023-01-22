
module.exports = {

  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // property identifies which file or files should be transformed.
        exclude: /node_modules/,
        use: {
          // property indicates which loader should be used to do the transforming.
          loader: "ts-loader",
        },
      },
      //   {
      //     test: /\.css$/,
      //     use: ["style-loader", "css-loader"],
      //   },
    ],
  },
};
