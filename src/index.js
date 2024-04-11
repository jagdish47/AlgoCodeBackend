const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server.config");
const app = express();

const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter);

// last middleware if any error comes
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Listening at Port : ${PORT}`);
});
