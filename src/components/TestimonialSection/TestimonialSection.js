import React from "react";
import {
  Testimonial,
  TestimonialCardStyle,
  H2,
  SliderStyle,
} from "./TestimonialSection.styles";
import "slick-carousel/slick/slick.css";
import "../../i18n";
import { useTranslation } from "react-i18next";

const TestimonialSection = (props) => {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { testimonialProps } = props.TestimonialData;
  return (
    <Testimonial>
      <div className="container">
        <H2>{t("home.testiminial_sec.title")}</H2>
        <SliderStyle {...settings}>
          {t("home.testiminial_sec.card_list", { returnObjects: true }).map(
            (cardData, i) => {
              return (
                <TestimonialCardStyle
                  key={i}
                  {...cardData}
                  src={testimonialProps.CardList[i].src}
                />
              );
            }
          )}
        </SliderStyle>
      </div>
    </Testimonial>
  );
};

export default TestimonialSection;
