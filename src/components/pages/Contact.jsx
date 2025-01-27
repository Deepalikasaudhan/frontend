import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post("https://project-oft4.onrender.com/send-email", formData);
      setStatus("Email sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send email.");
    }
  };

  return (
    <div className="contact-form-container">
      <h1 className="contact-form-heading">Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <label className="input-label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="input-group">
          <label className="input-label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="input-group">
          <label className="input-label">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="input-field textarea-field"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
      {status && <p className={`status-message ${status.includes("success") ? "success" : "error"}`}>{status}</p>}
    </div>
  );
};

export default ContactForm;
