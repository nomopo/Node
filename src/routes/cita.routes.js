const express = require("express");

const router = express.Router();

const citaController = require("@controllers/cita.controller");

router.get("/", citaController.getAll);

router.get("/:id", citaController.getById);

router.post("/", citaController.store);

router.put("/:id", citaController.update);

router.delete("/:id", citaController.delete);

module.exports = router;
