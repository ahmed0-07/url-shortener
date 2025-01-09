const mongoose = require('mongoose');
const schema = mongoose.Schema;

const URLschema = new schema({
    url:{
        type: String,
        required: true
    },
    alias:{
        type: String,
        required: true
    }
});

const Url = mongoose.model('Url', URLschema);
module.exports = Url;