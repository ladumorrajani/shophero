import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import {
  FaqBannerStyle,
  H1,
  P,
  HelpCardList,
  HelpCardStyle,
} from "./FaqBanner.styles";
import "../../i18n";
import { useTranslation } from "react-i18next";

const FaqBanner = (props) => {
  const { t } = useTranslation();
  const { faqBannerProps } = props.FaqBanenrData;
  return (
    <FaqBannerStyle>
      <div className="container">
        <H1>{t("faq_page.banner.title")}</H1>
        <SearchForm />
        <P>{t("faq_page.banner.content")}</P>
        <HelpCardList>
          {t("faq_page.banner.help_card", { returnObjects: true }).map(
            (data, i) => {
              return (
                <HelpCardStyle
                  key={i}
                  {...data}
                  src={faqBannerProps.helpCardData[i].src}
                />
              );
            }
          )}
        </HelpCardList>
      </div>
    </FaqBannerStyle>
  );
};

export default FaqBanner;
