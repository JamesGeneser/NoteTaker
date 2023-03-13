const fs = require("fs");
const path = require("path");

function newNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "./db.json"),
    JSON.stringify({ notesArray }, null, 2)
  );
  return note;
}

fs.writeFileSync(
  path.join(__dirname, "./db.json"),
  JSON.stringify({ notesArray }, null, 2)
);
// return notesArray;

module.exports = {
  newNote,
};
