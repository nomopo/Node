"use strict";

const db = require("@config/db");

let Cita = function (cita) {
	this.id = cita.id;
	this.cita = cita.cita;
	this.autor = cita.autor;
};

Cita.getById = ({ id }, result) => {
	const callback = (error, response) =>
		error ? result(error, null) : result(null, response[0]);

	db.query("SELECT * FROM citas WHERE id = ?", [id], callback);
};

Cita.getAll = (result) => {
	const callback = (error, response) =>
		error ? result(error, null) : result(null, response);

	db.query("SELECT * FROM citas", callback);
};

Cita.store = (newCita, result) => {
	const callback = (error, response) =>
		error ? result(error, null) : result(null, response);

	db.query("INSERT INTO citas SET ?", newCita, callback);
};

Cita.update = ({ id, cita, autor }, result) => {
	const callback = (error, response) =>
		error ? result(error, null) : result(null, response);

	db.query(
		"UPDATE citas SET cita = ?, autor = ? WHERE id = ?",
		[cita, autor, id],
		callback
	);
};

Cita.delete = ({ id }, result) => {
	const callback = (error, response) =>
		error ? result(error, null) : result(null, response);

	db.query("DELETE FROM citas WHERE id = ?", [id], callback);
};

module.exports = Cita;
