// const { notes } = require("../../db/db.json");
// const { validateNote, createNewNote } = require("../../lib/notes");
const router = require("express").Router();
const fs = require ("fs");

// gets all notes
router.get("/notes", async (req, res) => {
  const dbJson = await JSON.parse(fs.readFileSync("./db/db.json","utf8"));
  res.json(dbJson);
});

// creates notes
router.post("/notes", (req, res) => {
  const dbJson = JSON.parse(fs.readFileSync("./db/db.json","utf8"));
  const newFeedback = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  dbJson.push(newFeedback);
  fs.writeFileSync("./db/db.json",JSON.stringify(dbJson));
  res.json(dbJson);
});

// deletes note
router.delete("/notes/:id", (req, res) => {
  let savedNote = fs.readFileSync("./db/db.json", "utf8");
  const savedNoteJSON =  JSON.parse(savedNote);
  const newNotes = savedNoteJSON.filter((note) => { 
    return note.id !== req.params.id;
  });
  fs.writeFileSync("./db/db.json",JSON.stringify(newNotes));
  res.json("Note deleted.");
});

module.exports = router;