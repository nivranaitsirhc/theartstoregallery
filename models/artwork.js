const 	mongoose 			= require('mongoose'),
		mongooseSlugPlugin 	= require('mongoose-slug-plugin'),
		moment 				= require('moment');


module.exports = mongoose.model('Artwork', new mongoose.Schema({
		title 	: String,
		price 	: String,
		image 	: {
			width 			: Number,
			height 			: Number,
			uploadType 		: String,
			public_id 		: String,
			signature 		: String,
			secure_url 		: String,
			thumb_url 		: String,
			placeholder_url : String,
		},
		status 	: {
			index 	: Number,
			name 	: String
		},
		artType : {
			index 	: Number,
			name 	: String
		},
		description : String,
		author	: {
			id 	: {
					type 	: mongoose.Schema.Types.ObjectId,
					ref 	: 'User'
			},
			username 	: String,
			fullName 	: String,
			
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
	}).plugin(mongooseSlugPlugin,{tmpl:'<%=title%>'})
);