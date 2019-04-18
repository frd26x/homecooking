import React, { useState, useEffect } from "react";
import api from "../../api";

import Offer from "../Offer"
export default function OffersList() {
  const [offers, setOffers] = useState([]);
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    api
      .getOffers()
      .then(offers => {
        setOffers(offers);
      })
      .catch(err => setMessage(err.toString()));
  }, [offers]);

  
  return (
    <div>
      {offers.map((offer, i) => (
        <Offer offer={offer} key={i}/>
      ))}
      {message ? <h1>{message}</h1> : null}
    </div>
  );
}
