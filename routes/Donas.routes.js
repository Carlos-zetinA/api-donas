const express = require("express");
const multiparty = require("connect-multiparty");

const donasController = require("../controllers/donas.controller");

const md_mparty = multiparty({ uploadDir: "./uploads" });
const api = express.Router();

api.post("/createdona", [md_mparty], donasController.createDona);
api.get("/getdona", donasController.getDona);
api.patch("/updatedona/:id", [md_mparty], donasController.updateDona);
api.delete("/deldona/:id", donasController.delDona);

module.exports = api;
