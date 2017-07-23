const path = require('path')

module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'example/src')
                ],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    },
                    {
                        loader: 'eslint-loader'
                    }
                ]
            },
        ]
    },

    devtool: 'cheap-module-source-map'
}