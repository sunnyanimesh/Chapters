var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var chapterSchema = new Schema({
	title : {
    type : String,
    required : 'kindly enter the name of the title'
	},
	Created_date : {
	type  : Date,
	default: Date.now
	}
});
module.exports = mongoose.model('chapter',chapterSchema);