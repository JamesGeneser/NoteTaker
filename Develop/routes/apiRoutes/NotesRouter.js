const router = require("express").Router();
const { newNote } = require("../../db/notes");
let { notesArray } = require("../../db/db.json");

router.get("/notes", (req, res) => {
  let response = notesArray;
  res.json(results);
});
