const router = require("express").Router();
const { newNote } = require("../../db/notes");
let { notesArray } = require("../../db/db.json");

router.get("/notes", (req, res) => {
  console.info(`${req.method} request received for feedback`);

  readFromFile("../../db/db.json").then((data) => res.json(JSON.parse(data)));
  console.log(data);
});

router.post("/notes", (req, res) => {
  if (notesArray) {
    req.body.id = notesArray.length.toString();
  } else {
    req.body.id = 0;
  }
  res.json(newNote(req.body, notesArray));
});
module.exports = router;
