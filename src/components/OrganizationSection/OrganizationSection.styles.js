import styled from "styled-components";
import { grey, rem, lPink, xl, lg, md, sm, xs } from "../../config/variables";
import BrandCard from "../BrandCard/BrandCard";
import Button from "../Button/Button";
import { images } from "../../config/images";

export const Organization = styled.div`
  width: 100%;
  padding: ${rem(55)} 0 ${rem(48)};
  background: ${lPink};
  position: relative;
  ${md(`
    padding: ${rem(38)} 0 ${rem(30)};
  `)}
  ${sm(`
    padding: ${rem(25)} 0 ${rem(100)};
    position: relative;
  `)}
  &:before {
    content: "";
    position: absolute;
    top: ${rem(-88)};
    left: 0;
    background: url(${images.triangleShape}) no-repeat;
    width: ${rem(1260)};
    height: ${rem(90)};
    ${xl(`
      width: 70%;
      background-size: cover;
      height: ${rem(65)};
      top: ${rem(-60)};
    `)}
    ${lg(`
      width: 70%;
      background-size: cover;
      height: ${rem(48)};
      top: ${rem(-46)};
    `)}
    ${md(`
      width: 70%;
      background-size: cover;
      height: ${rem(40)};
      top: ${rem(-39)};
    `)}
    ${sm(`
      width: 70%;
      background-size: cover;
      height: ${rem(29)};
      top: ${rem(-28)};
    `)}
    ${xs(`
      width: 100%;
      background-size: cover;
      height: ${rem(27)};
      top: ${rem(-26)};
    `)}
  }
  &:after {
    content: "";
    position: absolute;
    bottom: ${rem(-88)};
    right: 0;
    background: url(${images.triangleShape}) no-repeat;
    width: ${rem(1260)};
    height: ${rem(90)};
    transform: rotate(180deg);
    ${xl(`
      width: 70%;
      background-size: cover;
      height: ${rem(65)};
      bottom: ${rem(-60)};
    `)}
    ${lg(`
      width: 70%;
      background-size: cover;
      height: ${rem(48)};
      bottom: ${rem(-46)};
    `)}
    ${md(`
      width: 70%;
      background-size: cover;
      height: ${rem(40)};
      bottom: ${rem(-39)};
    `)}
    ${sm(`
      width: 70%;
      background-size: cover;
      height: ${rem(29)};
      bottom: ${rem(-28)};
    `)}
    ${xs(`
      width: 100%;
      background-size: cover;
      height: ${rem(27)};
      bottom: ${rem(-26)};
    `)}
  }
`;

export const OrganizationHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: ${rem(26)};
  ${md(`
    margin-bottom: ${rem(24)};
  `)}
`;

export const H2 = styled.h2`
  max-width: ${rem(812)};
  color: ${grey};
  line-height: 1;
  margin: 0;
  ${md(`
    max-width: 70%;
  `)}
  ${sm(`
    max-width: 100%;
    text-align: center;
  `)}
`;

export const OrgButton = styled(Button)`
  margin-bottom: ${rem(10)};
  white-space: nowrap;
  ${sm(`
    position: absolute;
    bottom: ${rem(30)};
    left: 50%;
    transform: translateX(-50%);
  `)}
`;

export const OrganizationList = styled.div`
  display: flex;
  margin: 0 ${rem(-12.5)};
  margin-bottom: ${rem(30)};
  justify-content: center;
  flex-wrap: wrap;
  ${lg(`
    margin-bottom: 0;
  `)}
  ${md(`
    margin: 0 ${rem(-5)};
    margin-bottom: 0;
  `)}
`;

export const BrandCardStyle = styled(BrandCard)`
  margin: 0 ${rem(12.5)};
  max-width: calc(20% - ${rem(25)});
  margin-bottom: ${rem(25)};
  ${lg(`
    max-width: calc(20% - ${rem(20)});
    margin: 0 ${rem(10)};
    margin-bottom: ${rem(20)};
  `)}
  ${md(`
    max-width: calc(25% - ${rem(10)});
    margin: 0 ${rem(5)};
    margin-bottom: ${rem(12)};
  `)}
  ${sm(`
    max-width: calc(33.33% - ${rem(10)});
    margin: 0 ${rem(5)};
    margin-bottom: ${rem(10)};
  `)}
  ${xs(`
    max-width: calc(50% - ${rem(10)});
    margin: 0 ${rem(5)};
    margin-bottom: ${rem(10)};
  `)}
`;
