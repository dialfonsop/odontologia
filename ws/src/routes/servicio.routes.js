const express = require("express");
const router = express.Router();
const Busboy = require("busboy");
const aws = require("../services/aws");
const Sala = require("../models/sala.js");
const Archivo = require("../models/archivo.js");
const Servicio = require("../models/servicio.js");
const { json } = require("express");

router.post("/", async (req, res) => {
  let busboy = new Busboy({ headers: req.headers });
  busboy.on("finish", async () => {
    try {
      const { salaId, servicio } = req.body;
      let errores = [];
      let archivos = [];

      if (req.files && Object.keys(req.files).length > 0) {
        for (let key of Object.keys(req.files)) {
          const file = req.files[key];

          const nameParts = file.name.split(".");
          const fileName = `${new Date().getTime()}.${
            nameParts[nameParts.length - 1]
          }`;
          const path = `servicios/${salaId}/${fileName}`;

          const response = await aws.uploadToS3(file, path);

          if (response.error) {
            errores.push({ error: true, message: response.message });
          } else {
            archivos.push(path);
          }
        }
      }

      if (errores.length > 0) {
        res.json(errores[0]);
        return false;
      }

      //Crear servicio
      let jsonServicio = JSON.parse(servicio);
      const servicioRegistro = await Servicio(jsonServicio).save();

      // Crear Archivo
      archivos = archivos.map((archivo) => ({
        referenciaId: servicioRegistro._id,
        model: "Servicio",
        camino: archivo,
      }));

      await Archivo.insertMany(archivos);

      res.json({ servicio: servicioRegistro, archivos });
    } catch (error) {
      res.json({ error: true, message: error.message });
    }
  });
  req.pipe(busboy);
});

router.put("/:id", async (req, res) => {
  let busboy = new Busboy({ headers: req.headers });
  busboy.on("finish", async () => {
    try {
      const { salaId, servicio } = req.body;
      let errores = [];
      let archivos = [];

      if (req.files && Object.keys(req.files).length > 0) {
        for (let key of Object.keys(req.files)) {
          const file = req.files[key];

          const nameParts = file.name.split(".");
          const fileName = `${new Date().getTime()}.${
            nameParts[nameParts.length - 1]
          }`;
          const path = `servicios/${salaId}/${fileName}`;

          const response = await aws.uploadToS3(file, path);

          if (response.error) {
            errores.push({ error: true, message: response.message });
          } else {
            archivos.push(path);
          }
        }
      }

      if (errores.length > 0) {
        res.json(errores[0]);
        return false;
      }

      //Crear servicio
      const jsonServicio = JSON.parse(servicio);
      await Servicio.findByIdAndUpdate(req.params.id, jsonServicio);

      // Crear Archivo
      archivos = archivos.map((archivo) => ({
        referenciaId: req.params.id,
        model: "Servicio",
        camino: archivo,
      }));

      await Archivo.insertMany(archivos);

      res.json({ error: false });
    } catch (error) {
      res.json({ error: true, message: error.message });
    }
  });
  req.pipe(busboy);
});

router.get('/sala/:salaId', async (req, res) => {
  try {

    const servicios = await Servicio.find({
      salaId: req.params.salaId,
      status: {$ne: 'E'}
    });
    
  } catch (error) {
    res.json({error: true, message: error.message})
  }
})

router.post("/delete-archivo/", async (req, res) => {
  try {
    const { id } = req.body;

    await aws.deleteFileS3(id);

    await Archivo.findOneAndDelete({
      camino: id,
    });

    res.json({ error: false });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Servicio.findByIdAndUpdate(id, {status: 'E'});

    res.json({ error: false });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

module.exports = router;
