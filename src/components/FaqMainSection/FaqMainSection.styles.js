import styled from "styled-components";
import {
  dblack,
  black,
  font,
  groldBold,
  groldSLight,
  rem,
  secondary,
  xdblack,
  SiteTransition,
  white,
  primary,
  groldRegular,
  grey,
  md,
  lg,
  sm,
} from "../../config/variables";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

export const FaqMainSectionStyle = styled.div`
  padding: ${rem(113)} 0 ${rem(64)};
  ${md(`
    padding: ${rem(90)} 0 ${rem(50)};  
  `)}
`;

export const H2 = styled.h2`
  ${font(rem(30), rem(40), dblack, groldBold)};
  margin-bottom: ${rem(14)};
  text-align: center;
  ${lg(`
    font-size: ${rem(28)};
    line-height: ${rem(32)};  
    margin-bottom: ${rem(15)};  
  `)}
  ${md(`
    font-size: ${rem(24)};
    line-height: ${rem(28)};  
    margin-bottom: ${rem(9)};  
  `)}
  ${sm(`
    font-size: ${rem(22)};
    line-height: ${rem(26)};  
    margin-bottom: ${rem(9)};  
  `)}
`;

export const P = styled.p`
  ${font(rem(20), rem(28), xdblack, groldSLight)};
  max-width: ${rem(592)};
  width: 100%;
  margin: 0 auto;
  margin-bottom: ${rem(31)};
  text-align: center;
  ${lg(`
    font-size: ${rem(18)};
    line-height: ${rem(26)};  
    margin-bottom: ${rem(25)};  
  `)}
  ${md(`
    font-size: ${rem(16)};
    line-height: ${rem(22)};  
    margin-bottom: ${rem(25)};  
  `)}
`;

export const AccordianWrapper = styled.div`
  max-width: ${rem(1070)};
  width: 100%;
  margin: 0 auto;
`;

export const ExpandIcon = styled.div`
  width: ${rem(32)};
  height: ${rem(32)};
  border-radius: 50%;
  background: ${primary};
  position: relative;
  transition: ${SiteTransition};
  ${md(`
    width: ${rem(28)};
    height: ${rem(28)};
  `)}
  ${sm(`
    width: ${rem(24)};
    height: ${rem(24)};
  `)}
  &:before,
  &:after {
    content: "";
    width: ${rem(16)};
    height: ${rem(3)};
    background: ${white};
    border-radius: ${rem(1)};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: ${SiteTransition};
    ${md(`
      width: ${rem(14)};
      height: ${rem(2.5)};
    `)}
    ${sm(`
      width: ${rem(12)};
      height: ${rem(2)};
    `)}
  }
  &:after {
    transform: translate(-50%, -50%) rotate(90deg);
  }
`;

export const AccordionSingle = styled.div`
  position: relative;
  margin-bottom: ${rem(22)};
  ${md(`
    margin-bottom: ${rem(18)};
  `)}
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: ${rem(7)};
    left: ${rem(7)};
    border-radius: ${rem(15)};
    border: ${rem(2)} solid ${secondary};
    z-index: 0;
    transition: ${SiteTransition};
    ${md(`
      border-radius: ${rem(10)};
    `)}
  }
`;

export const AccordionStyle = styled(Accordion)`
  box-shadow: inherit;
  border-radius: ${rem(15)} !important;
  background: ${white};
  position: relative;
  padding: ${rem(14)} 0;
  z-index: 1;
  ${md(`
    border-radius: ${rem(10)} !important;
  `)}
  &:before {
    display: none;
  }
`;

export const AccordionSummaryStyle = styled(AccordionSummary)`
  width: 100%;
  padding: 0 ${rem(20)};
  min-height: auto;
  .MuiAccordionSummary-content {
    ${font(rem(20), rem(27), black, groldRegular)};
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 0;
    ${md(`
      font-size: ${rem(18)};
      line-height: ${rem(24)};  
    `)}
    ${sm(`
      font-size: ${rem(16)};
      line-height: ${rem(22)};  
    `)}
    span {
      margin-right: ${rem(4)};
    }
  }
  &.MuiAccordionSummary-root.Mui-expanded {
    min-height: auto;
  }
  .MuiIconButton-edgeEnd {
    padding: 0;
    margin: 0;
  }
  .MuiAccordionSummary-expandIcon.Mui-expanded {
    transform: inherit;
    ${ExpandIcon} {
      background: ${secondary};
      &:after {
        transform: translate(-50%, -50%) rotate(0deg);
      }
    }
  }
`;

export const AccordionDetailsStyle = styled(AccordionDetails)`
  padding: ${rem(10)} ${rem(37)} ${rem(19)};
  ${font(rem(18), rem(24), grey, groldSLight)};
  ${md(`
    font-size: ${rem(16)};
    line-height: ${rem(22)};  
  `)}
  ${sm(`
    font-size: ${rem(14)};
    line-height: ${rem(20)}; 
    padding: ${rem(10)} ${rem(30)} ${rem(19)}; 
  `)}
`;
