var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('Template', { title: 'Express' });
//    res.sendfile(path,{'root':'../public/pages/website_version1.html'})
});

module.exports = router;
