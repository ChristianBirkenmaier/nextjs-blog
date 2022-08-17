import Notification from "@components/ui/notification";
import React, { useEffect, useState } from "react";
import classes from "./contact-form.module.css";

const URL = "/api/contact";

const sendData = async (data: { [k: string]: FormDataEntryValue }) => {
  const resp = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!resp.ok) {
    throw new Error("Something went wrong!");
  }
};

const ContactForm: React.FC<{}> = () => {
  const [status, setStatus] = useState<"loading" | "success" | "error">();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("loading");
    const formData = Object.fromEntries(new FormData(e.target));
    try {
      await sendData(formData);
      setStatus("success");
    } catch (err) {
      console.log(err);
      setStatus("error");
    }
  };
  useEffect(() => {
    if (status === "error" || status === "success") {
      const timer = setTimeout(() => {
        setStatus(undefined);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your message</label>
          <textarea id="message" name="message" rows={5} required></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {status && (
        <Notification message={status} status={status} title={status} />
      )}
    </section>
  );
};

export default ContactForm;
