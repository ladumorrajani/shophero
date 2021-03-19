import React from "react";
import {
  CompanyInfoSectionStyle,
  InfoPart,
  InfoImage,
  InfoContent,
  InfoCard,
  InfoCardImg,
  InfoCardTxt,
  Title,
  H4,
} from "./CompanyInfoSection.styles";
import "../../i18n";
import { useTranslation } from "react-i18next";

const CompanyInfoSection = (props) => {
  const { t } = useTranslation();
  const { companySecProps } = props.CompanySecData;
  return (
    <CompanyInfoSectionStyle>
      <div className="container">
        <InfoPart>
          <InfoImage>
            <img
              src={companySecProps.InfoImage}
              alt={t("home.company_sec.info_alt")}
            />
          </InfoImage>
          <InfoContent>
            {t("home.company_sec.info_content", { returnObjects: true }).map(
              (data, i) => {
                return (
                  <InfoCard key={i}>
                    <InfoCardImg>
                      <img
                        src={companySecProps.InfoContentData[i].src}
                        alt={data.alt}
                      />
                    </InfoCardImg>
                    <InfoCardTxt>
                      <Title>{data.title}</Title>
                      <H4>{data.content}</H4>
                    </InfoCardTxt>
                  </InfoCard>
                );
              }
            )}
          </InfoContent>
        </InfoPart>
      </div>
    </CompanyInfoSectionStyle>
  );
};

export default CompanyInfoSection;
