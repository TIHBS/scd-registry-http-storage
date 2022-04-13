const express = require("express");
const app = express();
const port = 3000;

var options = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["htm", "html"],
  index: false,
  maxAge: "1d",
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set("x-timestamp", Date.now());
  },
};

app.use(express.static("public", options));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
