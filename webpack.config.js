const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    watchOptions: {
        poll: 1000,
    },
    mode: "production",
    entry: {
        index: "./src/index.js",
    },
    devtool: "source-map",
    devServer: {
        static: "./dist",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Joshua's Bar and Grill",
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        publicPath: "/restaurant/",
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
};
