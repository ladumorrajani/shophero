import styled from "styled-components";
import { images } from "../../config/images";
import {
  dblack,
  SiteTransition,
  groldMedium,
  rem,
  font,
  primary,
  groldRegular,
  lg,
  md,
  sm,
} from "../../config/variables";
import { Link } from "@material-ui/core";

export const CotactCardStyle = styled.div`
  max-width: ${rem(460)};
  width: 100%;
  position: relative;
  ${md(`
    max-width: ${rem(325)}; 
  `)}
  ${sm(`
    max-width: 100%; 
  `)}
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: ${rem(7)};
    left: ${rem(7)};
    border-radius: ${rem(20)};
    border: ${rem(3)} solid ${primary};
    opacity: 0.9;
    z-index: 0;
    transition: ${SiteTransition};
    ${md(`
      border-radius: ${rem(18)};
    `)}
    ${sm(`
      border-radius: ${rem(10)};
      border-width: ${rem(2)};
      top: ${rem(5)};
      left: ${rem(5)};
    `)}
  }
`;

export const CotactCardWrap = styled.div`
  padding: ${rem(42)} ${rem(20)} ${rem(20)};
  position: relative;
  text-align: center;
  z-index: 1;
  border-radius: ${rem(20)};
  background: rgba(240, 251, 255, 0.9);
  ${md(`
    padding: ${rem(31)} ${rem(20)} ${rem(18)};
    border-radius: ${rem(18)};
  `)}
  ${sm(`
    border-radius: ${rem(10)};
  `)}
  &:before {
    content: "";
    width: ${rem(50)};
    height: ${rem(55)};
    background: url(${images.SliderDots}) no-repeat;
    left: ${rem(45)};
    top: ${rem(-28)};
    position: absolute;
    background-size: ${rem(50)};
    ${lg(`
      background-size: ${rem(40)};
      width: ${rem(40)};
      height: ${rem(43)};
      top: ${rem(-21.5)};
    `)}
    ${md(`
      background-size: ${rem(32)};
      width: ${rem(32)};
      height: ${rem(35)};
      top: ${rem(-17.5)};
      left: ${rem(30)};
    `)}
  }
`;

export const Icon = styled.figure`
  margin: 0 auto;
  margin-bottom: ${rem(12)};
  display: block;
  height: ${rem(59)};
  ${md(`
    height: ${rem(43)};
  `)}
  img {
    display: block;
    max-height: 100%;
    margin: 0 auto;
  }
`;

export const H3 = styled(Link)`
  ${font(rem(28), rem(37), dblack, groldMedium)};
  margin-bottom: ${rem(4)};
  text-transform: uppercase;
  ${lg(`
    font-size: ${rem(24)};
    line-height: ${rem(32)};  
    margin-bottom: ${rem(3)};  
  `)}
  ${md(`
    font-size: ${rem(20)};
    line-height: ${rem(27)};  
    margin-bottom: ${rem(2)};  
  `)}
  &:hover {
    text-decoration: none;
  }
`;

export const P = styled.p`
  ${font(rem(18), rem(24), dblack, groldRegular)};
  margin-bottom: ${rem(0)};
  text-transform: uppercase;
  ${lg(`
    font-size: ${rem(16)};
    line-height: ${rem(21)};  
  `)}
  ${md(`
    font-size: ${rem(14)};
    line-height: ${rem(19)};  
  `)}
`;
