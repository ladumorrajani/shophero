import styled from "styled-components";
import {
  lPink,
  rem,
  font,
  dblack,
  groldBold,
  grey,
  groldSLight,
  xlgrey,
  xdgrey,
  secondary,
  white,
  groldMedium,
  xl,
  lg,
  md,
  sm,
  xs,
} from "../../config/variables";
import { images } from "../../config/images";
import Popover from "@material-ui/core/Popover";
import OrganizatioCardWithInfo from "../OrganizationCard/OrganizationCard";

export const PopularOrgSectionStyle = styled.div`
  background: ${lPink};
  width: 100%;
  position: relative;
  padding: ${rem(50)} 0 ${rem(60)};
  ${xs(`
    padding: ${rem(30)} 0 ${rem(40)};
  `)}
  &:after {
    content: "";
    position: absolute;
    bottom: ${rem(-88)};
    right: 0;
    background: url(${images.triangleShape}) no-repeat;
    width: ${rem(1260)};
    height: ${rem(90)};
    transform: rotate(180deg);
    ${xl(`
      width: 70%;
      background-size: cover;
      height: ${rem(65)};
      bottom: ${rem(-60)};
    `)}
    ${lg(`
      width: 70%;
      background-size: cover;
      height: ${rem(48)};
      bottom: ${rem(-46)};
    `)}
    ${md(`
      width: 70%;
      background-size: cover;
      height: ${rem(40)};
      bottom: ${rem(-39)};
    `)}
    ${sm(`
      width: 70%;
      background-size: cover;
      height: ${rem(29)};
      bottom: ${rem(-28)};
    `)}
    ${xs(`
      width: 100%;
      background-size: cover;
      height: ${rem(27)};
      bottom: ${rem(-26)};
    `)}
  }
`;

export const Heading = styled.div`
  width: 100%;
  margin-bottom: ${rem(34)};
  max-width: ${rem(812)};
  display: block;
  ${sm(`
    margin-bottom: ${rem(20)};
  `)}
  ${xs(`
    text-align: center;
  `)}
`;

export const MainHeading = styled.h1`
  ${font(rem(50), rem(50), dblack, groldBold)};
  ${xl(`
    font-size: ${rem(46)};
    line-height: ${rem(46)};    
  `)}
  ${lg(`
    font-size: ${rem(40)};
    line-height: ${rem(40)};    
  `)}
  ${md(`
    font-size: ${rem(32)};
    line-height: ${rem(32)};    
  `)}
  ${sm(`
    font-size: ${rem(28)};
    line-height: ${rem(28)};  
  `)}
`;

export const FilterPanel = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${rem(30)};
  ${sm(`
    flex-direction: column-reverse;
  `)}
  .MuiLink-root {
    ${sm(`
      margin-bottom: ${rem(28)};
    `)}
  }
`;

export const InputSearch = styled.input`
  max-width: ${rem(340)};
  width: 100%;
  border: 0;
  border-radius: ${rem(8)} 0 0 ${rem(8)};
  border-right: ${rem(2)} solid ${xlgrey};
  padding: ${rem(10)} ${rem(30)} ${rem(11)} ${rem(42)};
  ${font(rem(18), rem(25), xdgrey, groldSLight)};
  background: ${white} url(${images.searchIcon}) 15px 50% no-repeat;
  transition: all 0.2s ease-in-out;
  ${md(`
    max-width: ${rem(230)};
    padding: ${rem(8)} ${rem(20)} ${rem(8)} ${rem(34)};
    font-size: ${rem(14)};
    line-height: ${rem(19)};
    background-size: ${rem(17)};
    background-position-x: ${rem(10)};
  `)}
  ${sm(`
    max-width: 100%;
  `)}
`;

export const CategoryButton = styled.button`
  background: ${secondary};
  border: 0;
  padding: ${rem(8)} ${rem(20)};
  border-radius: 0 ${rem(8)} ${rem(8)} 0;
  ${font(rem(18), rem(28), xdgrey, groldSLight)};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  ${md(`
    padding: ${rem(6)} ${rem(13)};
    font-size: ${rem(13)};
    line-height: ${rem(16)};
  `)}
  &:after {
    content: "";
    background: url(${images.DownArrow}) no-repeat;
    width: ${rem(11)};
    height: ${rem(7)};
    margin-left: ${rem(7)};
    transition: all 0.2s ease-in-out;
  }
`;

export const FilterBox = styled.div`
  display: flex;
  flex: 1;
  ${sm(`
    max-width: ${rem(500)};
  `)}
  &.active {
    ${InputSearch} {
      border-radius: ${rem(8)} 0 0 0;
    }
    ${CategoryButton} {
      border-radius: 0 ${rem(8)} 0 0;
      &:after {
        transform: rotateX(180deg);
      }
    }
  }
`;

export const PopOverStyle = styled(Popover)`
  .MuiPopover-paper {
    background: ${white};
    max-width: ${rem(483)};
    margin-top: ${rem(2)};
    width: 100%;
    border-radius: 0 0 ${rem(15)} ${rem(15)};
    padding: ${rem(20)};
    box-sizing: border-box;
    box-shadow: 1px 1px 3px #0000000d;
    ${md(`
      max-width: ${rem(335)};
      padding: ${rem(15)};
    `)}
    ${sm(`
      max-width: calc(100% - 30px);
      padding: ${rem(15)};
    `)}
  }
`;

export const CheckBoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  .MuiFormControlLabel-root {
    width: 50%;
    ${font(rem(18), rem(28), xdgrey, groldMedium)};
    text-transform: uppercase;
    margin: 0;
    margin-bottom: ${rem(16)};
    ${md(`
      font-size: ${rem(14)};
      line-height: ${rem(16)};
      margin-bottom: ${rem(6)};
    `)}
    .MuiIconButton-root {
      padding: 0;
      padding-right: ${rem(10)};
      transition: all 0.2s ease-in-out;
      &.Mui-checked {
        color: #00be7e;
      }
      .MuiSvgIcon-root {
        ${md(`
          font-size: ${rem(16)};
        `)}
      }
      .MuiTouchRipple-rippleVisible {
        display: none;
      }
    }
  }
`;

export const WorkshopCount = styled.p`
  ${font(rem(18), rem(22), grey, groldSLight)};
  margin: 0;
`;

export const OrgContent = styled.div`
  position: relative;
  margin-bottom: ${rem(20)};
`;

export const CardListing = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 ${rem(-12)};
  ${lg(`
    margin: 0 ${rem(-10)};
  `)}
  ${md(`
    margin: 0 ${rem(-5)};
  `)}
`;

export const OrganizationCardStyle = styled(OrganizatioCardWithInfo)`
  margin: 0 ${rem(12)};
  max-width: calc(20% - ${rem(24)});
  margin-bottom: ${rem(20)};
  ${lg(`
    max-width: calc(25% - ${rem(20)});   
    margin: 0 ${rem(10)};
    margin-bottom: ${rem(20)};
  `)}
  ${md(`
    max-width: calc(25% - ${rem(10)});   
    margin: 0 ${rem(5)};
    margin-bottom: ${rem(10)};  
  `)}
  ${sm(`
    max-width: calc(33.33% - ${rem(10)});   
    margin: 0 ${rem(5)};
    margin-bottom: ${rem(10)};  
  `)}
  ${xs(`
    max-width: calc(50% - ${rem(10)});   
    margin: 0 ${rem(5)};
    margin-bottom: ${rem(10)};  
  `)}
`;
