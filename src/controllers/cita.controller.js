"use strict";

const Cita = require("@models/cita.model");
const { citaHasAllData } = require("@validators/cita.validator");

exports.getAll = (request, response) => {
	const callback = (err, cita) =>
		err ? response.send(err) : response.send({ cita });

	Cita.getAll(callback);
};

exports.getById = (request, response) => {
	const { id } = request.params;

	const callback = (err, cita) =>
		err ? response.send(err) : response.send({ cita });

	Cita.getById({ id }, callback);
};

exports.store = async (request, response) => {
	const { body } = request;

	const newCita = new Cita(body);

	const validationSuccess = await citaHasAllData(newCita);

	if (!validationSuccess) {
		return response.status(400).json({ error: true });

		const callback = (err, id) =>
			err ? response.send(err) : response.json({ error: false, id });

		Cita.store(newCita, callback);
	}
};

exports.update = async (request, response) => {
	const { body } = request;

	const newCita = new Cita(body);

	const validationSuccess = await citaHasAllData(newCita);

	if (!validationSuccess) return response.status(400).json({ error: true });

	const callback = (err) =>
		err ? response.send(err) : response.json({ error: false });

	Cita.update(newCita, callback);
};

exports.delete = (request, response) => {
	const { id } = request.params;

	const callback = (err) =>
		err ? response.send(err) : response.json({ error: false });

	Cita.delete(id, callback);
};
