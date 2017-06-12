const path = require('path');

module.exports = {

   devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },

   entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        publicPath: '/js',
        filename: 'mybundle.js'
    },

   module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['latest', 'react'],
                    
                   plugins: [
                        //'transform-es3-member-expression-literals',
                        //'transform-es3-property-literals',
                        'react-html-attrs',
                        'transform-class-properties',
                        'transform-decorators-legacy'
                    ]
                }
            }
        ]
    }
};
