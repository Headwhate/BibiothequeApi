const express = require("express");
const path = require("path");
const mongoose=require('mongoose');
const router = require("./routes.js")
const bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine', 'pug');
app.use(router);

app.listen(3005)
console.log("good start")
module.exports = app
