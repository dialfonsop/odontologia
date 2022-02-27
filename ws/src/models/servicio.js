const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const servicio = new Schema({
  salaId: {
    type: mongoose.Types.ObjectId,
    ref: "Sala",
    required: true
  },
  titulo: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  comision: {
    type: Number,
    required: true,
  },
  duracion: {
    type: Number,
    required: true,
  },
  recurrencia: {
    type: NUmber,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["A", "I","E"],
    required: true,
    default: "A",
  },
  dataArchivo: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Servicio", servicio);
