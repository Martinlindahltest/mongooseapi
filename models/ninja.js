const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Namn är required']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }

})

const Ninja = mongoose.model('ninja', NinjaSchema)

module.exports = Ninja