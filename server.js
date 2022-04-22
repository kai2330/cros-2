// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: ['http://dofusports.xyz','http://roystream.com','http://volokit2.com','http://nodelaytv.pw','https://dofusports.xyz','https://roystream.com','https://volokit2.com','https://nodelaytv.pw'], // Allow all origins
    //requireHeader: ['origin', 'x-requested-with'],
    //removeHeaders: ['cookie', 'cookie2'],
    setHeaders:{'referer':'http://hockeyweb.live'}
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
