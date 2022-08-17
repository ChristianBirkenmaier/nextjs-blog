import ContactForm from "@components/contact/contact-form";
import type { NextPage } from "next";
import Head from "next/head";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Sent me your messages" />
      </Head>
      <ContactForm />;
    </>
  );
};

export default Contact;
