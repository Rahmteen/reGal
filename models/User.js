const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Nft = require("./Nft");

const UserSchema = new Schema({
    wallet_id: {
        type: String,
        required: true
    },
    display_name: {
        type: String,
        required: true
    },
    email_address: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false,
        default: "Artist bio..."
    },
    profile_image: {
        type: String,
        required: false,
        default: "https://gateway.ipfs.io/ipfs/QmVEBTtEo6q7m5KumcfdkaGn91TZiSN4GgZDtmcr7daNZ4"
    },
    profile_bg_color: {
        type: String,
        require: false
    },
    profile_featured_id: {
        type: Number,
        require: false
    },
    email_list: {
        type: Boolean,
        require: false,
        default: false
    },
    collections: [
        new Schema({
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
            raw_image: {
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
    ],
    liked_nfts: [
        new Schema({
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
            raw_image: {
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
    ],
    recently_viewed_nfts: [
        new Schema({
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
            raw_image: {
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
    ],
    date_created: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model("Users", UserSchema);