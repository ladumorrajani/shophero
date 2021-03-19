import styled from "styled-components";
import {
  dblack,
  font,
  groldBold,
  lg,
  md,
  rem,
  secondary,
  sm,
} from "../../config/variables";

export const AboutBannerStyle = styled.div`
  display: flex;
  background: ${secondary};
  padding: ${rem(52)} 0;
  text-align: center;
  ${md(`
    padding: ${rem(30)} 0;  
  `)}
`;

export const H1 = styled.h1`
  ${font(rem(36), rem(35), dblack, groldBold)};
  margin-bottom: ${rem(0)};
  ${lg(`
    font-size: ${rem(32)};
    line-height: ${rem(32)};    
  `)}
  ${md(`
    font-size: ${rem(28)};
    line-height: ${rem(28)};    
  `)}
  ${sm(`
    font-size: ${rem(26)};
    line-height: ${rem(26)}; 
  `)}
`;
