import React from "react";
import {
  FaqMainSectionStyle,
  H2,
  P,
  AccordianWrapper,
  AccordionSingle,
  AccordionStyle,
  AccordionSummaryStyle,
  AccordionDetailsStyle,
  ExpandIcon,
} from "./FaqMainSection.styles";
import "../../i18n";
import { useTranslation } from "react-i18next";

const FaqMainSection = (props) => {
  const { t } = useTranslation();
  return (
    <FaqMainSectionStyle>
      <div className="container">
        <H2>{t("faq_page.faq_main_sec.title")}</H2>
        <P>{t("faq_page.faq_main_sec.content")}</P>
        <AccordianWrapper>
          {t("faq_page.faq_main_sec.accordian_data", {
            returnObjects: true,
          }).map((data, i) => {
            return (
              <AccordionSingle key={i}>
                <AccordionStyle>
                  <AccordionSummaryStyle
                    expandIcon={<ExpandIcon />}
                    aria-controls={`panel-content${i + 1}`}
                    id={`panel-header${i + 1}`}
                  >
                    <span>{i + 1}.</span>
                    {data.title}
                  </AccordionSummaryStyle>
                  <AccordionDetailsStyle>
                    {data.description}
                  </AccordionDetailsStyle>
                </AccordionStyle>
              </AccordionSingle>
            );
          })}
        </AccordianWrapper>
      </div>
    </FaqMainSectionStyle>
  );
};

export default FaqMainSection;
