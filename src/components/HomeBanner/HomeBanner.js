import React from "react";
import {
  Banner,
  ImagePart,
  ContentPart,
  ContentBlock,
  SubTitle,
  H1,
  BannerWrapper,
  ScrollBar,
} from "./HomeBanner.styles";
import Button from "../Button/Button";
import StartProgressDialog from "../StartProgressDialog/StartProgressDialog";
import "../../i18n";
import { useTranslation } from "react-i18next";

const HomeBanner = (props) => {
  const { t } = useTranslation();
  const { bannerProps } = props.BannerData;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Banner>
      <div className="container">
        <BannerWrapper>
          <ScrollBar onClick={props.scrollClick}>
            {t("home.banner.scroll")}
          </ScrollBar>
          <ImagePart>
            <img src={bannerProps.bannerImg} alt={bannerProps.bannerImgAlt} />
          </ImagePart>
          <ContentPart>
            <ContentBlock>
              <SubTitle>{t("home.banner.banner_heading")}</SubTitle>
              <H1>{t("home.banner.banner_title")}</H1>
              <h4>{t("home.banner.banner_subtitle")}</h4>
              <Button onClick={() => handleClickOpen()}>
                {t("home.banner.banner_btn_txt")}
              </Button>
            </ContentBlock>
          </ContentPart>
        </BannerWrapper>
        <StartProgressDialog
          {...bannerProps.TabsData}
          open={open}
          handleClose={handleClose}
        />
      </div>
    </Banner>
  );
};

export default HomeBanner;
