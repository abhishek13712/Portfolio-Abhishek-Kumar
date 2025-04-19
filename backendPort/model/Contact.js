const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
	Name: {
		type: String,
	},
	Email: {
		type: String,
	},
	Subject: {
		type: String,
	},
	Message: {
		type: String,
	},
});

module.exports = mongoose.model("Contact", contactSchema);