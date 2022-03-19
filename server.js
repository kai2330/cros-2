// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: ['dofusports.xyz','roystream.com','volokit2.com','nodelaytv.pw'], // Allow all origins
    //requireHeader: ['origin', 'x-requested-with'],
    //removeHeaders: ['cookie', 'cookie2'],
    setHeaders:{'referer':'http://thecyclingentertainment.com'}
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
