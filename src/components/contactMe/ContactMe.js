import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contactMe_Styles.css";
import DefaultCard from "../default_card/DefaultCard";

function ContactMe() {
  const form = useRef();
  const theme = "dark_theme";
  const [state, setState] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      form.current.user_name.value === "" ||
      form.current.user_email.value === "" ||
      form.current.message.value === ""
    ) {
      setState("error");
    } else {
      emailjs
        .sendForm(
          "service_bxcm6h7",
          "template_m2f86to",
          form.current,
          "Ug-EEj1Agt9EYSXY4"
        )
        .then(
          (result) => {
            setState("sent");
            form.current.user_name.value = "";
            form.current.user_email.value = "";
            form.current.message.value = "";
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
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
          <textarea name="message" cols="42" rows="4" />
          <input type="submit" value="Send" style={{ cursor: "pointer" }} />
        </form>
      </article>
      {state === "sent" ? (
        <h1 style={{ textAlign: "center" }}>Email sent</h1>
      ) : state === "error" ? (
        <h1 style={{ textAlign: "center" }}>
          You forgot some things silly goose
        </h1>
      ) : null}
    </DefaultCard>
  );
}

export default ContactMe;
