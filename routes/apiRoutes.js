const router = require("express").Router();
const fs = require ("fs");
const { v4: uuidv4 } = require('uuid');

// gets all notes
router.get("/api/notes", async (req, res) => {
  const noteJson = await JSON.parse(fs.readFileSync("./db/db.json","utf8"));
  res.json(noteJson);
});

// creates notes
router.post("/api/notes", (req, res) => {
  const noteJson = JSON.parse(fs.readFileSync("./db/db.json","utf8"));
  const newFeedback = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  noteJson.push(newFeedback);
  fs.writeFileSync("./db/db.json",JSON.stringify(noteJson));
  res.json(noteJson);
});

// deletes note
router.delete("/api/notes/:id", (req, res) => {
  let savedNote = fs.readFileSync("./db/db.json", "utf8");
  const savedNoteJSON =  JSON.parse(savedNote);
  const createNote = savedNoteJSON.filter((note) => { 
    return note.id !== req.params.id;
  });
  fs.writeFileSync("./db/db.json",JSON.stringify(createNote));
  res.json("Note has been deleted.");
});

module.exports = router;