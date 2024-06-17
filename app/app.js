"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs"); // view엔진인 ejs, ejs은 html과 굉장히 비슷

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app; // www.js로 내보내기 위함
