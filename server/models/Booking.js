const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    _seller: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    _buyer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    _offer:{
      type: Schema.Types.ObjectId,
      ref: "Offer",
      required: true
    },
    quantity:{
      type: number,
      required: true
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
