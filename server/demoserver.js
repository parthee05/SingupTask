const express = require("express");
const app = express();

const inSecurePort = 8000;

const server = app.listen(inSecurePort, function () {
  let host = server.address().address
  let port = server.address().port

  console.log('App Listening at : http://127.0.0.1:'+port)
});
