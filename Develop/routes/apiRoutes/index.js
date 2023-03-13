const router = require("express").Router();
const notesRouter = require("./notesRouter");

router.use(notesRouter);
module.exports = router;
