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
router.patch("/:id", getView, async (req, res) => {
  if (req.body.user != null) {
    res.view.user = req.body.user;
  }
  if (req.body.codeCss != null) {
    res.view.codeCss = req.body.codeCss;
  }
  if (req.body.codeHtml != null) {
    res.view.codeHtml = req.body.codeHtml;
  }

  try {
    const updatedView = await res.view.save();
    res.json(updatedView);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE A VIEW
router.delete("/:id", getView, async (req, res) => {
  try {
    await res.view.remove();
    res.json({ message: "Deleted View" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// FUNCTION TO GET A VIEW
async function getView(req, res, next) {
  let view;
  try {
    view = await View.findById(req.params.id);
    if (view == null) {
      return res.status(404).json({ message: "Cannot find View" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.view = view;
  next();
}

module.exports = router;
