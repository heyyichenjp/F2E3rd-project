'use strict';
//database的設定 幾乎都設定好了 不用動
var Sequelize = require('sequelize');
var db = require("./database");
var object = db.define("bldcode", {

  guid: {
    field: "guid",
    type: Sequelize.UUID,
    defaultValue: Sequelize.fn('uuid_generate_v4'),
    allowNull: false,
    primaryKey: true,
  },
  code_type: {
    field: "code_type",
    type: Sequelize.STRING(6),
    allowNull: false,
    primaryKey: true
  },
  code_seq1: {
    field: "code_seq1",
    type: Sequelize.STRING(6)
  },
  code_seq2: {
    field: "code_seq2",
    type: Sequelize.STRING(6)
  },
  code_seq3: {
    field: "code_seq3",
    type: Sequelize.STRING(6)
  },
  code_seq4: {
    field: "code_seq4",
    type: Sequelize.STRING(6)
  },
  code_seq5: {
    field: "code_seq5",
    type: Sequelize.STRING(6)
  },
  code_desc1: {
    field: "code_desc1",
    type: Sequelize.STRING(400)
  },
  code_desc2: {
    field: "code_desc2",
    type: Sequelize.STRING(400)
  },
  code_desc3: {
    field: "code_desc3",
    type: Sequelize.STRING(400)
  },
  code_desc4: {
    field: "code_desc4",
    type: Sequelize.STRING(400)
  },
  code_desc5: {
    field: "code_desc5",
    type: Sequelize.STRING(400)
  },
  code_desc6: {
    field: "code_desc6",
    type: Sequelize.STRING(400)
  },
  code_desc7: {
    field: "code_desc7",
    type: Sequelize.STRING(400)
  },
  cr_date: {
    field: "cr_date",
    type: Sequelize.DATE,
    defaultValue: Sequelize.fn("NOW")
  },
  up_date: {
    field: "up_date",
    type: Sequelize.DATE,
  },
  cr_user: {
    field: "cr_user",
    type: Sequelize.STRING(30)
  },
  op_user: {
    field: "op_user",
    type: Sequelize.STRING(30)
  },
  code_status: {
    field: "code_status",
    type: Sequelize.STRING(1),
    allowNull:false
  }
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = object;