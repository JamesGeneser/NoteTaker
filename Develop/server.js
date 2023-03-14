const express = require("express");
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoute = require("./routes/htmlRoute.js");

const PORT = process.env.port || 3009;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoute);

app.use(express.static("public"));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
