import styled from "styled-components";
import { md, rem, SiteTransition, white } from "../../config/variables";

export const Card = styled.div`
  max-width: ${rem(260)};
  width: 100%;
  box-shadow: 0 0 ${rem(10)} #0000001a;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${rem(120)};
  border-radius: ${rem(20)};
  overflow: hidden;
  padding: ${rem(10)};
  transition: ${SiteTransition};
  background: ${white};
  ${md(`
    padding: ${rem(16)};
    height: ${rem(81)};
    border-radius: ${rem(13)};
  `)}
  &:hover {
    box-shadow: 2px 2px 10px #0000000d;
  }
`;

export const Img = styled.img`
  display: block;
  max-height: 100%;
`;
