const express = require("express");
const router = express.Router();
const Sala = require("../models/sala.js");
const Servicio = require("../models/servicio.js");
const { json } = require("express");
const Busboy = require("busboy");
const turf = require("@turf/turf");

router.post("/", async (req, res) => {
  try {
    const sala = await new Sala(req.body).save();
    res.json({ sala });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

router.get("/servicios/:salaId", async (req, res) => {
  try {
    const { salaId } = req.params;
    const servicios = await Servicio.find({
      salaId,
      status: "A",
    }).select("_id titulo");

    res.json({
      servicios: servicios.map((s) => ({ label: s.titulo, value: s._id })),
    });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const sala = await Sala.findById(req.params.id).select(
      'capa nombre direccion.ciudad telefono'
    );

    //Distancia
    /*const distance = turf.distance(
      turf.point(sala.geo.coordinates),
      turf.point([-30.043858, -51.103487])
    );*/

    res.json({ error: false, sala });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

module.exports = router;
