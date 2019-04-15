const express = require("express");
const Booking = require("../models/Booking");

const router = express.Router();

//get bookings user as buyer
router.get("/", (req, res, next) => {
  const _buyer = req.user._id
  Booking.find({_buyer:_buyer})
    .then(bookings => {
      res.json(bookings);
    })
    .catch(err => next(err));
});