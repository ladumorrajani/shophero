import styled from "styled-components";
import {
  font,
  groldBold,
  primary,
  rem,
  grey,
  secondary,
  xl,
  lg,
  md,
  sm,
  xs,
} from "../../config/variables";

export const CompanyInfoSectionStyle = styled.div`
  margin-bottom: ${rem(70)};
  ${xs(`
    margin-bottom: ${rem(20)};
  `)}
`;

export const InfoPart = styled.div`
  display: flex;
  justify-content: center;
  ${sm(`
    flex-direction: column;
    align-items: center;
  `)}
`;

export const InfoImage = styled.div`
  max-width: 50%;
  width: 100%;
  text-align: center;
  ${xl(`
    max-width: 45%;
  `)}
  ${lg(`
    max-width: 45%;
  `)}
  ${md(`
    max-width: 45%;
  `)}
  ${sm(`
    max-width: 50%;
  `)}
  ${xs(`
    max-width: ${rem(350)};
  `)}
`;

export const InfoContent = styled.div`
  max-width: 50%;
  width: 100%;
  padding-top: ${rem(60)};
  padding-left: ${rem(50)};
  ${xl(`
    max-width: 52%;
  `)}
  ${lg(`
    max-width: 52%;
    padding-top: ${rem(40)};
  `)}
  ${md(`
    max-width: 52%;
    padding-top: ${rem(20)};
  `)}
  ${sm(`
    max-width: ${rem(350)};
    padding-left: 0;
  `)}
`;

export const Title = styled.div`
  ${font(rem(72), rem(80), secondary, groldBold)};
  ${xl(`
    font-size: ${rem(65)};
    line-height: ${rem(72)};
  `)}
  ${lg(`
    font-size: ${rem(55)};
    line-height: ${rem(62)};
  `)}
  ${md(`
    font-size: ${rem(42)};
    line-height: ${rem(42)};
  `)}
`;

export const H4 = styled.h4`
  margin: 0;
  color: ${secondary};
  ${md(`
    font-size: ${rem(17)};
    line-height: ${rem(20)};
  `)}
`;

export const InfoCard = styled.div`
  margin-bottom: ${rem(74)};
  display: flex;
  align-items: flex-end;
  ${xl(`
    margin-bottom: ${rem(60)};
  `)}
  ${lg(`
    margin-bottom: ${rem(40)};
  `)}
  ${md(`
    margin-bottom: ${rem(40)};
  `)}
  &:nth-child(2) {
    ${Title} {
      color: ${primary};
    }
    ${H4} {
      color: ${primary};
    }
  }
  &:nth-child(3) {
    ${Title} {
      color: ${grey};
    }
    ${H4} {
      color: ${grey};
    }
  }
`;

export const InfoCardImg = styled.div`
  max-width: ${rem(137)};
  margin-right: ${rem(40)};
  ${xl(`
    max-width: ${rem(100)};
    margin-right: ${rem(30)};
  `)}
  ${lg(`
    max-width: ${rem(70)};
    margin-right: ${rem(20)};
  `)}
  ${md(`
    max-width: ${rem(70)};
    margin-right: ${rem(20)};
  `)}
`;

export const InfoCardTxt = styled.div`
  flex: 1;
`;
