import React, { useEffect, useState } from "react";
import {
  Webshops,
  WebshopsWrapper,
  WebshopList,
  WenShopRow,
  H2,
  Card,
  Img,
  ImgWrap,
  ViewAll,
} from "./PoppularWebshops.styles";
import Button from "../Button/Button";
import "../../i18n";
import { useTranslation } from "react-i18next";

const PoppularWebshops = (props) => {
  const { t } = useTranslation();
  const { poppularSecProps } = props.PoppularSecData;
  const [currentIndex, setCurrentIndex] = useState(0);

  let ImageLength = poppularSecProps.CardListUp[0].ImgData.length;
  if (currentIndex === ImageLength) {
    setCurrentIndex(0);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => currentIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Webshops id="webshop">
      <div className="container">
        <WebshopsWrapper>
          <H2>{t("home.popular_sec.title")}</H2>
          <WebshopList>
            <WenShopRow>
              {poppularSecProps.CardListUp.map((cardData) => {
                return (
                  <Card
                    key={cardData.id}
                    className={`${
                      cardData.id === 4 || cardData.id === 5 ? "invisible" : ""
                    }`}
                  >
                    {cardData.ImgData.map((imgdata, index) => {
                      return (
                        <ImgWrap key={index}>
                          <Img
                            src={imgdata.src}
                            alt={imgdata.alt}
                            className={`${
                              index === currentIndex ? "active" : ""
                            }`}
                          />
                        </ImgWrap>
                      );
                    })}
                  </Card>
                );
              })}
            </WenShopRow>
            <WenShopRow>
              {poppularSecProps.CardListDown.map((cardData) => {
                return (
                  <Card
                    key={cardData.id}
                    className={`${
                      cardData.id === 4 || cardData.id === 5 ? "invisible" : ""
                    }`}
                  >
                    {cardData.ImgData.map((imgdata, index) => {
                      return (
                        <ImgWrap key={index}>
                          <Img
                            src={imgdata.src}
                            alt={imgdata.alt}
                            className={`${
                              index === currentIndex ? "active" : ""
                            }`}
                          />
                        </ImgWrap>
                      );
                    })}
                  </Card>
                );
              })}
            </WenShopRow>
          </WebshopList>
        </WebshopsWrapper>
        <ViewAll>
          <Button>{t("home.popular_sec.button")}</Button>
        </ViewAll>
      </div>
    </Webshops>
  );
};

export default PoppularWebshops;
