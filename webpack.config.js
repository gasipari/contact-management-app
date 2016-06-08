var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: [
        "script!jquery/dist/jquery.min.js",
        "script!foundation-sites/dist/foundation.min.js",
        "script!foundation-sites/dist/plugins/foundation.tooltip.js",
        "./app/app.jsx"
    ],
    externals: {
        jquery: "jQuery"
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery"
        })
    ],
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        root: __dirname,
        modulesDirectories: [
            "node_modules",
            "./app/components",
            "./app/services"
        ],
        alias: {
            applicationStyles: "app/styles/app.scss",
            actions: "app/actions/actions.jsx"
        },
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"]
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: "file?name=/fonts/[name].[ext]"
            }
        ]
    },
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, "./node_modules/foundation-sites/scss")
        ]
    },
    devtool: "cheap-module-eval-source-map"//help to debug
};
