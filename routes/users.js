var express = require('express');
var router = express.Router();

/* GET users listing. */
// http://localhost:3000/users/
//res.send('respond with a resource'); 直接在browser上顯示
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
