import React from "react";
import styled from "styled-components";
import HowItWorkStep from "../../components/HowItWorkStep/HowItWorkStep";
import ExplanationVideo from "../../components/ExplanationVideo/ExplanationVideo";
import Layout from "../../Layout";
import { HowItWorksProps } from "../../components/props/HowItWorksProps";

export const HowItWorksStyle = styled.main`
  position: relative;
  z-index: 1;
`;

const HowItWorks = () => {
  return (
    <Layout mainClass="how-it-work-page">
      <HowItWorksStyle>
        <HowItWorkStep HowItStepData={HowItWorksProps} />
        <ExplanationVideo ExplainVideoData={HowItWorksProps} />
      </HowItWorksStyle>
    </Layout>
  );
};

export default HowItWorks;
