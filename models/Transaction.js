const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    buyer: {
        string,
        required: true
    },
    seller: {
        string,
        required: true
    },
    price: {
        string,
        required: true
    },
    token_id: {
        string,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = Transaction = mongoose.model("transactions", TransactionSchema);