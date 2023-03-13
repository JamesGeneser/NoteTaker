const express = require("express");
const apiRoute = require("./routes/apiRoute");
const htmlRoute = require("./routes/htmlRoute");

const PORT = process.env.port || 3009;
// const api = require("./routes/index.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoute);
app.use("/", htmlRoute);

// app.use(express.static("public"));

app.get("/api/notes", (req, res) => {
  console.info(`${req.method} request received for feedback`);

  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
  console.log(data);
});
// // GET Route for homepage
// app.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "/public/index.html"))
// );

// // GET Route for feedback page
// app.get("/feedback", (req, res) =>
//   res.sendFile(path.join(__dirname, "/public/pages/feedback.html"))
// );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
