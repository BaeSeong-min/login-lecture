"use strict";
// 서버 실행시키는 코드

const app = require("../app");
const PORT = 3000;

app.listen(PORT, () => {
  console.log("서버 가동");
});
