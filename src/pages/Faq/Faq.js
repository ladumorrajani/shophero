import React from "react";
import FaqBanner from "../../components/FaqBanner/FaqBanner";
import FaqMainSection from "../../components/FaqMainSection/FaqMainSection";
import { FaqProps } from "../../components/props/FaqProps";
import Layout from "../../Layout";
import { FaqStyle } from "./Faq.styles";

const Faq = () => {
  return (
    <Layout mainClass="faq-page shape-bg">
      <FaqStyle>
        <FaqBanner FaqBanenrData={FaqProps} />
        <FaqMainSection FaqMainData={FaqProps} />
      </FaqStyle>
    </Layout>
  );
};

export default Faq;
