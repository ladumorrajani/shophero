import React from "react";
import {
  ContactBannerStyle,
  H1,
  P,
  ContactInfoList,
  ContactInfoCardStyle,
} from "./ContactBanner.styles";
import "../../i18n";
import { useTranslation } from "react-i18next";

const ContactBanner = (props) => {
  const { t } = useTranslation();
  const { contactBannerProps } = props.ContactBannerData;
  return (
    <ContactBannerStyle>
      <div className="container">
        <H1>{t("contact_page.title")}</H1>
        <P>{t("contact_page.content")}</P>
        <ContactInfoList>
          {t("contact_page.contact_card", { returnObjects: true }).map(
            (data, i) => {
              return (
                <ContactInfoCardStyle
                  key={i}
                  {...data}
                  src={contactBannerProps.ContactCardData[i].src}
                />
              );
            }
          )}
        </ContactInfoList>
      </div>
    </ContactBannerStyle>
  );
};

export default ContactBanner;
