var models = require('../models/mdl_generics');
var shortid = require("shortid");

var controller = {
    insertRequest: function(request, callback){
        request.reference = shortid.generate();

        models.addNew('request', request, function(error, result){
            if(!error){
                callback(request.reference);
            } else {
                console.log('Error: ', error);
            }
        });   
    }
}

module.exports = controller;