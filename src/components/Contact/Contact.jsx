import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import { toast } from "react-toastify";

import "./contact.scss";

const contactOptions = [
  {
    id: 1,
    icon: <MdOutlineEmail className="contact__options__item__icon" />,
    title: "Email",
    sub: "dnsang.dev@gmail.com",
    href: "mailto:dnsang.dev@email.com",
    target: true,
  },
  {
    id: 2,
    icon: <RiMessengerLine className="contact__options__item__icon" />,
    title: "Messenger",
    sub: "Dn Sang",
    href: "https://www.facebook.com/sangfanreal/",
    target: true,
  },
  {
    id: 3,
    icon: <BsWhatsapp className="contact__options__item__icon" />,
    title: "Whatsapp",
    sub: "+84 968894960",
    href: "https//api.whatsapp.com/send?phone=+84968894960",
  },
];

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c9qea5p",
        "template_ljg7h2b",
        form.current,
        "fRy4e1giWKvlet95o"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Thank you for contacting.");
        },
        (error) => {
          console.log(error.text);
          toast.error("Contact failed.");
        }
      );

    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options" data-aos="fade-right">
          {contactOptions.length &&
            contactOptions.map((item) => (
              <article className="contact__options__item" key={item.id}>
                {item.icon}
                <h4>{item.title}</h4>
                <h5>{item.sub}</h5>
                <a href={item.href} target={item.target ? "_blank" : ""}>
                  Send a message
                </a>
              </article>
            ))}
        </div>
        <form ref={form} data-aos="fade-left">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Full Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            rows={7}
            name="message"
            placeholder="Your Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary  "
            onClick={sendEmail}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
