import styled from "styled-components";
import { lg, md, rem, SiteTransition, sm, xl } from "../../config/variables";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { images } from "../../config/images";
import Slider from "react-slick";

export const Testimonial = styled.div`
  width: 100%;
  padding: ${rem(100)} 0 0;
  margin-bottom: ${rem(160)};
  position: relative;
  z-index: 1;
  ${xl(`
    margin-bottom: ${rem(100)};
  `)}
  ${lg(`
    padding: ${rem(80)} 0 0;
    margin-bottom: ${rem(80)};
  `)}
  ${md(`
    padding: ${rem(60)} 0 0;
    margin-bottom: ${rem(80)};
  `)}
  ${sm(`
    padding: ${rem(60)} 0 0;
    margin-bottom: ${rem(30)};
  `)}
  .slick-slide {
    > div {
      padding: 0 ${rem(8)};
      height: 100%;
    }
  }
  .slick-dots {
    display: flex !important;
    justify-content: center;
    margin-top: ${rem(30)};
    ${sm(`
      margin-top: ${rem(20)};
    `)}
    li {
      list-style: none;
      margin: 0 ${rem(8)};
      button {
        padding: 0;
        margin: 0;
        outline: none;
        width: ${rem(23)};
        height: ${rem(23)};
        background: url(${images.SliderDots}) center no-repeat;
        border: 0;
        font-size: 0;
        opacity: 0.3;
        cursor: pointer;
      }
      &.slick-active {
        button {
          opacity: 1;
          transition: ${SiteTransition};
        }
      }
    }
  }
`;

export const H2 = styled.h2`
  text-align: center;
`;

export const TestimonialCardStyle = styled(TestimonialCard)`
  margin: 0 auto;
  height: 100%;
`;

export const SliderStyle = styled(Slider)`
  padding: 0 ${rem(80)};
  ${lg(`
    padding: 0;
    margin-bottom: ${rem(80)};
  `)}
  ${md(`
    padding: 0;
    margin-bottom: ${rem(80)};
  `)}
  ${sm(`
    margin-bottom: ${rem(30)};
  `)}
`;
