const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readAndAppend, readFromFile } = require("../helpers/fsUtil");
const path = require("path");

router.get("/notes", (req, res) => {
  let database = path.join(__dirname, "../db/db.json");
  readFromFile(database).then((data) => res.json(JSON.parse(data)));
});

router.post("/notes", (req, res) => {
  const { title, text } = req.body;

  if (title && text) {
    console.info(`${req.method} title and text accepted`);
    const newNote = {
      id: uuidv4(),
      title,
      text,
    };

    readAndAppend(newNote, path.join(__dirname, "../db/db.json"));
    res.json("note added");
  } else {
    console.info(`${req.method} note error`);
    res.error("error in posting note");
  }
});

module.exports = router;
