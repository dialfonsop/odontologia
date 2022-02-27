const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const salaCliente = new Schema({
  salaId: {
    type: mongoose.Types.ObjectId,
    ref: "Sala",
    required: true,
  },
  clienteId: {
    type: mongoose.Types.ObjectId,
    ref: "Cliente",
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


module.exports = mongoose.model("SalaCliente", salaCliente);
