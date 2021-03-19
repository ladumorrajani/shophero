import styled from "styled-components";
import {
  rem,
  groldLight,
  grey,
  primary,
  red,
  font,
  SiteTransition,
  secondary,
  md,
} from "../../config/variables";
import { images } from "../../config/images";

export const Form = styled.form`
  display: flex;
  max-width: ${rem(395)};
  width: 100%;
  ${md(`
    max-width: ${rem(350)};
  `)}
`;

export const InputFieldRow = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  color: ${grey};
  border: ${rem(2)} solid ${grey};
  font-size: ${rem(18)};
  line-height: 1.2;
  padding: ${rem(15)} ${rem(50)} ${rem(15)} ${rem(20)};
  border-radius: ${rem(10)};
  font-family: ${groldLight};
  width: 100%;
  background: rgba(255, 250, 232, 0.9);
  transition: ${SiteTransition};
  ${md(`
    padding: ${rem(10)} ${rem(50)} ${rem(10)} ${rem(16)};
  `)}
  &:focus {
    border-color: ${secondary};
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% + ${rem(5)});
  ${font(rem(14), rem(15), red, groldLight)}
`;

export const Button = styled.button`
  position: absolute;
  font-size: 0;
  border: 0;
  background: ${primary} url(${images.IconBtn}) center no-repeat;
  border-radius: ${rem(5)};
  right: ${rem(8.5)};
  top: 50%;
  transform: translateY(-50%);
  width: ${rem(40)};
  height: ${rem(40)};
  cursor: pointer;
  transition: ${SiteTransition};
  ${md(`
    width: ${rem(30)};
    height: ${rem(30)};
  `)}
  &:hover {
    background-color: ${secondary};
  }
`;
