const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const Routes = require("./routes/route.js");

const PORT = process.env.PORT || 5000;

dotenv.config()

app.use(express.json({ limit: "10mb" }));
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log(" mongodb connected"))
  .catch((err) => console.log(" mongodb not connected: ", err));

app.use("/", Routes);

app.listen(PORT, () => {
  console.log(` Server started:- ${PORT}`);
});
