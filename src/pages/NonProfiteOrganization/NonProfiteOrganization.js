import React from "react";
import NewsletterSection from "../../components/NewsletterSection/NewsletterSection";
import PopularOrgSection from "../../components/PopularOrgSection/PopularOrgSection";
import { HomeProps } from "../../components/props/HomeProps";
import { NGOProps } from "../../components/props/NonProfiteOrganizationProps";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import Layout from "../../Layout";
import { NonProfiteOrgStyle } from "./NonProfiteOrganization.styles";

const NonProfiteOrg = () => {
  return (
    <Layout mainClass="ngo-page">
      <NonProfiteOrgStyle>
        <PopularOrgSection PopularSecData={NGOProps} />
        <TestimonialSection TestimonialData={HomeProps} />
        <NewsletterSection NewsletterData={HomeProps} />
      </NonProfiteOrgStyle>
    </Layout>
  );
};

export default NonProfiteOrg;
