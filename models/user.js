const mongoose = require("mongoose");
//const { stringify } = require("nodemon/lib/utils");

const schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: string,
    required: true,
  },
  email: {
    type: string,
    required: true,
  },
  phone: {
    type: string,
  },
});
module.exports = user = mongoose.model("user", userSchema);
