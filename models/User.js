const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//const Nft = require("./Nft");

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    wallet_id: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    profile_image: {
        type: String,
        required: true
    },
    email_address: {
        type: String,
        required: true
    },
    catelog: [
        new Schema({
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
    ],
    collections: [
        new Schema({
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
    ],
    date_created: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model("Users", UserSchema);