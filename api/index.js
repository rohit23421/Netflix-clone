require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED SUCCESSFULLY"))
  .catch((err) => console.log(err));

//to accept the json files
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(8800, () => {
  console.log("SERVER UP AND RUNNING ON PORT 8800...");
});
