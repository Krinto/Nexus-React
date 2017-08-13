var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var menuItemSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    position: Number,
    icon: { 
        type: Schema.Types.ObjectId, 
        ref: 'Icon',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('MenuItem', menuItemSchema);