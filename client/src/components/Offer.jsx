import React, { useState } from "react";
import api from "../api";

export default function Offer(props) {
  const { offer } = props;

  const [quantity, setQuantity] = useState(1);

  const handleBooking = (e, _offer, _seller, quantity) => {
    let booking = { _offer, _seller, quantity };
    api.postBooking(booking);
  };
  return (
    <div>
      <h1>Food: {offer.food}</h1>
      <h2>Location: {offer.location}</h2>
      <h2>Price:{offer.price}€</h2>
      <h2>Description: {offer.description}</h2>
      <h2>Quantity: {offer.quantity}</h2>
      <div>
        <button onClick={e => handleBooking(e, offer._id, offer._seller, quantity)}>
          book 
        </button>
        <input
          type="number"
          value={quantity}
          onChange={e => setQuantity(e.target.value * 1)}
        />
      </div>
    </div>
  );
}
