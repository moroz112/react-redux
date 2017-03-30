module.exports = {
    context: __dirname + '/js',
    entry: __dirname + "/index.js",
    output: {
        path: __dirname + "/js",
        filename: "bundle.js"
    },
    resolve: {
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.html$/,
                loader: "html"
            }
        ]
    }
};