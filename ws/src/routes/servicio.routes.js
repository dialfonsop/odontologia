const express = require("express");
const router = express.Router();
const Sala = require("../models/sala.js");
const Servicio = require("../models/servicio.js");

router.post("/", async (req, res) => {
  try {
      
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});



module.exports = router;
