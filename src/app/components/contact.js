"use client";

import React, { useState } from "react";
import Image from "next/image";
import Menus from "../images/menus.jpg";
import "../styles/contact.css";
import "@/app/index.css";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setStatus("Your message has been sent!");
          setShowModal(true);
          // Reset form
          event.target.reset();
        } else {
          setStatus(
            `Error: ${result.error || "There was an issue sending your message."}`
          );
        }
      } else {
        setStatus("Error: Response not OK");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error: There was an issue sending your message.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="contact-page-wrapper">
      {/* Background Container */}
      <div className="contact-background">
        <div className="image-container">
          <Image
            src={Menus}
            alt="Background Image"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
            className="background-image"
          />
          <div className="overlay"></div>
        </div>
      </div>

      {/* Contact Form Content */}
      <div className="contact-content" id="contact">
        <div className="contact-header">
          <h1 className="contact-title">CONTACT ME</h1>
          <div className="contact-divider"></div>
          <p className="contact-subtitle">
            Feel free to contact me by submitting the form below and I will get back to you as soon as possible
          </p>
        </div>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <input type="hidden" name="form-name" value="form 1" />
            
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                name="name"
                id="name"
              />
            </div>
            
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                required
                placeholder="Enter Your Email"
                type="email"
                name="email"
                id="email"
              />
            </div>
            
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                required
                placeholder="Type your message here..."
                rows="6"
                name="message"
                id="message"
              ></textarea>
            </div>
            
            <div className="form-submit">
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </div>
            
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Thank You!</h2>
            </div>
            <div className="modal-body">
              <div className="success-icon">✓</div>
              <p>Your message has been successfully sent.</p>
              <p className="modal-subtitle">I'll get back to you as soon as possible!</p>
            </div>
            <div className="modal-footer">
              <button onClick={handleCloseModal} className="modal-close-btn">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;