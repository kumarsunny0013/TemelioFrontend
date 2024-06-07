// src/components/SendEmail.js
import React, { useState } from "react";
import axios from "axios";

const Email = () => {
  const [template, setTemplate] = useState("");
  const [data, setData] = useState();

  const handleInputChange = (e) => {
    setTemplate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/v1/api/emails/send", { template });
    setTemplate("");
    setData(response.data);
  };

  return (
    <div>
      <h2>Send Email</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          name="template"
          value={template}
          onChange={handleInputChange}
          placeholder="Email Template"
          required
        ></textarea>
        <button type="submit">Send Email</button>
      </form>
      <div>
        {data && (
          <>
            <h4>Email sent</h4>
            {data.map((e) => e.email)}
          </>
        )}
      </div>
    </div>
  );
};

export default Email;
