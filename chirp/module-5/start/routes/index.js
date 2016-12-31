var express = require("express");
var router = express.Router();




/* GET Homepage */

router.get('/',function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
res.render('index',{title: "vvhhhoip", vtitle:"V title"});
});


module.exports = router;