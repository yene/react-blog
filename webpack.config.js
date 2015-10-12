var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname + "/app",
    entry: "./index.jsx",
    output: {
        path: "./build",
        filename: "app.js",
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("main.css")
    ],
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'marked': 'marked'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        contentBase: "./build"
    }
};
