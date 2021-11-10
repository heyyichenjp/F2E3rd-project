'use strict';

var Sequelize = require('sequelize');
const fs = require("fs")
const path = require("path")
var omitNull_TorF
if (process.env.CONN_omitNull === 'false') {
    omitNull_TorF = false
} else {
    omitNull_TorF = true
}
// 改後方的變數接不同的DATABASE
const CONN_DATABASE = process.env.CONN_DATABASE || "kcgbm";
const CONN_USERNAME = process.env.CONN_USERNAME || "cpabm";
const CONN_PASSWORD = process.env.CONN_PASSWORD || "cpabm";
const CONN_DIALECT = process.env.CONN_DIALECT || "postgres";

const CONN_OPTION = {
    host: process.env.DB_HOST || "192.168.1.183",
    port: parseInt(process.env.DB_PORT) || 5432,
    dialect: CONN_DIALECT,
    //    logging: process.env.DB_LOG === "true"  || true,
    logging: true,
    omitNull: omitNull_TorF, //開發BMIS時先寫死成false PUSH上去時要改回 omitNull_TorF
    timezone: "+08:00",
    pool: {
        max: 20,
        min: 0,
        idle: 10000
    }
};

/*
const CONN_DATABASE = process.env.CONN_DATABASE || "lihpo";
const CONN_USERNAME = process.env.CONN_USERNAME || "lihpo";
const CONN_PASSWORD = process.env.CONN_PASSWORD || "lihpo";
const CONN_DIALECT = process.env.CONN_PASSWORD || "mssql";

const CONN_OPTION = {
    host: process.env.DB_HOST || "192.168.1.92",
    port: process.env.DB_PORT || 1433,
    dialect: CONN_DIALECT,
    //    logging: process.env.DB_LOG === "true"  || true,
    logging: true,
    omitNull: true,
    timezone: "+08:00",
    pool: {
        max: 20,
        min: 0,
        idle: 10000
    }
};
*/

var dbStroage = new Sequelize(
    CONN_DATABASE,
    CONN_USERNAME,
    CONN_PASSWORD,
    CONN_OPTION);


module.exports = dbStroage;