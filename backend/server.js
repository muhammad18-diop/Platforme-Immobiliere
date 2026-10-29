require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const pool = require("./Config/db");
const port = process.env.PORT || 5000;
const userRoutes = require("./Routes/user.route");

app.get("/", (req, res) => {
  res.send("Le serveur fonctionne correctement !");
});

app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server lancé sur le port ${port}`);
});