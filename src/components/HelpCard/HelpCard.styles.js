import styled from "styled-components";
import {
  dblack,
  SiteTransition,
  white,
  groldMedium,
  rem,
  font,
  primary,
  md,
} from "../../config/variables";

export const CardStyle = styled.div`
  max-width: ${rem(250)};
  width: 100%;
  padding: ${rem(21)};
  position: relative;
  text-align: center;
  border-radius: ${rem(20)};
  background: ${white};
  border: ${rem(2)} solid ${white};
  transition: ${SiteTransition};
  ${md(`
    padding: ${rem(16)};
    border-radius: ${rem(15)};
    max-width: ${rem(175)};
  `)}
  &:hover {
    border-color: ${primary};
    box-shadow: 1px 1px 2px #0000000d;
  }
`;

export const Icon = styled.figure`
  margin: 0 auto;
  margin-bottom: ${rem(11)};
  display: block;
  ${md(`
    max-width: ${rem(42)};
    margin-bottom: ${rem(5)};
  `)}
`;

export const H3 = styled.h3`
  ${font(rem(20), rem(27), dblack, groldMedium)};
  margin-bottom: ${rem(0)};
  ${md(`
    font-size: ${rem(16)};
    line-height: ${rem(21)};  
  `)}
`;
