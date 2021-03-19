import styled from "styled-components";
import { images } from "../../config/images";
import {
  rem,
  grey,
  font,
  groldSLight,
  xlgrey,
  lPink,
  xdgrey,
  customScroll,
  white,
  groldMedium,
  lg,
  md,
  sm,
  xs,
} from "../../config/variables";
import Popover from "@material-ui/core/Popover";
import OrganizatioCardWithInfo from "../OrganizationCard/OrganizationCard";

export const StepTwoStyle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FilterPanel = styled.div`
  width: 100%;
  padding: ${rem(10)} ${rem(15)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${xlgrey};
  border-radius: ${rem(15)} ${rem(15)} 0 0;
  ${md(`
    border-radius: ${rem(10)} ${rem(10)} 0 0;
    padding: ${rem(5)} ${rem(15)} ${rem(5)} ${rem(5)};
  `)}
  ${sm(`
    border-radius: 0;
    padding: ${rem(10)} ${rem(15)};
    background: ${lPink};
  `)}
  ${xs(`
    padding: ${rem(10)} ${rem(15)};
  `)}
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
  background: ${white};
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
  ${md(`
    font-size: ${rem(15)};
    line-height: ${rem(18)};
  `)}
  ${sm(`
    display: none;
  `)}
`;

export const StepContent = styled.div`
  width: 100%;
  background: ${lPink};
  height: calc(100% - ${rem(145)});
  flex: 1;
  position: relative;
  &:after {
    content: "";
    width: 100%;
    height: ${rem(46)};
    background: transparent linear-gradient(180deg, #fcf7e700 0%, #fcf7e7 100%)
      0% 0% no-repeat padding-box;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const StepContentWrap = styled.div`
  height: 100%;
  ${customScroll()};
  overflow: auto;
  padding: ${rem(20)} ${rem(17)};
  ${md(`
    padding: ${rem(10)} ${rem(10)};
  `)}
  ${sm(`
    padding: ${rem(0)} ${rem(15)} ${rem(10)};
  `)}
`;

export const StepFooter = styled.div`
  width: 100%;
  padding: ${rem(20)} ${rem(32)};
  display: flex;
  align-items: center;
  justify-content: center;
  ${sm(`
    padding: 0;
  `)}
  .MuiTypography-root {
    ${sm(`
      width: 100%;
      display: block;
    `)}
    &:after {
      ${sm(`
        display: none;
      `)}
    }
    span {
      ${sm(`
        padding: ${rem(19)};
        font-size: ${rem(18)};
        width: 100%;
        border-radius: 0;
        text-align: center;
      `)}
      &:before {
        ${sm(`
          left: calc(50% - 90px);
        `)}
      }
    }
  }
`;

export const CardListing = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 ${rem(-10)};
  ${md(`
    margin: 0 ${rem(-5)};
  `)}
  ${sm(`
    margin: 0 ${rem(-5)};
  `)}
`;

export const OrganizationCardStyle = styled(OrganizatioCardWithInfo)`
  margin: 0 ${rem(10)};
  margin-bottom: ${rem(20)};
  max-width: calc(20% - ${rem(20)});
  ${lg(`
    max-width: calc(25% - ${rem(20)});
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
