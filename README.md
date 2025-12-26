# Webpack Quickstart

Abbreviated from [Webpack Docs: Getting Started](https://webpack.js.org/guides/getting-started/)

1. In your project repo, initalize npm and install webpack and webpack-cli

   > $ npm init -y
   >
   > $ npm install webpack webpack-cli --save-dev

2. Create folder "dist" containing file "index.html" and folder "src" containing file "index.js"

   > $ mkdir dist && touch dist/index.html
   >
   > $ mkdir src && touch src/index.js

3. In package.json, remove "main": "index.js" and add "private": true

   > **"private": true,**  
   > ~~"main": "index.js"~~

4. Install dependencies:

   > $ npm install --save library-name

5. Add the script tag to index.html. Doc "main.js" will be generated shortly.

        <body>
          <script src="main.js"></script>
        </body>

6. In package.json, change to "type": "module", OR keep "type": "module" if using a config file.

        "author": "",
        "license": "ISC",
        "type": "module",

7. Generate dist/main.js:

    >$ npx webpack

8. Generate and populate webpack.config.js.

    >touch webpack.config.js

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


9. In package.json, enable the script "npm run build".

        "scripts":
        {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack"
        },

10. Add .gitignore with node_modules before committing!

## Asset Management

1. Install dependencies.
    >npm install --save-dev style-loader css-loader

2. Update the webpack.config.js exports.

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

3. Add .css files, imgs, and .woff files to src/ folder.

4. Import style sheets and img files to index.js.

        import './style.css';

5. Add the font-face declaration to your .css file.

        @font-face {
          font-family: 'MyFont';
          src: url('./my-font.woff2') format('woff2'),
            url('./my-font.woff') format('woff');
          font-weight: 600;
          font-style: normal;
        }

        .hello {
          color: red;
          font-family: 'MyFont';
          background: url('./icon.png');
        }