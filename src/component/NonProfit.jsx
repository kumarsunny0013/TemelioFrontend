// src/components/NonprofitList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Nonprofit = () => {
  const [nonprofits, setNonprofits] = useState([]);
  const [newNonprofit, setNewNonprofit] = useState({
    name: "",
    address: "",
    email: "",
  });

  useEffect(() => {
    fetchNonprofits();
  }, []);

  const fetchNonprofits = async () => {
    const response = await axios.get("/v1/api/nonprofits");
    setNonprofits(response.data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNonprofit({ ...newNonprofit, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/v1/api/nonprofits", newNonprofit);
    fetchNonprofits();
    setNewNonprofit({ name: "", address: "", email: "" });
  };

  return (
    <div>
      <h2>Nonprofits</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newNonprofit.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="address"
          value={newNonprofit.address}
          onChange={handleInputChange}
          placeholder="Address"
          required
        />
        <input
          type="email"
          name="email"
          value={newNonprofit.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <button type="submit">Add Nonprofit</button>
      </form>
      <ul>
        {nonprofits.map((nonprofit) => (
          <li key={nonprofit.id}>
            {nonprofit.name} - {nonprofit.address} - {nonprofit.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nonprofit;
