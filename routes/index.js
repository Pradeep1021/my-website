var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose')
//require('../Models/user')
//var user = mongoose.model('user')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('Template', { title: 'Express' });
//    res.sendfile(path,{'root':'../public/pages/website_version1.html'})
});

//router.post('/', function (req, res) {
//
//    user.create(req.body, function (err, docs) {
//        if (err) {
//            console.log(err);
//            res.send(err);
//        }
//        else
////        res.send(docs)
////            setTimeout(function(){
//                res.redirect('/');
////            },2000);
//
//    })
//});
module.exports = router;
