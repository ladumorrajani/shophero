import React from "react";
import {
  HowItWorksStyle,
  WorkFlow,
  HowItWorkCardStyle,
} from "./HowItWorks.styles";
import "../../i18n";
import { useTranslation } from "react-i18next";

const HowItWorks = (props) => {
  const { t } = useTranslation();
  const { howItWorksProps } = props.HowItWorksData;

  return (
    <HowItWorksStyle>
      <div className="container">
        <h2>{t("home.how_it_works_sec.title")}</h2>
        <WorkFlow>
          {t("home.how_it_works_sec.work_list", { returnObjects: true }).map(
            (data, i) => {
              return (
                <HowItWorkCardStyle
                  key={i}
                  {...data}
                  src={howItWorksProps.WorkListData[i].src}
                />
              );
            }
          )}
        </WorkFlow>
      </div>
    </HowItWorksStyle>
  );
};

export default HowItWorks;
