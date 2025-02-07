"use client"; // Ensure this component is marked as a Client Component

import React, { useState } from "react";
import Image from "next/image";
import '@/app/index.css'

import Menus from "../images/menus.jpg";
import '@/app/styles/contact.css' // Adjust the path as needed

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
          setShowModal(true); // Show the modal when the message is sent
        } else {
          setStatus(
            `Error: ${result.error || "There was an issue sending your message."
            }`
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
    <div>

      <div id="container_footer">


        <div className="contact" id="contact">

          <p className="contacttitle">CONTACT ME</p>
          <div className="contactbottom"></div>
          <span className="titleheading">
            Feel free to contact me by submitting the form below and I will get
            back to you as soon as possible
          </span>

          <div className="contact__form-container">
            <form onSubmit={handleSubmit} className="contact__form">
              <input type="hidden" name="form-name" value="form 1" />
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="name">Name</label>
                <input
                  required
                  placeholder="Enter Your Name"
                  type="text"
                  className="contact__form-input"
                  name="name"
                  id="name"
                />
              </div>
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="email">Email</label>
                <input
                  required
                  placeholder="Enter Your Email"
                  type="email"
                  className="contact__form-input"
                  name="email"
                  id="email"
                />
              </div>
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="message">Message</label>
                <textarea
                  required
                  cols="30"
                  rows="10"
                  className="contact__form-input"
                  name="message"
                  id="message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn--theme contact__btn">
                Submit
              </button>
            </form>
            {status && <p>{status}</p>}
          </div>
        </div>
        <div id="image_menu">

          <Image
            src={Menus}
            alt="Menus"
            style={{ width: "100%", height: "100%" }}
          />

        </div>
      </div>

      {/* Modal for success message */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Thank You!</h2>
            </div>
            <div className="modal-body">
              <p>Your message has been successfully sent.</p>
            </div>
            <div className="modal-footer">
              <button onClick={handleCloseModal} className="modal-close-btn">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
        }

        .modal-content {
          background-color: white;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          width: 90%;
          animation: slideDown 0.4s ease;
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .modal-header h2 {
          font-size: 1.8rem;
          margin-bottom: 10px;
        }

        .modal-body p {
          font-size: 1.2rem;
          color: #333;
        }

        .modal-footer {
          margin-top: 20px;
        }

        .modal-close-btn {
          background-color: #0070f3;
          color: white;
          padding: 10px 25px;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .modal-close-btn:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default Contact;
