//DEPENDENCIES
require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const PeopleRouter = require("./controllers/people");

//MIDDLEWARE
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//ROUTE
app.use("/people", PeopleRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

//LISTEN
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`I'm listening on port ${PORT}`);
});
