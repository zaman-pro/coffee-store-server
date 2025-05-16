const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("coffee is getting HOTTER!");
});

app.listen(port, () => {
  console.log(`Coffee server is running on port : ${port}`);
});
