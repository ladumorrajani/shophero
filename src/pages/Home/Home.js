import React from "react";
import CompanyInfoSection from "../../components/CompanyInfoSection/CompanyInfoSection";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import NewsletterSection from "../../components/NewsletterSection/NewsletterSection";
import OrganizationSection from "../../components/OrganizationSection/OrganizationSection";
import PoppularWebshops from "../../components/PoppularWebshops/PoppularWebshops";
import { HomeProps } from "../../components/props/HomeProps";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import Layout from "../../Layout";
import { HomeStyle } from "./Home.styles";

const scrollClick = (e) => {
  e.preventDefault();
  const element = document.getElementById("webshop");
  const headerHeight = document.getElementById("header");
  window.scrollTo({
    behavior: "smooth",
    top: element.offsetTop + headerHeight.clientHeight,
  });
};

const Home = (props) => {
  return (
    <Layout mainClass="home-page">
      <HomeStyle>
        <HomeBanner
          BannerData={HomeProps}
          scrollClick={(e) => scrollClick(e)}
        />
        <PoppularWebshops PoppularSecData={HomeProps} />
        <HowItWorks HowItWorksData={HomeProps} />
        <CompanyInfoSection CompanySecData={HomeProps} />
        <OrganizationSection OrganizationData={HomeProps} />
        <TestimonialSection TestimonialData={HomeProps} />
        <NewsletterSection />
      </HomeStyle>
    </Layout>
  );
};

export default Home;
