import React, { useRef } from "react";
import { myData } from "../assets/myasset";
import "./contactme.css";
import emailjs from "@emailjs/browser"

const Contactme = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Auto-fill time input
    const currentTime = new Date().toLocaleString();
    form.current.querySelector('input[name="time"]').value = currentTime;

    emailjs
      .sendForm('service_h2xe313', 'template_ol5mi3i', form.current, {
        publicKey: 'Sws7PUzCWgJUSRvc_',
      })
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Failed to send message.');
        }
      );
  };



  return (
    <div>
      <div className="contactme-body">
        <div className="img-purush">
          <img className="purush-pic" src={myData.profilePic} alt="" />
          <p className="purush">Contact Purushottam Gurjar</p>
        </div>
        <form action="" ref={form} onSubmit={sendEmail}>
          <div className="main">
            <div className="name-email">
              <div className="div-name name-text">
                <label htmlFor="" className="name-text">
                  Your Name
                </label>
                <input
                  placeholder=" Name"
                  type="text"
                  name="name"
                  required
                  className="input-name input-text"
                />
              </div>

              <div className="div-email">
                <label htmlFor="" className="email name-text">
                  Your Email
                </label>
                <input
                  placeholder=" E-Mail Address"
                  type="email"
                  name="email"
                  required
                  className="input-email input-text  "
                />
              </div>
            </div>

            <div className="div-message">
              <label htmlFor="" className="message name-text">
                Message
              </label>
              <textarea
                rows="10"
                cols="40"
                name="message"
                required
                placeholder="Enter Your message Here ........"
                className="input-message input-text"
              ></textarea>
              <input type="hidden" name="time" />
            </div>
          </div>
          <div className="div-button">
            <button type="submit" className="submit">
            Send Message
          </button>
          </div>
          <div className="thankyou-text">
            Thank you for contacting and giving your valuable time. Purushottam will get back to you at latest.
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactme;
