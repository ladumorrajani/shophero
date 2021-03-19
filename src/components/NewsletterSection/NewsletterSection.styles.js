import styled from "styled-components";
import { images } from "../../config/images";
import {
  rem,
  dblack,
  groldLight,
  groldBold,
  font,
  grey,
  xl,
  md,
  lg,
  sm,
} from "../../config/variables";

export const NewsletterStyle = styled.div`
  .container {
    position: relative;
  }
`;

export const Newsletter = styled.div`
  background-color: rgba(252, 247, 231, 0.9);
  border-radius: ${rem(20)};
  padding: ${rem(33)} ${rem(30)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${rem(21)};
  ${xl(`
    padding: ${rem(29)} ${rem(25)};
  `)}
  ${lg(`
    padding: ${rem(29)} ${rem(25)};
  `)}
  ${md(`
    padding: ${rem(20)} ${rem(20)};
    border-radius: ${rem(15)};
  `)}
  ${sm(`
    flex-direction: column;
    text-align: center;
  `)}
`;

export const NewsletterContent = styled.div`
  flex: 1;
`;

export const H5 = styled.h5`
  margin: 0;
  color: ${dblack};
  ${lg(`
    font-size: ${rem(22)};
  `)}
  ${md(`
    font-size: ${rem(22)};
  `)}
  ${sm(`
    font-size: ${rem(20)};
  `)}
`;

export const P = styled.p`
  margin: 0;
  font-family: ${groldLight};
  ${sm(`
    margin-bottom: ${rem(15)};
  `)}
`;

export const ScrollBar = styled.div`
  ${font(rem(14), rem(20), grey, groldBold)};
  position: absolute;
  right: ${rem(40)};
  bottom: ${rem(140)};
  cursor: pointer;
  z-index: 9;
  ${md(`
    bottom: ${rem(92)};
    right: ${rem(20)};
  `)}
  ${sm(`
    display: none;
  `)}
  &:before {
    content: "";
    background: url(${images.ScrollTop}) no-repeat;
    display: block;
    margin: 0 auto;
    width: ${rem(24)};
    height: ${rem(83)};
  }
`;
