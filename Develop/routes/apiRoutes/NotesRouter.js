const router = require("express").Router();
const { newNote } = require("../../db/notes");
let { notesArray } = require("../../db/db.json");

router.get("/notes", (req, res) => {
  let response = notesArray;
  res.json(results);
});
router.post("/notes", (req, res) => {
  if (notesArray) {
    req.body.id = notesArray.length.toString();
  } else {
    req.body.id = 0;
  }
  res.json(newNote(req.body, notesArray));
});
