import styled, { keyframes } from "styled-components";
import { images } from "../../config/images";
import {
  dblack,
  lg,
  md,
  rem,
  SiteTransition,
  sm,
  white,
  xl,
  xs,
} from "../../config/variables";

// const Pulse = keyframes`
//   0% {
// 		transform: scale(0);
// 		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
// 	}

// 	33.33% {
// 		transform: scale(0.6);
// 		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
// 	}

//   66.66% {
// 		transform: scale(1.2);
// 		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
// 	}

// 	100% {
// 		transform: scale(1);
// 		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
// 	}
// `;

const RubberBand = keyframes`
  0% { 
    transform: scale(1, 1); 
  } 
  25% { 
      transform: scale(1.3, 0.6); 
  } 

  50% { 
      transform: scale(1.1, 0.9); 
  } 
  100% { 
      transform: scale(1, 1); 
  } 
`;

export const Webshops = styled.div`
  width: 100%;
  padding: ${rem(35)} 0 ${rem(200)};
  position: relative;
  ${xl(`
    padding: ${rem(35)} 0 ${rem(160)};
  `)}
  ${lg(`
    padding: ${rem(35)} 0 ${rem(100)};
  `)}
  ${md(`
    padding: ${rem(35)} 0 ${rem(50)};
  `)}
  ${sm(`
    padding: ${rem(30)} 0 ${rem(20)};
  `)}
  ${xs(`
    padding: ${rem(0)} 0 ${rem(20)};
  `)}
  &:after {
    content: "";
    width: 100%;
    height: ${rem(1888)};
    background: url(${images.BannerShape}) center no-repeat;
    position: absolute;
    bottom: ${rem(-702)};
    left: 0;
    z-index: -1;
    background-size: contain;
    ${xl(`
      height: ${rem(1440)};
      bottom: ${rem(-446)};
    `)}
    ${lg(`
      height: ${rem(1440)};
      bottom: ${rem(-440)};
    `)}
    ${md(`
      height: ${rem(960)};
      bottom: ${rem(-266)};
    `)}
    ${sm(`
      height: ${rem(864)};
      bottom: ${rem(-122)};
    `)}
    ${xs(`
      height: ${rem(688)};
      bottom: 0;
    `)}
  }
`;

export const WebshopsWrapper = styled.div`
  display: flex;
  ${lg(`
    flex-direction: column;
  `)}
  ${md(`
    flex-direction: column;
  `)}
`;

export const H2 = styled.h2`
  color: ${white};
  margin-right: ${rem(70)};
  max-width: ${rem(242)};
  ${lg(`
    margin-right: ${rem(0)};
    max-width: 100%;
  `)}
  ${md(`
    margin-right: ${rem(0)};
    max-width: 100%;
  `)}
  ${xs(`
    color: ${dblack};
    text-align: center;
    margin-bottom: ${rem(18)};
  `)}
`;

export const WebshopList = styled.div`
  flex: 1;
  ${sm(`
    margin-bottom: ${rem(21)};
  `)}
`;

export const Card = styled.div`
  width: 100%;
  max-width: calc(25% - ${rem(16)});
  margin: 0 ${rem(8)};
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
  position: relative;
  ${md(`
    max-width: calc(33.33% - ${rem(14)});
    margin: 0 ${rem(7)};
    padding: ${rem(20)};
    height: ${rem(100)};
    border-radius: ${rem(13)};
  `)}
  ${sm(`
    max-width: calc(33.33% - ${rem(10)});
    margin: 0 ${rem(5)};
    height: ${rem(80)};
    margin-bottom: ${rem(10)};
  `)}
  ${xs(`
    max-width: calc(50% - ${rem(10)});
    margin: 0 ${rem(5)};
    margin-bottom: ${rem(10)};
  `)}
  &:hover {
    box-shadow: 2px 2px 10px #0000000d;
  }
  &.invisible {
    opacity: 0;
    ${sm(`
      display: none;
    `)}
  }
`;

export const WenShopRow = styled.div`
  display: flex;
  margin: 0 ${rem(-8)};
  margin-bottom: ${rem(30)};
  ${md(`
    margin: 0 ${rem(-7)};
    margin-bottom: ${rem(21)};
  `)}
  ${sm(`
    margin: 0 ${rem(-5)};
    margin-bottom: ${rem(15)};
    flex-wrap: wrap;
    margin-bottom: ${rem(0)};
  `)}
  ${xs(`
    margin: 0 ${rem(-4)};
  `)}
  &:nth-child(2) {
    justify-content: flex-end;
    ${xs(`
      margin-top: ${rem(-90)};
    `)}
    ${Card} {
      &:first-child {
        ${xs(`
          margin-left: 50%;
        `)}
      }
    }
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: ${rem(20)};
`;

export const Img = styled.img`
  display: block;
  max-height: 100%;
  opacity: 0;
  &.active {
    opacity: 1;
    animation: ${RubberBand} 0.5s ease-in-out;
  }
`;

export const ViewAll = styled.div`
  text-align: center;
`;
