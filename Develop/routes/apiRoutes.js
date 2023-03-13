const router = require("express").Router();
const { newNote } = require("../lib/notes");
const fs = require("fs");
let { notesArray } = require("../db/db.json");

router.get("/api/notes", (req, res) => {
  fs.readFile("../db/db.json"),
    (err, data) => {
      if (err) throw err;
      notesArray = JSON.parse(data);
      res.send(notesArray);
    };

  //   readFromFile("../../db/db.json").then((data) => res.json(JSON.parse(data))) = notesArray

  //   let response = notesArray;
  //   res.json(response);
});

router.post("/api/notes", (req, res) => {
  const userNotes = req.body;

  fs.readFile("../db/db.json", (err, data) => {
    if (err) throw err;
    notesArray = JSON.parse(data);
    notesArray.push(userNotes);
    let num = 1;
    notesArray.array.forEach((note, index) => {
      note.id = num;
      num++;
      return notesArray;
    });

    stringData = JSON.stringify(notesArray);

    fs.writeFile("../db/db.json", stringData, (err, data) => {
      if (err) throw err;
    });
  });
  res.send("note recieved");
});
module.exports = router;
