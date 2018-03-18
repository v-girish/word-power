const port = process.env.PORT || 3000;
const ON_HEROKU = process.env.ON_HEROKU;

if ( ON_HEROKU ) {
    var express = require('express');
    var app = express();
    var path = require('path');
    app.use(express.static(path.join(__dirname, '../dist')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../dist', 'index.html'));
    });

    app.listen(port);
    console.log("App listening on port " + port);
}
else {
    var webpack = require('webpack');
    var WebpackDevServer = require('webpack-dev-server');
    var config = require('./webpack.dev.config');
    new WebpackDevServer(webpack(config), {
        publicPath: config.output.publicPath,
        compress: true,
        hot: true,
        inline: true,
        historyApiFallback: true,
        quiet: false,
        noInfo: false,
        stats: {
            assets: false,
            colors: true,
            chunks: false,
            chunkModules: false,
            hash: false,
            maxModules: 0,
            timings: true,
            version: false
        }
    }).listen(port, 'localhost', function (err) {
        if (err) {
            console.log(err);
        }
        console.log('Listening at localhost:'+port);
    });
}

