"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello);
router.get("/login", ctrl.login); // 로그인 경로로 왔을 때는, 로그인 화면으로 이동

module.exports = router;
