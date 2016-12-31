var express = require('express');
var router = express.Router();

router.route('/valid').get(function(req, res){

    console.log("CODE");
    console.log(req.query.code);
    res.redirect("http://google.com");

});

router.route('/done').get(function(req, res){
    
    
    console.log("DONE");
    //console.log(res);


    
});


module.exports = router;






