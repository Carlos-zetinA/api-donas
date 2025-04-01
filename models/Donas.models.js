const mongoose = require("mongoose");

const Donas = mongoose.Schema({
  titulo: String,
  imagen: String,
  sabores: Array,
  precio: Number,
  descripcion: String,
  tipo: String, // Cambié "imagep" por "imagen" para que coincida con el controller
  createDAT: { type: Date, default: Date.now },
});

module.exports = mongoose.model("dona", Donas);
