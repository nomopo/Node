require("module-alias/register");

const express = require("express");
const app = express();

const host = "localhost";
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/", (req, res) => res.send("NodeJS Works fine!"));

const citaRoutes = require("@routes/cita.routes");

app.use("/api/citas", citaRoutes);

app.listen(port, host, () =>
	console.log(`Server is listening on port ${port}`)
);
