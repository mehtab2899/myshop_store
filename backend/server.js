//importing modules and files
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import products from "./data/products.js";
import connectDB from "./config/connect.js";

// dotenv configuration
dotenv.config();

// connection of database
connectDB();

// initialising express
const app = express();

// http methods
app.get("/", (req, res) => {
	res.send("api running...");
});

app.get("/api/products", (req, res) => {
	res.json(products);
});

app.get("/api/products/:id", (req, res) => {
	const product = products.find((p) => p._id === req.params.id);
	res.json(product);
});

// port configuration and listening
const PORT = process.env.PORT || 5000;

app.listen(
	5000,
	console.log(
		`port running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold
			.underline
	)
);
