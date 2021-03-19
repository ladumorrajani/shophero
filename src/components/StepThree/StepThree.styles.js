import styled from "styled-components";
import {
  rem,
  lPink,
  primary,
  lprimary,
  dblack,
  grey,
  groldSLight,
  font,
  white,
  xdgrey,
  groldRegular,
  xl,
  md,
  sm,
  xs,
} from "../../config/variables";
import { images } from "../../config/images";

export const StepThreeStyle = styled.div`
  height: 100%;
  width: 100%;
  background: ${lPink};
  padding: ${rem(80)} 0;
  border-radius: ${rem(15)};
  overflow-y: auto;
  ${xl(`
    padding: ${rem(50)} 0;
  `)}
  ${md(`
    padding: ${rem(50)} 0;
  `)}
  ${sm(`
    padding: ${rem(20)} ${rem(15)};
  `)}
`;

export const SubscribeContent = styled.div`
  border-radius: ${rem(20)};
  border: ${rem(2)} solid ${primary};
  max-width: ${rem(650)};
  overflow: hidden;
  margin: 0 auto;
  ${md(`
    max-width: ${rem(560)};
  `)}
`;

export const SubscribeForm = styled.div`
  background: ${lprimary};
  padding: ${rem(30)};
  text-align: center;
  ${md(`
    padding: ${rem(26)};
  `)}
  ${sm(`
    padding: ${rem(20)} ${rem(15)};
  `)}
`;

export const H5 = styled.h5`
  color: ${dblack};
  margin: 0;
`;

export const P = styled.p`
  ${font(rem(18), rem(20), grey, groldSLight)};
  margin: 0;
  margin-bottom: ${rem(22)};
  ${md(`
    font-size: ${rem(16)};
    line-height: ${rem(18)};
    margin-bottom: ${rem(16)};
  `)}
`;

export const NewsletterFormWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const ListDataWrap = styled.div`
  padding: ${rem(19)};
  background: ${white};
  padding-bottom: ${rem(7)};
`;

export const ListData = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0 ${rem(30)};
  padding-right: 0;
  ${sm(`
    padding: 0;
  `)}
`;

export const ListItem = styled.li`
  ${font(rem(18), rem(26), xdgrey, groldSLight)};
  padding-left: ${rem(36)};
  position: relative;
  margin-bottom: ${rem(16)};
  list-style: none;
  width: 40%;
  ${md(`
    font-size: ${rem(15)};
    line-height: ${rem(18)};
    margin-bottom: ${rem(12)};
  `)}
  ${sm(`
    font-size: ${rem(15)};
    line-height: ${rem(18)};
    margin-bottom: ${rem(12)};
    width: 50%;
  `)}
  ${xs(`
    width: 100%;
  `)}
  &:nth-child(2n) {
    width: 60%;
    ${sm(`
      width: 50%;
    `)}
    ${xs(`
      width: 100%;
    `)}
  }
  &:before {
    content: "";
    position: absolute;
    width: ${rem(26)};
    height: ${rem(26)};
    left: 0;
    top: 0;
    background: url(${images.TickFillYellow});
    ${md(`
      width: ${rem(23)};
      height: ${rem(23)};
      background-size: ${rem(23)};
    `)}
  }
`;

export const SubscribeFooter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: ${rem(30)} 0;
  ${md(`
    padding: ${rem(19)} 0;
  `)}
  .MuiTypography-root {
    ${sm(`
      width: 100%;
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 9;
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

export const SkipStep = styled.div`
  cursor: pointer;
  ${font(rem(16), rem(21), xdgrey, groldRegular)};
  text-transform: uppercase;
  margin-bottom: ${rem(10)};
  ${md(`
    font-size: ${rem(14)};
    line-height: ${rem(18)};
  `)}
`;
