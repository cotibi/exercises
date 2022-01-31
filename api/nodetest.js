const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/check", (req, res) => {
  res.send({text:"Server runnning on port 3001"})
});

app.listen(3001, () => console.log("Listening on port 3001..."));