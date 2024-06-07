// src/components/FoundationList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Foundation = () => {
  const [foundations, setFoundations] = useState([]);
  const [newFoundation, setNewFoundation] = useState({ email: "" });

  useEffect(() => {
    fetchFoundations();
  }, []);

  const fetchFoundations = async () => {
    const response = await axios.get("/v1/api/foundations");
    setFoundations(response.data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFoundation({ ...newFoundation, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/v1/api/foundations", newFoundation);
    fetchFoundations();
    setNewFoundation({ email: "" });
  };

  return (
    <div>
      <h2>Foundations</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={newFoundation.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <button type="submit">Add Foundation</button>
      </form>
      <ul>
        {foundations.map((foundation) => (
          <li key={foundation.id}>{foundation.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Foundation;
