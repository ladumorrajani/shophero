import styled from "styled-components";
import Link from "@material-ui/core/Link";
import { images } from "../../config/images";
import {
  rem,
  dblack,
  SiteTransition,
  secondary,
  primary,
  md,
} from "../../config/variables";

export const ButtonStyle = styled(Link)`
  position: relative;
  text-decoration: none;
  font-family: "grold_roundedmedium";
  cursor: pointer;
  display: inline-block;
  span {
    background: ${secondary};
    display: block;
    border-radius: ${rem(5)};
    padding: ${rem(8)} ${rem(20)} ${rem(8)} ${rem(38)};
    position: relative;
    z-index: 1;
    font-size: ${rem(16)};
    line-height: ${rem(24)};
    color: ${dblack};
    transition: ${SiteTransition};
    text-transform: uppercase;
    white-space: nowrap;
    ${md(`
      font-size: ${rem(13)};
      line-height: ${rem(16)};
      padding: ${rem(8)} ${rem(10)} ${rem(8)} ${rem(30)};
    `)}
    &:before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: ${rem(15)};
      background: url(${images.IconBtn}) center center no-repeat;
      width: ${rem(16)};
      height: ${rem(15)};
      ${md(`
        width: ${rem(13)};
        height: ${rem(14)};
        background-size: ${rem(13)};
        left: ${rem(12)};
    `)}
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: ${rem(4)};
    left: ${rem(4)};
    width: 100%;
    height: 100%;
    border-radius: ${rem(5)};
    border: ${rem(2)} solid ${primary};
    z-index: 0;
    transition: ${SiteTransition};
  }
  &:hover {
    text-decoration: none;
    span {
      background: ${primary};
    }
    &:after {
      top: ${rem(-4)};
      left: ${rem(-4)};
      border-color: ${secondary};
    }
  }
  &.disable {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
