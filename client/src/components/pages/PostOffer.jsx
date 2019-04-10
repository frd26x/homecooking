import React, { useState } from "react";
import api from "../../api";

export default function PostOffer() {
  const [food, setFood] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    let offer = {
      food,
      location,
      price,
      description,
      quantity
    };
    api
      .postOffer(offer)
      .then(result => {
        console.log("SUCCESS!");
      })
      .catch(err => setMessage(err.toString()));
  };
  return (
    <div>
      <form>
        <input
          value={food}
          onChange={e => setFood(e.target.value)}
          placeholder="food"
          type="text"
          name="food"
          required
        />

        <input
          value={location}
          onChange={e => setLocation(e.target.value)}
          placeholder="location"
          type="text"
          name="location"
          required
        />

        <input
          value={price}
          onChange={e => setPrice(e.target.value)}
          placeholder="price"
          type="number"
          name="price"
          required
        />
        <input
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="description"
          type="text"
          name="description"
          required
        />
        <input
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
          placeholder="quantity"
          type="number"
          name="quantity"
          required
        />

        <button onClick={e => handleSubmit(e)} type="submit">
          Submit
        </button>
      </form>
      {message && <div className="info info-danger">{message}</div>}
    </div>
  );
}
