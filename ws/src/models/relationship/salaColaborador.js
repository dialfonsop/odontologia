const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const salaColaborador = new Schema({
  salaId: {
    type: mongoose.Types.ObjectId,
    ref: "Sala",
    required: true,
  },
  colaboradorId: {
    type: mongoose.Types.ObjectId,
    ref: "Colaborador",
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


module.exports = mongoose.model("SalaColaborador", salaColaborador);
