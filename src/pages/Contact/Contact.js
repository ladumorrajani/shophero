import React from "react";
import ContactBanner from "../../components/ContactBanner/ContactBanner";
import ContactForm from "../../components/ContactForm/ContactForm";
import { ContactProps } from "../../components/props/ContactProps";
import Layout from "../../Layout";
import { ContactStyle } from "./Contact.styles";

const Contact = () => {
  return (
    <Layout mainClass="contact-page shape-bg">
      <ContactStyle>
        <ContactBanner ContactBannerData={ContactProps} />
        <ContactForm />
      </ContactStyle>
    </Layout>
  );
};

export default Contact;
