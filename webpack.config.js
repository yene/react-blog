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
            }
        ]
    },
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
