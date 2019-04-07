const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offerSchema = new mongoose.Schema({
  food: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;
