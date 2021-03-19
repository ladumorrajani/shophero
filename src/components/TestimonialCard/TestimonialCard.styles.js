import styled from "styled-components";
import {
  dblack,
  font,
  rem,
  groldRegularI,
  groldXBoldI,
  groldRegular,
  grey,
  xl,
  lg,
  md,
} from "../../config/variables";
import { images } from "../../config/images";

export const TestimonalCardStyle = styled.div`
  max-width: ${rem(398)};
  width: 100%;
  background-color: rgba(240, 251, 255, 0.9);
  border-radius: ${rem(20)};
  overflow: hidden;
`;

export const CardContent = styled.div`
  background-color: rgba(113, 199, 229, 0.3);
  padding: ${rem(28)} ${rem(38)};
  position: relative;
  ${xl(`
    padding: ${rem(22)} ${rem(32)};
  `)}
  ${lg(`
    padding: ${rem(18)} ${rem(25)};
  `)}
  ${md(`
    padding: ${rem(18)} ${rem(25)};
  `)}
  &:after {
    content: "";
    width: ${rem(48)};
    height: ${rem(22)};
    position: absolute;
    bottom: ${rem(-22)};
    right: ${rem(52)};
    background: url(${images.TestimonialIcon}) no-repeat bottom;
  }
`;

export const Title = styled.h5`
  ${font(rem(24), rem(24), dblack, groldRegularI)};
  margin-bottom: ${rem(14)};
  text-transform: unset;
  ${md(`
    font-size: ${rem(22)};
  `)}
`;

export const Description = styled.p`
  margin: 0;
`;

export const CardUser = styled.div`
  padding: ${rem(23)} ${rem(38)};
  display: flex;
  align-items: center;
  ${xl(`
    padding: ${rem(20)} ${rem(32)};
  `)}
  ${lg(`
    padding: ${rem(18)} ${rem(25)};
  `)}
  ${md(`
    padding: ${rem(18)} ${rem(25)};
  `)}
`;

export const CardPic = styled.figure`
  width: ${rem(64)};
  height: ${rem(64)};
  border-radius: 50%;
  margin-right: ${rem(21)};
  overflow: hidden;
  ${xl(`
    width: ${rem(60)};
    height: ${rem(60)};
    margin-right: ${rem(18)};
  `)}
  ${lg(`
    width: ${rem(60)};
    height: ${rem(60)};
    margin-right: ${rem(18)};
  `)}
  ${md(`
    width: ${rem(60)};
    height: ${rem(60)};
    margin-right: ${rem(18)};
  `)}
  img {
    width: 100%;
  }
`;

export const CardUserInfo = styled.div`
  flex: 1;
`;

export const Name = styled.h5`
  ${font(rem(24), rem(24), dblack, groldRegular)};
  margin: 0;
  text-transform: capitalize;
  ${xl(`
    font-size: ${rem(22)};
    line-height: ${rem(22)};
  `)}
`;

export const Designation = styled.div`
  ${font(rem(16), rem(20), grey, groldXBoldI)};
`;
