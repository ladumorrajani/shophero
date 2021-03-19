import styled from "styled-components";
import { images } from "../../config/images";
import {
  rem,
  font,
  primary,
  groldRegular,
  groldBold,
  white,
  xl,
  lg,
  md,
  sm,
  xs,
} from "../../config/variables";

export const Banner = styled.div`
  width: 100%;
  padding: ${rem(33)} 0 ${rem(100)};
  ${lg(`
    padding: ${rem(33)} 0 ${rem(60)};
  `)}
  ${md(`
    padding: ${rem(33)} 0 ${rem(40)};
  `)}
  ${sm(`
    padding: ${rem(33)} 0 ${rem(10)};
  `)}
`;

export const BannerWrapper = styled.div`
  display: flex;
  position: relative;
  ${xs(`
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
  `)}
`;

export const ImagePart = styled.div`
  max-width: 65%;
  ${xl(`
    max-width: 60%;
  `)}
  ${lg(`
    max-width: 55%;
  `)}
  ${md(`
    max-width: 60%;
  `)}
  ${sm(`
    max-width: 50%;
  `)}
  ${xs(`
    max-width: 100%;
  `)}
  img {
    max-width: 100%;
    display: block;
    width: 100%;
  }
`;

export const ContentPart = styled.div`
  max-width: 35%;
  width: 100%;
  padding-left: ${rem(40)};
  display: flex;
  align-items: center;
  ${md(`
    max-width: 40%;
  `)}
  ${sm(`
    max-width: 50%;
  `)}
  ${xs(`
    max-width: 100%;
    padding-left: ${rem(0)};
    margin-bottom: ${rem(30)};
  `)}
`;

export const ContentBlock = styled.div`
  width: 100%;
  h4 {
    ${sm(`
      margin-bottom: ${rem(14)};
    `)}
  }
`;

export const SubTitle = styled.h5`
  width: 100%;
  margin: 0;
  color: ${primary};
  font-family: ${groldRegular};
  ${sm(`
    font-size: ${rem(16)};
    line-height: 1;
  `)}
`;

export const H1 = styled.h1`
  margin: 0;
  ${sm(`
    line-height: 1;
  `)}
`;

export const ScrollBar = styled.div`
  ${font(rem(14), rem(20), white, groldBold)};
  position: absolute;
  left: 0;
  bottom: ${rem(-10)};
  text-transform: uppercase;
  cursor: pointer;
  ${lg(`
    font-size: ${rem(13)};
    line-height: ${rem(18)};    
    bottom: ${rem(0)};
  `)}
  ${md(`
    font-size: ${rem(10)};
    line-height: ${rem(15)};    
    bottom: ${rem(0)};
  `)}
  ${sm(`
    display: none;
  `)}
  &:after {
    content: "";
    background: url(${images.scrollDown}) no-repeat;
    display: block;
    margin: 0 auto;
    width: ${rem(24)};
    height: ${rem(83)};
    ${lg(`
      width: ${rem(20)};
      height: ${rem(83)};
      background-size: ${rem(20)};
    `)}
    ${md(`
      width: ${rem(20)};
      height: ${rem(83)};
      background-size: ${rem(20)};
    `)}
  }
`;
