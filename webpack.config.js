export default {
  entry: "./src/index.html",
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devServer: {
    static: "./dist",
  },
};
