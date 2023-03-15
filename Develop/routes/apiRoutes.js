const api = require("express")();
const { newNote } = require("../lib/notes");
// const { readFromFile } = require()
const fs = require("fs");
const { readAndAppend, readFromFile } = require("../helpers/fsUtil");
const path = require("path");

api.get("/notes", (req, res) => {
  console.info(`${req.method} request for notes`);
  // readFromFile("../db/db.json").then((data) => res.json(JSON.parse(data)));
  fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
    if (err) throw err;
    notesArray = JSON.parse(data);
    res.json(notesArray);
  });
});

api.post("/notes", (req, res) => {
  const { title, text } = req.body;

  if (title && text) {
    console.info(`${req.method} title and text accepted`);
    const newNote = {
      title,
      text,
    };

    readAndAppend(newNote, path.join(__dirname, "../db/db.json"));
    // fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
    //   if (err) throw err;
    //   notesArray = JSON.parse(data);
    //   notesArray.push(newNote);
    //   console.info(notesArray);
    // });
    // fs.writeFile(path.join(__dirname, "../db/db.json"), notesArray);
    const response = {
      status: "success!",
      body: newNote,
    };

    res.json(response);
    res.json(newNote);
    console.info(newNote);
    // fs.readFile("../db/db.json", (err, data) => {
    //   if (err) throw err;

    //   // let num = 1;
    //   // notesArray.forEach((note, index) => {
    //   //   note.id = num;
    //   //   num++;
    //   //   return notesArray;
    //   // });

    //   stringData = JSON.stringify(notesArray);
    //   console.log(notesArray + "notes array ");

    //   fs.writeFile("../db/db.json", stringData, (err, data) => {
    //     if (err) throw err;
    //   });
    // });
  } else {
    console.info(`${req.method} note error`);
    res.json("error in posting note");
  }
});
module.exports = api;
