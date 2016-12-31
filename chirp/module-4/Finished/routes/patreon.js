var express = require('express');
var router = express.Router();
var request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {
    //console.log("request is " + req.user.username);
    res.render('index', { title: "Chirp"});



    var options = { method: 'GET',
        url: 'http://www.patreon.com/oauth2/authorize',
        qs:
        { response_type: 'code',
            client_id: 'a7e93821e29e321ab7b5de2d6e39fc12a1604686d857b7ddd4e80bed5f17057c',
            redirect_uri: 'http://forum-arnii.j.layershift.co.uk/bonus.php' },
        headers:
        { 'postman-token': 'a306fb5a-88f9-c236-ce62-059a49bc80d6',
            'cache-control': 'no-cache',
            'content-type': 'application/x-www-form-urlencoded' },
        form: { username: 'anton', password: 'password' } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });



});

module.exports = router;







