const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const colaboradorServicio = new Schema({
  salaId: {
    type: mongoose.Types.ObjectId,
    ref: "Sala",
    required: true,
  },
  servicioId: {
    type: mongoose.Types.ObjectId,
    ref: "Servicio",
    required: true,
  },
  status: {
    type: String,
    enum: ["A", "I"],
    required: true,
    default: "A",
  },
  dataArchivo: {
    type: Date,
    default: Date.now,
  },
  
});


module.exports = mongoose.model("ColaboradorServicio", colaboradorServicio);
