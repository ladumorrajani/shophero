import React from "react";
import { AboutBannerStyle, H1 } from "./AboutBanner.styles";
import "../../i18n";
import { useTranslation } from "react-i18next";

const AboutBanner = () => {
  const { t } = useTranslation();
  return (
    <AboutBannerStyle>
      <div className="container">
        <H1>{t("about_page.banner_title")}</H1>
      </div>
    </AboutBannerStyle>
  );
};

export default AboutBanner;
