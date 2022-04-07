const express = require("express");
// const bodyParser = require("body-parser");

const port = process.env.PORT || 5000;

const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`The SERVER HAS STARTED ON PORT: ${port}`);
});
