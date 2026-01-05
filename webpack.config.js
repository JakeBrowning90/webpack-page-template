import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: "true",
  },
  // **Include modules and install dev dependecies as needed**
  // module: {
  //   rules: [
          // **For handling style sheets, npm install --save-dev style-loader css-loader** 
  //     // {
  //     //   test: /\.css$/i,
  //     //   use: ["style-loader", "css-loader"],
  //     // },

          // **For handling imgs and other HTML elements, npm install --save-dev html-loader** 
  //     // {
  //     //   test: /\.html$/i,
  //     //   loader: "html-loader",
  //     // },

          // **For handling local image files to be referenced in JS** 
  //     // {
  //     //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
  //     //   type: "asset/resource",
  //     // },
  //   ],
  // },
};
