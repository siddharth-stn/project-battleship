const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/game.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 5500,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
}