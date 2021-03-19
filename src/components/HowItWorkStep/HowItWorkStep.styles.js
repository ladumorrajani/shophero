import styled from "styled-components";
import {
  dblack,
  font,
  groldBold,
  groldMedium,
  groldSLight,
  lg,
  md,
  primary,
  rem,
  secondary,
  sm,
  white,
  xl,
} from "../../config/variables";

export const HowItWorksStepStyle = styled.div`
  display: block;
  padding: ${rem(52)} 0 ${rem(84)};
  ${lg(`
    padding: ${rem(52)} 0 ${rem(50)};
  `)}
  ${md(`
    padding: ${rem(52)} 0 ${rem(20)};
  `)}
  ${sm(`
    padding: ${rem(31)} 0 ${rem(0)};
  `)}
`;

export const H1 = styled.h1`
  ${font(rem(36), rem(40), dblack, groldBold)};
  margin-bottom: ${rem(15)};
  text-align: center;
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

export const StepList = styled.div`
  width: 100%;
  ${md(`
    max-width: ${rem(738)};
    margin: 0 auto;
  `)}
  ${sm(`
    max-width: 100%;
    margin: 0 auto;
  `)}
`;

export const StepImg = styled.figure`
  max-width: ${rem(693)};
  width: 100%;
  z-index: 1;
  position: relative;
  ${md(`
    max-width: ${rem(370)};
  `)}
  ${sm(`
    max-width: ${rem(370)};
    margin-bottom: ${rem(13)};
  `)}
  &:after {
    content: "";
    position: absolute;
    width: ${rem(6)};
    height: ${rem(300)};
    background: ${primary};
    right: ${rem(-97)};
    bottom: ${rem(-222)};
    transform: rotate(-45deg);
    ${lg(`
      right: ${rem(-94)};
    `)}
    ${md(`
      width: ${rem(3.5)};
      height: ${rem(200)};
      right: ${rem(-65)};
      bottom: ${rem(-150)};
    `)}
    ${sm(`
      display: none;
    `)}
  }
`;

export const StepContent = styled.div`
  max-width: ${rem(720)};
  width: 100%;
  background: ${primary};
  padding: ${rem(27)} ${rem(47)} ${rem(30)} ${rem(150)};
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  border-radius: ${rem(30)};
  margin-left: ${rem(-280)};
  z-index: 0;
  ${lg(`
    padding: ${rem(27)} ${rem(47)} ${rem(30)} ${rem(180)};
  `)}
  ${md(`
    padding: ${rem(17)} ${rem(40)} ${rem(25)} ${rem(130)};
    border-radius: ${rem(15)};
    max-width: ${rem(600)};
    margin-left: ${rem(-200)};
  `)}
  ${sm(`
    padding: ${rem(15)};
    border-radius: ${rem(10)};
    max-width: ${rem(500)};
    margin-left: ${rem(0)};
  `)}
`;

export const StepInfo = styled.div`
  margin-left: ${rem(23)};
  flex: 1;
  ${sm(`
    margin-left: ${rem(10)};
  `)}
`;

export const StepSingleBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${rem(58)};
  ${lg(`
    padding: 0 ${rem(50)};
  `)}
  ${md(`
    margin-bottom: ${rem(33)};
  `)}
  ${sm(`
    flex-direction: column;
  `)}
  &:nth-child(2n) {
    flex-direction: row-reverse;
    ${sm(`
      flex-direction: column;
    `)}
    ${StepContent} {
      margin-left: 0;
      margin-right: ${rem(-280)};
      padding: ${rem(27)} ${rem(150)} ${rem(30)} ${rem(47)};
      flex-direction: row-reverse;
      text-align: right;
      justify-content: flex-end;
      ${md(`
        padding: ${rem(17)} ${rem(130)} ${rem(25)} ${rem(40)};
        border-radius: ${rem(15)};
        margin-right: ${rem(-200)};
      `)}
      ${sm(`
        padding: ${rem(15)};
        border-radius: ${rem(10)};
        margin-right: ${rem(0)};
        text-align: left;
        flex-direction: row;
        justify-content: flex-start;
      `)}
    }
    ${StepInfo} {
      margin-right: ${rem(23)};
      margin-left: 0;
      ${sm(`
        margin-left: ${rem(10)};
        margin-right: 0;
      `)}
    }
    ${StepImg} {
      &:after {
        right: 0;
        left: ${rem(-97)};
        bottom: ${rem(-222)};
        transform: rotate(45deg);
        ${lg(`
          left: ${rem(-94)};
        `)}
        ${md(`
          left: ${rem(-58.5)};
          bottom: ${rem(-143)};
          transform: rotate(44deg);
        `)}
      }
    }
  }
  &:last-child {
    ${StepImg} {
      &:after {
        display: none;
      }
    }
  }
`;

export const StepCount = styled.div`
  width: ${rem(65)};
  height: ${rem(65)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${secondary};
  ${font(rem(36), rem(48), white, groldMedium)};
  ${lg(`
    width: ${rem(55)};
    height: ${rem(55)};
    font-size: ${rem(32)};
    line-height: ${rem(42)};    
  `)}
  ${lg(`
    width: ${rem(50)};
    height: ${rem(50)};
    font-size: ${rem(32)};
    line-height: ${rem(42)};    
  `)}
  ${md(`
    width: ${rem(40)};
    height: ${rem(40)};
    font-size: ${rem(26)};
    line-height: ${rem(36)};   
  `)}
  ${sm(`
    width: ${rem(32)};
    height: ${rem(32)};
    font-size: ${rem(18)};
    line-height: ${rem(26)};   
  `)}
`;

export const Title = styled.h3`
  ${font(rem(32), rem(40), dblack, groldBold)};
  margin-bottom: ${rem(5)};
  ${xl(`
    font-size: ${rem(28)};
    line-height: ${rem(32)};    
  `)}
  ${lg(`
    font-size: ${rem(22)};
    line-height: ${rem(30)};    
  `)}
  ${md(`
    font-size: ${rem(18)};
    line-height: ${rem(24)};    
  `)}
  ${sm(`
    font-size: ${rem(16)};
    line-height: ${rem(20)}; 
  `)}
`;

export const Content = styled.p`
  ${font(rem(22), rem(28), dblack, groldSLight)};
  margin: 0;
  ${xl(`
    font-size: ${rem(18)};
    line-height: ${rem(24)};    
  `)}
  ${lg(`
    font-size: ${rem(16)};
    line-height: ${rem(22)};    
  `)}
  ${md(`
    font-size: ${rem(14)};
    line-height: ${rem(18)};    
  `)}
`;
