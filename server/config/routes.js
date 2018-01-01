var mainroutes = require('../controllers/mainControl.js');
var path = require('path');


module.exports = function(app){ 



    app.all("*",function(req,res){
        res.sendFile('index.html', { root: './client/dist' });
    })
}