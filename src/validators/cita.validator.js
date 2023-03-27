const { Validator } = require("node-input-validator");

exports.citaHasAllData = async (cita) => {
	const validator = new Validator(cita, {
		cita: "required|minLenght:10",
		autor: "required|minLenght:10",
	});

	return await validator.check();
};
