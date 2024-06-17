"use strict";

const hello = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};

// index.js에서 사용할 수 있게끔 export
module.exports = {
  // 객체 hello : hello
  hello,
  login,
};
