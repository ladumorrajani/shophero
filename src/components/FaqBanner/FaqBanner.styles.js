import styled from "styled-components";
import {
  dblack,
  font,
  groldBold,
  rem,
  groldRegular,
  secondary,
  md,
  sm,
  lg,
} from "../../config/variables";
import HelpCard from "../HelpCard/HelpCard";

export const FaqBannerStyle = styled.div`
  display: flex;
  background: ${secondary};
  padding: ${rem(57)} 0 0;
  text-align: center;
  ${sm(`
    padding: ${rem(35)} 0 0;
  `)}
  .container {
    ${sm(`
      padding: 0;
    `)}
  }
`;

export const H1 = styled.h1`
  ${font(rem(36), rem(35), dblack, groldBold)};
  margin-bottom: ${rem(21)};
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
    padding: 0 ${rem(15)}; 
  `)}
`;

export const P = styled.p`
  ${font(rem(20), rem(27), dblack, groldRegular)};
  text-transform: uppercase;
  margin-bottom: ${rem(42)};
  ${md(`
    font-size: ${rem(18)};
    line-height: ${rem(24)};  
    margin-bottom: ${rem(18)};  
  `)}
  ${sm(`
    font-size: ${rem(16)};
    line-height: ${rem(24)}; 
    padding: 0 ${rem(15)}; 
  `)}
`;

export const HelpCardList = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${rem(-75)};
  ${md(`
    margin-bottom: ${rem(-60)}; 
  `)}
  ${sm(`
    margin-bottom: ${rem(-60)}; 
    overflow: auto;
  `)}
`;

export const HelpCardStyle = styled(HelpCard)`
  margin: 0 ${rem(12)};
  ${lg(`
    margin: 0 ${rem(8)};
  `)}
  ${md(`
    margin: 0 ${rem(4)};
  `)}
  ${sm(`
    flex: 0 0 ${rem(155)};
  `)}
`;
