import React from "react";
import {
  AboutContentStyle,
  ContentWrap,
  ContentBlock,
  H2,
  P,
  BlockQuote,
  BlockQuoteWrap,
  BlockP,
  Figure,
} from "./AboutContent.styles";
import "../../i18n";
import { useTranslation } from "react-i18next";

const AboutContent = (props) => {
  const { t } = useTranslation();
  const { contentProps } = props.AboutContentData;
  return (
    <AboutContentStyle>
      <div className="container">
        <ContentWrap>
          <ContentBlock>
            <H2>{t("about_page.content_data.title")}</H2>
            <P>{t("about_page.content_data.content")}</P>
          </ContentBlock>
          <Figure>
            <img
              src={contentProps.aboutImg}
              alt={t("about_page.content_data.img_alt")}
            />
          </Figure>
        </ContentWrap>
        <H2>{t("about_page.content_data.sec_title")}</H2>
        <P>{t("about_page.content_data.sec_content")}</P>
        <BlockQuote>
          <BlockQuoteWrap>
            <BlockP>{t("about_page.content_data.block_quote")}</BlockP>
          </BlockQuoteWrap>
        </BlockQuote>
        <P>{t("about_page.content_data.last_para")}</P>
      </div>
    </AboutContentStyle>
  );
};

export default AboutContent;
