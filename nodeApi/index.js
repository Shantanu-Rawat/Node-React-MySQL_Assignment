const express = require("express");
const app = express();
app.use(express.json());
const { db } = require("./Infrastructure/database");
const router = require("./routes");
const cors = require('cors');

 app.use(
  cors({
    origin: '*'
  }),
   router
 );

app.listen(8080, () => {
  console.log("server started at 8080");
});