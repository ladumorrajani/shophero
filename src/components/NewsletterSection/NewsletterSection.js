import React from "react";
import NewsletterForm from "../NewsletterForm/NewsletterForm";
import {
  NewsletterStyle,
  Newsletter,
  NewsletterContent,
  H5,
  P,
  ScrollBar,
} from "./NewsletterSection.styles";
import "../../i18n";
import { useTranslation } from "react-i18next";

const NewsletterSection = () => {
  const { t } = useTranslation();
  const scrollClick = (e) => {
    e.preventDefault();

    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  return (
    <NewsletterStyle>
      <div className="container">
        <ScrollBar className="bottom-scrollbar" onClick={(e) => scrollClick(e)}>
          {t("home.news_sec.scroll")}
        </ScrollBar>
        <Newsletter>
          <NewsletterContent>
            <H5>{t("home.news_sec.title")}</H5>
            <P>{t("home.news_sec.sub_title")}</P>
          </NewsletterContent>
          <NewsletterForm />
        </Newsletter>
      </div>
    </NewsletterStyle>
  );
};

export default NewsletterSection;
