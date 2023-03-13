const router = require("express").Router();
const { newNote } = require("../../lib/notes");
let { notesArray } = require("../../db/notes");

router.get("/notes", (req, res) => {
  console.info(`${req.method} request received for feedback`);
  let response = notesArray;
  res.json(response);
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
