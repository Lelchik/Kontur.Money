var path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.bundle.js",
        path: path.resolve(__dirname, "build"),
        publicPath: "build",
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(c|le)ss$/,
                rules: [
                    {
                        use: ["style-loader", "css-loader", "less-loader"],
                    },
                ],
            },
            {test: /\.(png|woff|woff2|eot)$/, loader: "file-loader"},
        ],
    },
};
