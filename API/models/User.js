const mongoose = require('mongoose');
// const { string } = require('prop-types')

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		profilePic: {
			type: String,
			default: '',
		},
	},
	{timestamps: true}
);

module.exports = mongoose.model('User', UserSchema);
