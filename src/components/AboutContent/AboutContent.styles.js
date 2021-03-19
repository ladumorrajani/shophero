import styled from "styled-components";
import { images } from "../../config/images";
import {
  dblack,
  font,
  groldBold,
  groldMedium,
  groldSLight,
  secondary,
  rem,
  white,
  md,
  sm,
  lg,
  xl,
} from "../../config/variables";

export const AboutContentStyle = styled.div`
  padding: ${rem(60)} 0;
  ${md(`
    padding: ${rem(40)} 0;  
  `)}
  ${sm(`
    padding: ${rem(30)} 0;
  `)}
`;

export const ContentWrap = styled.div`
  display: flex;
  margin-bottom: ${rem(46)};
  ${md(`
    margin-bottom: ${rem(30)};
  `)}
  ${sm(`
    margin-bottom: ${rem(20)};
    flex-direction: column;
  `)}
`;

export const ContentBlock = styled.div`
  flex: 1;
  padding-right: ${rem(113)};
  ${xl(`
    padding-right: ${rem(60)}
  `)}
  ${lg(`
    padding-right: ${rem(50)}
  `)}
  ${md(`
    padding-right: ${rem(20)};
  `)}
  ${sm(`
    padding-right: ${rem(0)};
  `)}
`;

export const Figure = styled.figure`
  max-width: ${rem(640)};
  width: 100%;
  overflow: hidden;
  border-radius: ${rem(20)};
  ${xl(`
    max-width: 50%;
  `)}
  ${lg(`
    max-width: 50%;
  `)}
  ${md(`
    max-width: 50%;
  `)}
  ${sm(`
    border-radius: ${rem(15)};
    max-width: ${rem(400)};
  `)}
  img {
    display: block;
  }
`;

export const H2 = styled.h2`
  ${font(rem(36), rem(35), dblack, groldBold)};
  margin-bottom: ${rem(21)};
  ${lg(`
    font-size: ${rem(32)};
    line-height: ${rem(32)}; 
    margin-bottom: ${rem(18)};   
  `)}
  ${md(`
    font-size: ${rem(28)};
    line-height: ${rem(28)};  
    margin-bottom: ${rem(15)};  
  `)}
  ${sm(`
    font-size: ${rem(26)};
    line-height: ${rem(26)}; 
    margin-bottom: ${rem(13)};
  `)}
`;

export const P = styled.p`
  ${font(rem(20), rem(27), dblack, groldSLight)};
  margin-bottom: ${rem(21)};
  white-space: break-spaces;
  ${md(`
    font-size: ${rem(18)};
    line-height: ${rem(24)};  
    margin-bottom: ${rem(15)};  
  `)}
  ${sm(`
    font-size: ${rem(16)};
    line-height: ${rem(22)}; 
    margin-bottom: ${rem(13)};
  `)}
`;

export const BlockQuote = styled.blockquote`
  position: relative;
  width: 100%;
  margin-bottom: ${rem(46)};
  margin-top: ${rem(46)};
  ${sm(`
    margin-bottom: ${rem(30)};
    margin-top: ${rem(30)};
  `)}
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: ${rem(6)};
    left: ${rem(6)};
    border-radius: ${rem(15)};
    border: ${rem(2)} solid ${secondary};
    z-index: 0;
    ${sm(`
      border-radius: ${rem(10)};
    `)}
  }
`;

export const BlockQuoteWrap = styled.div`
  padding: ${rem(40)} ${rem(30)} ${rem(30)} ${rem(30)};
  position: relative;
  z-index: 1;
  border-radius: ${rem(15)};
  background: ${white};
  ${sm(`
    padding: ${rem(21)} ${rem(15)} ${rem(18)} ${rem(15)};
    border-radius: ${rem(10)};
  `)}
  &:before {
    content: "";
    width: ${rem(39)};
    height: ${rem(43)};
    background: url(${images.SliderDots}) no-repeat;
    left: ${rem(30)};
    top: ${rem(-21)};
    position: absolute;
    background-size: ${rem(39)};
    ${md(`
      width: ${rem(32)};
      height: ${rem(35)};
      background-size: ${rem(32)}; 
      top: ${rem(-17.5)};
    `)}
    ${md(`
      width: ${rem(22)};
      height: ${rem(25)};
      background-size: ${rem(22)}; 
      top: ${rem(-12.5)};
      left: ${rem(20)};
    `)}
  }
`;

export const BlockP = styled.p`
  ${font(rem(24), rem(32), dblack, groldMedium)};
  margin: 0;
  ${md(`
    font-size: ${rem(18)};
    line-height: ${rem(24)};  
  `)}
  ${sm(`
    font-size: ${rem(16)};
    line-height: ${rem(22)}; 
  `)}
`;
