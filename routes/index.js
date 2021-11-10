'use strict'
const jsSHA =  require('jssha')

var express = require('express');
const m_bldcode = require('../module/m_bldcode');
const TDXToken = require('../module/TDXToken')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'datatable範例' });
});

/* GET home page. */
router.get('/homepage', function(req, res, next) {
  res.render('homepage');
});

/**
 * ajax 查詢功能
 */
router.post("/api/v1/query", (req, res, next) =>{
  //req 傳入的值
  // qry為條件 進行修改條件 找到不同的結果
  var qry = {
    code_type: req.body.code_type,
  
  };
  //import  m_bldcode.js檔 裡面宣告好的database語法 .query 
  m_bldcode.query(qry, (err, result) => {
    
    if(err != null) {
      res.status(500).send("讀取資料失敗：" + err.message)
    } else {
      //console.log(result)
      res.json(result);
    }
  })
})

/**
 * 新增畫面
 */

router.get("/add", (req, res, next) => {
  var obj = {
    code_type: "",
    code_seq1: "",
    code_seq2: "",
    code_seq3: "",
    code_seq4: "",
    code_seq5: "",
    code_desc1: "",
    code_desc2: "",
    code_desc3: "",
    code_desc4: "",
    code_desc5: "",
    guid: ""
  }
  res.render("add", {code:obj});
})

/**
 * 修改畫面
 */
//修改和新增使用同一 add.ejs
//路徑 /edit?guid=
//req.query.guid 就是指edit?guid=後方
router.get("/edit", (req, res, next) => {
  var guid = req.query.guid; 
  if(typeof guid === 'undefined') {
    res.send("未傳入需修改之代碼")
    return false;
  }
  var qry = {
    guid: guid
  };
  m_bldcode.query(qry, (err, result) => {
    if(err != null) {
      res.status(500).send("讀取資料失敗：" + err.message)
    } else {
    //於database中找相同guid render出找到的第一筆之資料
      res.render("add", {code: result[0]});
    }
  })
})

/**
 * 資料新增功能
 */
//寫在add.ejs <form method=post action="/api/v1/add">
router.post("/api/v1/add", (req, res, next) => {
  if(req.body.guid === "") {
    m_bldcode.add(req.body, (err)=> {
      if(err != null) {
        res.status(500).send("新增資料失敗：" + err.message)
      } else {
        res.redirect("/");
      }
    })
  } else {
    var obj = req.body;
    var qry = {guid: obj.guid}
    delete obj["guid"];
    m_bldcode.edit(obj, qry, (err)=> {
      if(err != null) {
        res.status(500).send("新增資料失敗：" + err.message)
      } else {
        res.redirect("/");
      }
    })
  }
})

/**
 * 刪除資料
 */
//
router.get("/api/v1/delete", (req, res, next) => {
  var guid = req.query.guid;
  m_bldcode.del(guid, (err) => {
    //因為刪除成功時會 callback(null) 就是說當err != null 是刪除失敗
    if(err != null) {
      res.status(500).send("刪除資料失敗：" + err.message)
    } else {
      res.redirect("/");
    }
  })
})

module.exports = router;
