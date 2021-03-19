import React from "react";
import {
  HowItWorksStepStyle,
  H1,
  StepList,
  StepSingleBlock,
  StepImg,
  StepContent,
  StepCount,
  StepInfo,
  Title,
  Content,
} from "./HowItWorkStep.styles";
import "../../i18n";
import { useTranslation } from "react-i18next";

const HowItWorksStep = (props) => {
  const { t } = useTranslation();
  const { howItWorksStep } = props.HowItStepData;
  return (
    <HowItWorksStepStyle>
      <div className="container">
        <H1>{t("how_it_works.title")}</H1>
        <StepList>
          {t("how_it_works.step_content_data", { returnObjects: true }).map(
            (data, i) => {
              return (
                <StepSingleBlock key={i}>
                  <StepImg>
                    <img
                      src={howItWorksStep.StepContentData[i].src}
                      alt={data.alt}
                    />
                  </StepImg>
                  <StepContent>
                    <StepCount>{`0${i + 1}`}</StepCount>
                    <StepInfo>
                      <Title>{data.title}</Title>
                      <Content>{data.content}</Content>
                    </StepInfo>
                  </StepContent>
                </StepSingleBlock>
              );
            }
          )}
        </StepList>
      </div>
    </HowItWorksStepStyle>
  );
};

export default HowItWorksStep;
