import React from "react";
import AboutBanner from "../../components/AboutBanner/AboutBanner";
import AboutContent from "../../components/AboutContent/AboutContent";
import { AboutProps } from "../../components/props/AboutProps";
import Layout from "../../Layout";
import { AboutUsStyle } from "./AboutUs.styles";

const AboutUs = () => {
  return (
    <Layout mainClass="about-page shape-bg">
      <AboutUsStyle>
        <AboutBanner AboutBannerData={AboutProps} />
        <AboutContent AboutContentData={AboutProps} />
      </AboutUsStyle>
    </Layout>
  );
};

export default AboutUs;
