# Webpack Start - From Scratch

Abbreviated from [Webpack Docs: Getting Started](https://webpack.js.org/guides/getting-started/)

1.  In your project repo, initalize npm and install webpack and webpack-cli

    > $ npm init -y
    >
    > $ npm install --save-dev webpack webpack-cli

    Other useful packages to install now or later (See below):

    - **html-webpack-plugin** for HTML handling (assumed for this guide)
    - **webpack-dev-server** for automatic refreshes (assumed for this guide)
    - **style-loader** & **css-loader** for CSS handling
    - **html-loader** if referencing image files in the HTML
    - **webpack-merge** for splitting config file

2.  Remove the "type" property from package.json.

3.  Create folder "src" containing files "index.js" amd "template.html. Touch .gitignore and add node_modules and dist.

    > $ mkdir src && touch src/index.js src/template.html

4.  Populate template.html with boilerplate, do not use a script tag.

5.  Install dependencies:

    > $ npm install --save library-name

6.  Touch and populate webpack.config.js.

        const path = require("path");
        const HtmlWebpackPlugin = require("html-webpack-plugin");

        module.exports = {
          mode: "development",
          entry: "./src/index.js",
          output: {
            filename: "main.js",
            path: path.resolve(__dirname, "dist"),
            clean: true,
          },
          // To track errors to correct file and line
          devtool: "eval-source-map",
          // To automatically refresh after changes
          devServer: {
            watchFiles: ["./src/template.html"],
          },
          plugins: [
            new HtmlWebpackPlugin({
              template: "./src/template.html",
            }),
          ],
        };

7.  In package.json, create the scripts "build" and "dev". This is just a more intuitive names that describe their functions.

        "scripts":
        {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack"
        "dev": "webpack serve",
        },

8.  Run build to generate dist/main.js:

    > $ npx run build

9.  Run the webpack serve command for automatic re-builds, view at http://localhost:8080/

    > $ npx run dev

## Asset Management

1.  Install dependencies.

    > npm install --save-dev style-loader css-loader

2.  Update the webpack.config.js exports.

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

3.  Add .css files, imgs, and .woff files to src/ folder.

4.  Import style sheets and img files to index.js.

        import './style.css';

5.  Add the font-face declaration to your .css file.

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
TBA: 3 image handling options

## Development Tools

1.  In webpack.config.js, set mode to 'development'.

2.  Configure a source map to track errors to their origin file and line number, instead of the compliled file. In webpack.config.js, add:

        devtool: 'inline-source-map',

3.  Enable the "watch" script to automatically recompile as files are updated. In package.json, add to "scripts":

        "watch": "webpack --watch",

    Run the script with:

    > $ npm run watch

## Deploying to GitHub Pages

1. Make a new branch for deployment:

   > $ git branch gh-pages

2. Check that all changes are commited:

   > $ git status

3. Merge changes from the main branch into the deployment branch:

   > $ git checkout gh-pages && git merge main --no-edit

4. (TBA with Script!) Bundle

   > $ npx webpack

5. Push deployment subtree branch, then return to main:

   > git add dist -f && git commit -m "Deployment commit"  
   > git subtree push --prefix dist origin gh-pages  
   > git checkout main

6. Repeat steps 2 through 5 for reployments.

7. On GitHub settings, set source branch to gh-pages

## Useful Scripts
