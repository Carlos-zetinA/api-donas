const Dona = require("../models/Donas.models");
const image = require("../utils/image");
const path = require("path"); // Asegúrate de importar path

async function createDona(req, res) {
  try {
    const productos = new Dona(req.body);

    // Manejo de imagen si existe
/*     if (req.files && req.files.imagep) {
      const filePath = image.getFilePath(req.files.imagep);
      const fileName = path.basename(filePath);
      productos.imagep = fileName;
    }
 */
    const datos = await productos.save();
    res.status(201).send({
      msg: "Producto creado correctamente",
      datos,
    });
  } catch (error) {
    console.error("Error al crear la dona:", error);
    res.status(500).send({
      msg: "Error al crear la dona",
      error: error.message, // Solo para desarrollo, quítalo en producción
    });
  }
}

async function getDona(req, res) {
  try {
    const buscarDonas = await Dona.find();
    res.status(200).send(buscarDonas);
  } catch (error) {
    res.status(500).send({ msg: "Error al obtener las donas", error: error.message });
  }
}

async function delDona(req, res) {
  const { id } = req.params;
  try {
    await Dona.findByIdAndDelete(id);
    res.status(200).send({ msg: "Dona eliminada correctamente" });
  } catch (error) {
    res.status(500).send({ msg: "No se ha podido eliminar la dona", error: error.message });
  }
}

async function updateDona(req, res) {
  const { id } = req.params;
  const updateDona = req.body;

  try {
    await Dona.findByIdAndUpdate({ _id: id }, updateDona);
    res.status(200).send({ msg: "Dona actualizada correctamente" });
  } catch (error) {
    res.status(400).send({ msg: "Error al actualizar la dona", error: error.message });
  }
}

module.exports = {
  createDona,
  getDona,
  delDona,
  updateDona,
};
