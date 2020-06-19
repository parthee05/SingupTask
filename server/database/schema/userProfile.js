const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const userprofileSchema = new Schema({
  username: { type: String, default: "" },
  password: { type: String, default: "" },
});

const userProfileModel = Mongoose.model('userprofile',userprofileSchema)

module.exports = userProfileModel
