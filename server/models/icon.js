var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var iconSchema = new Schema({

    path: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Icon', iconSchema);