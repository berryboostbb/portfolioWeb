import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0i33vc7",
        "template_yeacjtb",
        form.current,
        "yvyNH5yJHlVSc3zpq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      {/* <h5>Get In Touch!</h5>
      <h2>Contact Me</h2> */}

      <div className="container contact__container">
        <div className="contact_options">
          {/* <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>umairyaqub31@gmail.com</h5>
            <a href="mailto:umairyaqub31@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>egatortutorials</h5>
            <a href="https://m.me/umair.ji.39" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+923038285110</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+923038285110"
              target="_blank"
            >
              Send a message
            </a>
          </article> */}
        </div>
        {/* END OF CONTACT OPTIONS */}
        {/* <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
