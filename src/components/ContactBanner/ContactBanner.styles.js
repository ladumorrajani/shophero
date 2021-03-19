import styled from "styled-components";
import {
  dblack,
  font,
  groldBold,
  rem,
  secondary,
  groldSLight,
  lg,
  md,
  sm,
} from "../../config/variables";
import ContactInfoCard from "../ContactInfoCard/ContactInfoCard";

export const ContactBannerStyle = styled.div`
  display: flex;
  background: ${secondary};
  padding: ${rem(47)} 0 0;
  text-align: center;
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

export const P = styled.p`
  ${font(rem(20), rem(27), dblack, groldSLight)};
  text-transform: uppercase;
  margin-bottom: ${rem(61)};
  ${lg(` 
    margin-bottom: ${rem(30)};  
  `)}
  ${md(`
    font-size: ${rem(18)};
    line-height: ${rem(24)};  
    margin-bottom: ${rem(18)};  
  `)}
  ${sm(`
    font-size: ${rem(16)};
    line-height: ${rem(24)}; 
  `)}
`;

export const ContactInfoList = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${rem(-105)};
  ${md(`
    margin-bottom: ${rem(-75)};
  `)}
  ${sm(`
    flex-direction: column;
    align-items: center;
    margin-bottom: ${rem(-285)};
  `)}
`;

export const ContactInfoCardStyle = styled(ContactInfoCard)`
  margin: 0 ${rem(27)};
  ${lg(`
    margin: 0 ${rem(20)};
  `)}
  ${md(`
    margin: 0 ${rem(11)};
    margin-bottom: ${rem(30)};
  `)}
`;
