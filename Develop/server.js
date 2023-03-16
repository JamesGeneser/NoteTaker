const express = require("express");
const apiRoutes = require("./routes/apiRoutes.js");
const path = require("path");
const htmlRoutes = require("./routes/htmlRoutes.js");

const PORT = process.env.PORT || 3009;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
