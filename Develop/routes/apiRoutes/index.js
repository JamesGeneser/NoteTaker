const router = require("express").Router();
const notesRouter = require("./NotesRouter");

router.use(notesRouter);
module.exports = router;
