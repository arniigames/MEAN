var express = require('express');
var router = express.Router();

router.route('/valid').get(function(req, res, next){

        console.log(req.query.code);

    next();

    }
);

router.route('/done').get(function(req, res){

        console.log("DONE");
        //console.log(res);
    }
);


module.exports = router;


/**
 * Created by ARM-MBA on 28/12/2016.
 */
