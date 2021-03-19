import styled from "styled-components";
import {
  groldSLight,
  rem,
  SiteTransition,
  white,
  xlGrey,
  groldMedium,
  xlgrey,
  font,
  xdgrey,
  lGreen,
  green,
  md,
} from "../../config/variables";
import { images } from "../../config/images";

export const BrandCard = styled.div`
  max-width: ${rem(256)};
  width: 100%;
  height: ${rem(140)};
  border-radius: ${rem(15)};
  overflow: hidden;
  transition: ${SiteTransition};
  background: ${white};
  display: flex;
  flex-direction: column;
  border: ${rem(2)} solid ${white};
  cursor: pointer;
  position: relative;
  ${md(`
    height: ${rem(96)};
    border-radius: ${rem(10)};
  `)}
  &:before {
    position: absolute;
    content: "";
    background: url(${images.TickFill});
    width: ${rem(26)};
    height: ${rem(26)};
    opacity: 0;
    transition: ${SiteTransition};
    right: ${rem(12)};
    top: ${rem(12)};
    ${md(`
      width: ${rem(20)};
      background-size: ${rem(20)};
      height: ${rem(20)};
      right: ${rem(7)};
      top: ${rem(7)};
    `)}
  }
  &:hover {
    box-shadow: 2px 2px 10px #0000000d;
  }
  &.selected {
    background: ${lGreen};
    border-color: ${green};
    &:before {
      opacity: 1;
    }
  }
`;

export const ImgWrap = styled.div`
  border-bottom: ${rem(1)} solid ${xlgrey};
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - ${rem(41)});
  padding: ${rem(13)} ${rem(40)};
  ${md(`
    padding: ${rem(13)} ${rem(30)};
    height: calc(100% - ${rem(28)});
  `)}
`;

export const Img = styled.img`
  display: block;
  max-height: 100%;
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${rem(10)} ${rem(15)};
  height: ${rem(41)};
  ${md(`
    height: ${rem(28)};
    padding: ${rem(5)} ${rem(10)};
  `)}
`;

export const Name = styled.div`
  ${font(rem(16), rem(21), xlGrey, groldSLight)};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  ${md(`
    font-size: ${rem(12)};
    line-height: ${rem(16)};
  `)}
`;

export const Count = styled.div`
  ${font(rem(20), rem(21), xdgrey, groldMedium)};
  ${md(`
    font-size: ${rem(14)};
    line-height: ${rem(18)};
  `)}
`;
