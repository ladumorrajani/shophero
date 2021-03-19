import styled from "styled-components";
import { rem, dgrey, xl, lg, md, sm } from "../../config/variables";

export const StartProgress = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  height: -webkit-fill-available;
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    ${sm(`
      padding: 0;
    `)}
  }
`;

export const StepperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${rem(25)} 0;
  ${xl(`
    padding: ${rem(20)} 0;
  `)}
  ${lg(`
    padding: ${rem(18)} 0;
  `)}
  ${md(`
    padding: ${rem(16)} 0;
  `)}
  ${sm(`
    padding: ${rem(15)};
  `)}
`;

export const Logo = styled.div`
  max-width: ${rem(256)};
  width: 100%;
  ${xl(`
    max-width: ${rem(240)};
  `)}
  ${lg(`
    max-width: ${rem(220)};
  `)}
  ${md(`
    max-width: ${rem(200)};
  `)}
  ${sm(`
    max-width: ${rem(130)};
  `)}
`;

export const IconClose = styled.div`
  width: ${rem(40)};
  height: ${rem(40)};
  border-radius: 50%;
  background: ${dgrey};
  position: relative;
  cursor: pointer;
  ${sm(`
    width: ${rem(24)};
    height: ${rem(24)};
  `)}
  &:after,
  &:before {
    content: "";
    position: absolute;
    width: ${rem(3)};
    background: #5d5d5d;
    height: ${rem(17)};
    transform: translate(-50%, -50%) rotate(45deg);
    top: 50%;
    left: 50%;
    border-radius: ${rem(3)};
    ${sm(`
      width: ${rem(2)};
      height: ${rem(10)};
  `)}
  }
  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;
