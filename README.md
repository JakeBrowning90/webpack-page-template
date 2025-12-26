# Webpack Quickstart

Abbreviated from [Webpack Docs: Getting Started](https://webpack.js.org/guides/getting-started/)

1. In your project repo, initalize npm and install webpack and webpack-cli

    >$ npm init -y  
    >
    >$ npm install webpack webpack-cli --save-dev 

2. Create folder "dist" containing file "index.html" and folder "src" containing file "index.js"

    >$ mkdir dist && touch dist/index.html  
    >
    >$ mkdir src && touch src/index.js

In package.json, remove "main": "index.js" and add "private": true

Install dependencies: npm install --save <library>

In HTML body <script src="main.js"></script>

In package.json, keep "type": "module" if using config file
OR
In package.json, change to "type": "module"

To generate dist/main.js: npx webpack

touch webpack.config.js, fill with:

    import path from "path";
    import { fileURLToPath } from "url";

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    export default {
      entry: "./src/index.js",
      output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
      },
      mode: 'development' OR 'production' OR 'none'
    };

---

in package.json, add to "scripts":
{
"test": "echo \"Error: no test specified\" && exit 1",
"build": "webpack"
},

(Enables npm run build)

Add .gitignore with node_modules before committing!

## Asset Management

npm install --save-dev style-loader css-loader

Add to webpack.config.js exports:

          module: {
              rules: [
                {
                  test: /\.css$/i,
                  use: ['style-loader', 'css-loader'],
                },
                {
                  test: /\.(png|svg|jpg|jpeg|gif)$/i,
                  type: 'asset/resource',
                },
                {
                  test: /\.(woff|woff2|eot|ttf|otf)$/i,
                  type: 'asset/resource',
                },
              ],
            },

add .css , imgs, and .woff files to src folder
In index.html, add: import style and img files
Add @font-face {} to .css
