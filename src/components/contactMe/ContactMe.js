import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contactMe_Styles.css";
import DefaultCard from "../default_card/DefaultCard";

function ContactMe() {
  const form = useRef();
  const theme = "dark_theme";

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bxcm6h7",
        "template_m2f86to",
        form.current,
        "Ug-EEj1Agt9EYSXY4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <DefaultCard location="Contact Me">
      <article className={theme}>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </article>
    </DefaultCard>
  );
}

export default ContactMe;
