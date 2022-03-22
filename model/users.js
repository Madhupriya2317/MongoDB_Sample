const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email :  String,
    password :  String 
});
const collectionName = 'registers';

module.exports = mongoose.model('user',userSchema,collectionName);