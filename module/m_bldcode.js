'use strict'
//檔名皆為m_開頭
const bldcode = require("../kernel/db/bldcode");
// 私有變數
//-------------------------------------------
// 要公開之 function

module.exports = {

    /**
     * @param  {bldcode} qry 查詢條件，欄位參照 /db/bldcode
     * @param  {any} callback
     */
    /**
     qry是條件 寫在ROUTES內 可以改routes動條件 這邊就不用動 這邊就單純放操作
     var qry = {
      code_type: req.body.code_type
     }

     條件           where: qry,
     順序(order by) order :[
                     ['code_seq1', 'asc']
                    ]
       **/
     query: function (qry, callback) {
        bldcode.findAll({
            where: [qry]
            ,
            order :[
                ['code_seq1', 'asc']
            ]
        }).then(function (result) {
            callback(null, result);
        }).catch(function (err) {
            callback(err)
        })
    },
    /**
     database撈的資料放在result內 傳出
     **/

    del: function (guid, callback) {
        var qry = {guid: guid};
        bldcode.destroy({
            where: qry,
        }).then(function (result) {
            callback(null, result);
        }).catch(function (err) {
            callback(err)
        })
    },
    // cr_date 新增日期時間
    add : function(obj, callback) {
        obj.cr_date = Date.now();
        obj.code_status = "1";
        bldcode.create(obj)
        .then((data) => {
            callback(null)
        }).catch((err) => {
            callback(err)
        })
    },

    edit : function(obj, qry, callback) {
        obj.up_date = Date.now();
        bldcode.update(
            obj, {
            where: qry
        }).then((data) => {
            callback(null)
        }).catch((err) => {
            callback(err)
        })
    }
}