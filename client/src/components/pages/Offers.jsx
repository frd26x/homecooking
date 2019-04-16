import React, { useState, useEffect } from "react";
import api from "../../api";

export default function Offers() {
  const [offers, setOffers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    api
      .getOffers()
      .then(offers => {
        setOffers(offers);
      })
      .catch(err => setMessage(err.toString()));
  }, []);

  const handleBooking = (e, _offer, _seller,quantity) => {
    let booking = {_offer, _seller,quantity}
    api.postBooking(booking);
  };
  return (
    <div>
      {offers.map((offer, i) => (
        <div>
          <h1>Food: {offer.food}</h1>
          <h2>Location: {offer.location}</h2>
          <h2>Price:{offer.price}€</h2>
          <h2>Description: {offer.description}</h2>
          <h2>Quantity: {offer.quantity}</h2>
          <button onClick={e => handleBooking(e, offer._id, offer._seller,1)}>book 1</button>
        </div>
      ))}
      {message ? <h1>{message}</h1> : null}
    </div>
  );
}
