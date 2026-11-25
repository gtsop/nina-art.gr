import path from "node:path";

export default {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: "./src/index.html",
  output: {
    filename: "[contenthash].[name].js",
    htmlFilename: "[name].html",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: "./dist",
    watchFiles: ["./src/**/*"],
  },
};
