const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//const Tag = require("./Tag");

const NftSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    token_id: {
        type: String,
        required: true
    },
    raw_image: {
        type: String,
        required: false
    },
    thumbnail_image: {
        type: String,
        required: true
    },
    tags: [
        new Schema({
            name: {
                type: String,
                required: true
            },
            popularity: {
                type: Number,
                required: false
            }
        })
    ],
    timestamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = Nft = mongoose.model("Nfts", NftSchema);