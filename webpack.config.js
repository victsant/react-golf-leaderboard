const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isAnalyze = process.env.analyze === 'true';

const config = {
    entry: {
        main: ['./src/index.js']
    },
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, './build'),
        publicPath: '/',
    },
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'initial',
            cacheGroups: {
                default: false,
                vendors: false,
                vendor: {
                    name: 'vendor',
                    chunks: 'all',
                    test: /node_modules/,
                },
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png)$/,
                loader: 'url-loader',
                options: {
                    // Images larger than 10 KB won’t be inlined
                    limit: 10 * 1024
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    resolve: {
        modules: ['node_modules', './src'],
        extensions: ["*", '.js']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            chunks: ['main', 'vendor']
        })
    ]
};

if (isAnalyze) {
    config.plugins.push(
        new BundleAnalyzerPlugin({
            openAnalyzer: true,
            logLevel: 'info'
        })
    )
}


module.exports = config;