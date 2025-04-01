const Dona = require("../models/Donas.models");
const image = require("../utils/image");

async function createDona(req, res) {
  const dona = new Dona(req.body);
  
  try {
    if (req.files && req.files.imagen) {
      const imagePath = image.getFilePath(req.files.imagen);
      dona.imagen = imagePath;
    }

    const datos = await dona.save();
    res.status(200).send(datos);
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Error al guardar la dona" });
  }
}

async function getDona(req, res) {
  try {
    const buscarDonas = await Dona.find();
    res.status(200).send(buscarDonas);
  } catch (error) {
    res.status(500).send({ msg: "Error al obtener las donas" });
  }
}

async function delDona(req, res) {
  const { id } = req.params;
  try {
    await Dona.findByIdAndDelete(id);
    res.status(200).send({ msg: "Dona eliminada correctamente" });
  } catch (error) {
    res.status(500).send({ msg: "No se ha podido eliminar la dona" });
  }
}

async function updateDona(req, res) {
  const { id } = req.params;
  const updateDona = req.body;

  try {
    await Dona.findByIdAndUpdate({ _id: id }, updateDona);
    res.status(200).send({ msg: "Dona actualizada correctamente" });
  } catch (error) {
    res.status(400).send({ msg: "Error al actualizar la dona" });
  }
}

module.exports = {
  createDona,
  getDona,
  delDona,
  updateDona,
};
