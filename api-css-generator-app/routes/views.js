const express = require("express");
const router = express.Router();
const View = require("../models/view");

// create a CRUD OF HISTORIAL
// GET ALL VIEWS
router.get("/", async (req, res) => {
    res.send("hello")
  try {
    const views = await View.find();
    res.json(views);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// CREATE A VIEW
router.post("/", (req, res) => {});

// UPDATE A VIEW
router.patch("/:id", (req, res) => {});

// DELETE A VIEW
router.delete("/:id", (req, res) => {});

module.exports = router;
