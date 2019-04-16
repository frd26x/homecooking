const express = require("express");
const Offer = require("../models/Offer");

const router = express.Router();

// Route to get all offers
router.get("/", (req, res, next) => {
  Offer.find()
    .then(offers => {
      res.json(offers);
    })
    .catch(err => next(err));
});

// Route to add a Offer
router.post("/", (req, res, next) => {
  const { food, location, price, description, quantity } = req.body;
  console.log(req.user._id)
  const _seller = req.user._id;
  Offer.create({ food, location, price, description, quantity, _seller })
    .then(Offer => {
      res.json({
        success: true,
        Offer
      });
    })
    .catch(err => next(err));
});

// Route to GET all Offers
router.get("/", (req, res, next) => {
  Offer.find()
    .then(offers => {
      res.json({
        success: true,
        offers
      });
    })
    .catch(err => next(err));
});

module.exports = router;
