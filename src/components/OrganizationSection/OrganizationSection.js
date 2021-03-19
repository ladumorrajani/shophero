import React from "react";
import {
  Organization,
  OrganizationHeading,
  OrganizationList,
  H2,
  OrgButton,
  BrandCardStyle,
} from "./OrganizationSection.styles";
import "../../i18n";
import { useTranslation } from "react-i18next";

const OrganizationSection = (props) => {
  const { t } = useTranslation();
  const { organizationProps } = props.OrganizationData;
  return (
    <Organization>
      <div className="container">
        <OrganizationHeading>
          <H2>{t("home.org_sec.title")}</H2>
          <OrgButton>{t("home.org_sec.btn_txt")}</OrgButton>
        </OrganizationHeading>
        <OrganizationList>
          {organizationProps.CardList.map((cardData) => {
            return <BrandCardStyle key={cardData.id} {...cardData} />;
          })}
        </OrganizationList>
      </div>
    </Organization>
  );
};

export default OrganizationSection;
