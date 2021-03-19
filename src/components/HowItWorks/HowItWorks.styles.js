import styled from "styled-components";
import { lg, md, rem, sm, xl, xs } from "../../config/variables";
import HowItWorkCard from "../HowItWorkCard/HowItWorkCard";

export const HowItWorksStyle = styled.div`
  width: 100%;
  padding: ${rem(35)} 0 ${rem(85)};
  position: relative;
  text-align: center;
  ${md(`
    padding: ${rem(25)} 0 ${rem(40)};
  `)}
  h2 {
    ${sm(`
      margin-bottom: 0;  
    `)}
  }
`;

export const WorkFlow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${rem(200)};
  ${xl(`
    margin-bottom: ${rem(100)};
  `)}
  ${lg(`
    margin-bottom: ${rem(80)};
  `)}
  ${md(`
    margin-bottom: ${rem(80)};
  `)}
  ${sm(`
    flex-wrap: wrap;
    margin-bottom: ${rem(40)};  
  `)}
`;

export const HowItWorkCardStyle = styled(HowItWorkCard)`
  margin: 0 ${rem(17.5)};
  ${lg(`
    margin: 0 ${rem(10)};
  `)}
  ${md(`
    margin: 0 ${rem(10)};
  `)}
  ${sm(`
    max-width: calc(50% - ${rem(20)});
    margin: 0 ${rem(10)};
    margin-bottom: ${rem(40)};
  `)}
  ${xs(`
    max-width: ${rem(350)};
    margin: 0;
    margin-bottom: ${rem(40)};
  `)}
`;
