const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TagSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    popularity: {
        type: Number,
        required: false
    }
})

module.exports = Tag = mongoose.model("Tags", TagSchema);