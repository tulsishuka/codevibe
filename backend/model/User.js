
const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
   password: {
        type: String,
        require: true
    },
   email: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model("User", Userschema);