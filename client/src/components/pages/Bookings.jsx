import React, { useState, useEffect } from "react";
import api from "../../api";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    api
      .getBookings("buyer")
      .then(bookings => {
        setBookings(bookings);
      })
      .catch(err => setMessage(err.toString()));
  }, []);
  return (
    <div>
      {bookings.map((booking, i) => (
        <div key={i}>
          <h2>Buyer: {booking._buyer}</h2>
          <h2>Seller: {booking._seller}</h2>
          <h2>Offer:{booking._offer}€</h2>
          <h2>Quantity: {booking.quantity}</h2>
        </div>//test
      ))}
      {message ? <h1>{message}</h1> : null}
    </div>
  );
}
