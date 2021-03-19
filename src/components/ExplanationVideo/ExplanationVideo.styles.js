import styled from "styled-components";
import {
  rem,
  dblack,
  font,
  groldBold,
  groldSLight,
  primary,
  white,
  SiteTransition,
  xl,
  lg,
  md,
  sm,
} from "../../config/variables";
import { images } from "../../config/images";

export const ExplanationVideoStyle = styled.div`
  width: 100%;
  margin-bottom: ${rem(50)};
`;

export const ExplainVideoBlock = styled.div`
  width: 100%;
  background: ${primary};
  border-radius: ${rem(20)};
  padding: ${rem(40)} ${rem(70)};
  display: flex;
  ${lg(`
    padding: ${rem(40)} ${rem(50)};   
  `)}
  ${md(`
    padding: ${rem(20)} ${rem(25)};   
  `)}
  ${sm(`
    flex-direction: column;
    padding: ${rem(20)} ${rem(15)} ${rem(30)};
    border-radius: ${rem(15)};   
  `)}
`;

export const ExplainVideoContent = styled.div`
  width: 50%;
  padding-right: ${rem(60)};
  ${md(`
    width: 48%;
    padding-right: ${rem(34)};
  `)}
  ${sm(`
    width: 100%;
    padding-right: ${rem(0)};
  `)}
`;

export const HeaingSign = styled.div`
  width: ${rem(50)};
  height: ${rem(42)};
  background: url(${images.ExplainIcon}) no-repeat;
  display: block;
  margin-bottom: ${rem(8)};
  ${md(`
    width: ${rem(25)};
    height: ${rem(23)};
    background-size: ${rem(25)};
    margin-top: ${rem(20)};
  `)}
  ${sm(`
    margin-top: ${rem(0)};
  `)}
`;

export const H3 = styled.h3`
  ${font(rem(36), rem(40), dblack, groldBold)};
  margin-bottom: ${rem(21)};
  ${xl(`
    font-size: ${rem(32)};
    line-height: ${rem(36)};    
  `)}
  ${lg(`
    font-size: ${rem(28)};
    line-height: ${rem(32)};  
    margin-bottom: ${rem(18)};  
  `)}
  ${md(`
    font-size: ${rem(22)};
    line-height: ${rem(26)};  
    margin-bottom: ${rem(8)};  
  `)}
  ${sm(`
    font-size: ${rem(18)};
    line-height: ${rem(22)}; 
  `)}
`;

export const P = styled.p`
  ${font(rem(24), rem(32), dblack, groldSLight)};
  ${xl(`
    font-size: ${rem(21)};
    line-height: ${rem(27)};    
  `)}
  ${lg(`
    font-size: ${rem(18)};
    line-height: ${rem(24)};    
  `)}
  ${md(`
    font-size: ${rem(16)};
    line-height: ${rem(22)};    
  `)}
  ${sm(`
    font-size: ${rem(14)};
    line-height: ${rem(20)}; 
  `)}
`;

export const ExplainVideo = styled.div`
  width: 50%;
  position: relative;
  ${md(`
    width: 52%;
  `)}
  ${sm(`
    width: 100%;
  `)}
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: ${rem(10)};
    left: ${rem(10)};
    border-radius: ${rem(20)};
    border: ${rem(3)} solid ${white};
    opacity: 0.9;
    z-index: 0;
    ${sm(`
      border-width: ${rem(2)};
      top: ${rem(5)};
      left: ${rem(5)};
      border-radius: ${rem(15)};
    `)}
  }
`;

export const PlayButton = styled.div`
  width: ${rem(62)};
  height: ${rem(62)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  cursor: pointer;
  transition: ${SiteTransition};
  border: ${rem(6)} solid ${white};
  border-radius: 50%;
  ${md(`
    width: ${rem(40)};
    height: ${rem(40)}; 
    border-width: ${rem(3)}
  `)}
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: ${rem(28)};
    border-style: solid;
    border-width: ${rem(14)} 0 ${rem(14)} ${rem(19)};
    border-color: transparent transparent transparent ${white};
    transition: ${SiteTransition};
    ${md(`
      height: ${rem(15)};
      border-style: solid;
      border-width: ${rem(7)} 0 ${rem(7)} ${rem(9)};
    `)}
  }
  &.pause {
    opacity: 0;
    pointer-events: none;
    &:after {
      border-style: double;
      border-width: 0px 0 0px ${rem(19)};
    }
  }
`;

export const VideoBlock = styled.div`
  border-radius: ${rem(20)};
  width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 1;
  height: 100%;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1;
  }
  &:hover {
    ${PlayButton} {
      &.pause {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  display: block;
`;
