const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server.config");
const app = express();

const apiRouter = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server Listening at Port : ${PORT}`);
});
