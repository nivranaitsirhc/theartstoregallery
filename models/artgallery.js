const mongoose = require('mongoose');

let artgallerySchema = new mongoose.Schema({
		title: String,
		price: String,
		image: String,
		status: {
			value: Number,
			desc: String
		},
		description: String,
		author: {
			id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User'
			},
			username: String
		},
		comments: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Comment'
			}
		]
	},
	{
		timestamps : {//customize timestamps
			createdAt: 'created',
			updatedAt: 'modified'
		}
});

module.exports = mongoose.model('artgallery', artgallerySchema);