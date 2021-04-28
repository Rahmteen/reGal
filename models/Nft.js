const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//const Tag = require("./Tag");

const NftSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    nft_description: {
        type: String,
        required: true
    },
    nft_id: {
        type: Number,
        required: true
    },
    thumbnail_image: {
        type: String,
        required: true
    },
    date_mint: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0,
        required: true
    },
    asking_bid: {
        type: Number,
        default: null,
        require: true
    },
    previous_sold: {
        type: [Number],
        defaut: null,
        require: true
    },
    auction_duraction: {
        type: String,
        default: null,
        require: true
    },
    auction_startDate: {
        type: String,
        default: null,
        require: true
    },
    auction_mode: {
        type: Boolean,
        default: false,
        require: true
    },
    auction_started: {
        type: Boolean,
        default: false,
        require: true
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
})

module.exports = Nft = mongoose.model("Nfts", NftSchema);