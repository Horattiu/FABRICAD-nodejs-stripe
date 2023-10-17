import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "../css/contact.css";
import { AiFillCheckCircle } from "react-icons/ai";
require("dotenv").config();

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 550,
    });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.EMAIL_SERVICE_ID,
        process.env.EMAIL_TEMPLATE_ID,
        form.current,
        process.env.EMAIL_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div id="contact" className="contact-container">
        {isSubmitted ? (
          <div className="thank-you-message">
            <AiFillCheckCircle className="check-icon" />
            <p>
              Thank you for reaching out to us. We will respond as soon as
              possible
            </p>
          </div>
        ) : (
          <form
            data-aos="fade-up"
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >
            <h3 className="contact-us">Contact us</h3>
            <label className="form-label">Name</label>
            <input type="text" name="user_name" className="form-input" />
            <label className="form-label">Email</label>
            <input type="email" name="user_email" className="form-input" />
            <label className="form-label">Message</label>
            <textarea name="message" className="form-textarea" />
            <input type="submit" value="Get in touch" className="form-button" />
          </form>
        )}
      </div>
    </>
  );
}

export default Contact;
