const mongoose= require("mongoose");
const livreSchema = mongoose.Schema({
  titre:String,
  auteur:String,
  année:String,
  pages:Number,

});
module.exports = mongoose.model('livre',livreSchema);
