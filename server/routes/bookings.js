const express = require("express");
const Booking = require("../models/Booking");
const Offer = require("../models/Offer");

const router = express.Router();

//get bookings user as buyer or as seller
router.get("/:type", (req, res, next) => {
  let type = "";
  if (req.params.type === "buyer") {
    type = { _buyer: req.user._id };
  } else if (req.params.type === "seller") {
    type = { _seller: req.user._id };
  }
  Booking.find(type)
    .then(bookings => {
      res.json(bookings);
    })
    .catch(err => next(err));
});

router.post("/", (req, res, next) => {
  const { _offer, _seller, quantity } = req.body;
  const _buyer = req.user._id;

  Booking.create({ _offer, _seller, quantity, _buyer })
    .then(booking => {
      res.json({
        success: true,
        booking
      });
      Offer.update({ _id: _offer }, { $inc: { quantity: -quantity } })
        .then(() => {
          console.log("quantity offer updated");
        })
        .catch(err => next(err));
    })
    .catch(err => next(err));
});

module.exports = router;
