const path = require("path");
const webpack = require("webpack");

module.exports = { // ES5 syntax
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                // Transpile ES6 syntax for .js and .jsx files
                test: /\.(js|jsx)$/, // Regular expression
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env"],
                }
            },
            {
                // Transpile CSS
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            },
        ],
    },
    resolve: {
        extensions: [
            "*",
            ".js",
            ".jsx"
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
}