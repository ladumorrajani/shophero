import styled from "styled-components";
import {
  font,
  rem,
  dblack,
  groldBold,
  md,
  sm,
  lg,
} from "../../config/variables";

export const RegisterNgoStyle = styled.main`
  width: 100%;
  z-index: 1;
  position: relative;
  padding: ${rem(50)} 0 ${rem(98)};
  ${sm(`
    padding: ${rem(40)} 0 ${rem(60)};
  `)}
`;

export const RegisterFormWrap = styled.div`
  max-width: ${rem(760)};
  width: 100%;
  margin: 0 auto;
`;

export const MainHeading = styled.h1`
  ${font(rem(36), rem(40), dblack, groldBold)};
  margin-bottom: ${rem(30)};
  text-align: center;
  white-space: break-spaces;
  ${lg(`
    font-size: ${rem(32)};
    line-height: ${rem(32)};    
  `)}
  ${md(`
    font-size: ${rem(28)};
    line-height: ${rem(28)};    
  `)}
  ${sm(`
    font-size: ${rem(26)};
    line-height: ${rem(26)};  
  `)}
`;
