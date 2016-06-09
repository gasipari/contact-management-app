var webpackConfig = require("./webpack.config.js");

module.exports = function (config) {
    config.set({
        browsers: ["Chrome"],
        singleRun: true,
        frameworks: ["mocha"],
        files: [
            "node_modules/jquery/dist/jquery.min.js",
            "node_modules/foundation-sites/dist/foundation.min.js",
            "app/tests/**/*.test.*"],
        preprocessors: {
            "app/tests/**/*.test.*": ["webpack", "sourcemap"]
        },
        reporters: ["mocha"],
        client: {
            mocha: {
                timeout: "5000"
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};
