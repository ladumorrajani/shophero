import styled from "styled-components";
import {
  rem,
  primary,
  font,
  groldBold,
  white,
  md,
  sm,
} from "../../config/variables";

export const Button = styled.button`
  border: 0;
  border-radius: ${rem(5)};
  background: ${primary};
  ${font(rem(16), 1.5, white, groldBold)};
  padding: ${rem(7)} ${rem(15)};
  margin-right: ${rem(20)};
  cursor: pointer;
  ${md(`
    margin-right: ${rem(10)};
    font-size: ${rem(13)};
    padding: ${rem(6)} ${rem(10)};
  `)}
  ${sm(`
    display: none;
  `)}
`;
