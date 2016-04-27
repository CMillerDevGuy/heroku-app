/**
 * Created by cmiller on 4/27/2016.
 */
var middleware = {
    requireAuthentication : function(req, res, next){
        console.log('private route hit');
        next();
    },
    logger: function(req, res, next){
        console.log('Request: '+ new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
        next();
    }
}

module.exports = middleware;