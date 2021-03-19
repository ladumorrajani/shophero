import styled from "styled-components";
import {
  dblack,
  grey,
  groldSLight,
  lGrey,
  rem,
  font,
  xl,
  lg,
  md,
  xs,
} from "../../config/variables";

export const CardStyle = styled.div`
  max-width: ${rem(398)};
  width: 100%;
  padding: 0 ${rem(35)};
  position: relative;
  text-align: center;
  ${xl(`
    padding: 0 ${rem(30)};
  `)}
  ${lg(`
    padding: 0 ${rem(25)};
    padding-top: ${rem(25)};
  `)}
  ${md(`
    padding: 0 ${rem(14)};
    padding-top: ${rem(35)};
  `)}
  ${xs(`
    padding-top: ${rem(19)};
  `)}
  &:after {
    content: "";
    width: 100%;
    height: calc(100% - ${rem(35)});
    transform: skewY(10deg);
    background: ${lGrey};
    opacity: 0.9;
    border-radius: ${rem(20)};
    position: absolute;
    top: ${rem(70)};
    left: 0;
    z-index: -1;
    ${md(`
      border-radius: ${rem(13)};
    `)}
  }
`;

export const Icon = styled.figure`
  margin: 0 auto;
  margin-bottom: ${rem(38)};
  min-height: ${rem(118)};
  display: block;
  ${xl(`
    margin-bottom: ${rem(20)};
    min-height: ${rem(95)};
  `)}
  ${lg(`
    margin-bottom: ${rem(20)};
    min-height: ${rem(70)};
  `)}
  ${md(`
    margin-bottom: ${rem(18)};
    min-height: ${rem(70)};
  `)}
  img {
    display: block;
    margin: 0 auto;
    ${xl(`
      max-width: 35%;
    `)}
    ${lg(`
      max-width: 30%;
    `)}
    ${md(`
      max-width: 35%;
    `)}
    ${xs(`
      max-width: ${rem(100)};
    `)}
  }
`;

export const H3 = styled.h3`
  color: ${dblack};
  margin-bottom: ${rem(15)};
  ${md(`
    font-size: ${rem(20)};
    line-height: ${rem(24)};
  `)}
`;

export const P = styled.p`
  ${font(rem(24), rem(30), grey, groldSLight)};
  ${md(`
    font-size: ${rem(16)};
    line-height: ${rem(20)};
    margin: 0;
  `)}
`;
