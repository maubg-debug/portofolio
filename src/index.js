var express = require("express");
var utils = require("./utils/utils");
var app = express();
var PORT = 3000 | process.env.PORT;

app.use(express.static('src'))

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {

  utils.sendTemplate("index", (data) => {
      res.send(data)
      res.end();
  });
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
