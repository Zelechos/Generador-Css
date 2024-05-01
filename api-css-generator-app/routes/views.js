const express = require("express");
const router = express.Router();
const View = require("../models/view");

// create a CRUD OF HISTORIAL
// GET ALL VIEWS
router.get("/", async (req, res) => {
  try {
    const views = await View.find();
    res.json(views);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// CREATE A VIEW
router.post("/", async (req, res) => {
  const view = new View({
    user: req.body.user,
    codeCss: req.body.codeCss,
    codeHtml: req.body.codeHtml,
  });

  try {
    const newView = await view.save();
    res.status(201).json(newView);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// UPDATE A VIEW
router.patch("/:id", (req, res) => {});

// DELETE A VIEW
router.delete("/:id", (req, res) => {});

module.exports = router;
