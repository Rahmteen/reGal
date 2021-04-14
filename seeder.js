const Seeder = require("mongoose-seed");
const env = require('dotenv').config();
const userCollections = require("./data-import/user.js");
const nftCollections = require("./data-import/nft.js");
const tagCollections = require("./data-import/tags.js");

require("./models/User.js");
require("./models/Nft.js");
require("./models/Tag.js");

const data = [
    userCollections,
    nftCollections,
    tagCollections
]

Seeder.connect(process.env.MONGO_URI, function() {
    Seeder.loadModels([
        "./models/User.js",
        "./models/Nft.js",
        "./models/Tag.js"
    ]);
    Seeder.clearModels(['user', 'nft', 'tag']);
    Seeder.populateModels(data, function(err, done) {

        if(err) {
            return console.log("Seed Error: ", err);
        }

        if(done) {
            return console.log("Seed Done: ", done);
        }

        Seeder.disconnect();

    })
})

