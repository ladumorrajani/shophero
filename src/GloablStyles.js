import { createGlobalStyle } from "styled-components";
import { FooterWrap } from "./components/Footer/Footer.styles";
import {
  dblack,
  groldSLight,
  customScroll,
  primary,
  groldBold,
  rem,
  font,
  grey,
  groldMedium,
  lPink,
  secondary,
  SiteTransition,
  xl,
  lg,
  md,
  sm,
} from "./config/variables";
import { images } from "./config/images";

export const GlobalStyles = createGlobalStyle` 
  /*----------Default-CSS--------------*/
  body {
    ${font(rem(16), rem(20), dblack, groldSLight)};
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    ${customScroll};
  }
  body.over-hidden{
    overflow: hidden;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:after, *:before{
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
    margin-bottom: ${rem(20)};
    text-transform: uppercase;
  }

  h1{
    ${font(rem(72), rem(80), primary, groldBold)};
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
      line-height: ${rem(50)};
    `)}
  }

  h2{
    ${font(rem(50), rem(60), primary, groldBold)};
    ${xl(`
      font-size: ${rem(44)};
      line-height: ${rem(54)};
    `)}
    ${lg(`
      font-size: ${rem(38)};
      line-height: ${rem(48)};
    `)}
    ${md(`
      font-size: ${rem(32)};
      line-height: ${rem(40)};
    `)}
    ${sm(`
      font-size: ${rem(28)};
      line-height: ${rem(34)};
    `)}
  }

  h3{
    ${font(rem(36), rem(40), grey, groldBold)};
    ${xl(`
      font-size: ${rem(32)};
      line-height: ${rem(36)};
    `)}
    ${lg(`
      font-size: ${rem(28)};
      line-height: ${rem(32)};
    `)}
    ${md(`
      font-size: ${rem(24)};
      line-height: ${rem(28)};
    `)}
  }

  h4{
    ${font(rem(30), rem(34), grey, groldBold)};
    ${xl(`
      font-size: ${rem(28)};
      line-height: ${rem(32)};
    `)}
    ${lg(`
      font-size: ${rem(24)};
      line-height: ${rem(28)};
    `)}
    ${md(`
      font-size: ${rem(20)};
      line-height: ${rem(24)};
    `)}
  }

  h5{
    ${font(rem(24), rem(30), grey, groldBold)};
    ${xl(`
      font-size: ${rem(22)};
      line-height: ${rem(28)};
    `)}
    ${lg(`
      font-size: ${rem(20)};
      line-height: ${rem(26)};
    `)}
    ${md(`
      font-size: ${rem(18)};
      line-height: ${rem(22)};
    `)}
  }

  h6{
    ${font(rem(22), rem(26), grey, groldMedium)};
    ${xl(`
      font-size: ${rem(20)};
      line-height: ${rem(24)};
    `)}
    ${lg(`
      font-size: ${rem(18)};
      line-height: ${rem(22)};
    `)}
    ${md(`
      font-size: ${rem(16)};
      line-height: ${rem(20)};
    `)}
  }

  p {
    margin-bottom: ${rem(20)};
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
  
  .container {
    max-width: ${rem(1440)};
    margin: 0 auto;
    padding: 0 ${rem(20)};
    width: 100%;
    ${md(`
      padding: 0 ${rem(15)};
    `)}
  }

  .content-area{
    &.about-page{          
      background: ${lPink};
    }
    &.faq-page{          
      background: ${lPink};
    }
    &.register-ngo-page{      
      background: ${lPink};
    }
    &.contact-page{      
      background: ${lPink};
    }
    &.ngo-page{
      .bottom-scrollbar{
        display: none;
      }
    }
    &.how-it-work-page{     
      background: ${lPink};
      ${FooterWrap}{
        &:before{
          display: none;
        }
      }
    }
    &.shape-bg{
      position: relative;
      &.faq-page, &.contact-page{
        &:after{
          background-position: center 430px;
        }
      }
      &.about-page{
        &:after{
        opacity: 0.1;
          background-position: center 300px;
        }
      }
      .main-page{
        position: relative;
        z-index: 1;
      }
      &:after{
        content: "";
        width: 100%;
        height: 100%;
        background: url(${images.fullPageShape}) no-repeat;
        position: absolute;
        top: 0;
        left: 0;
        background-size: 100%;
        background-position: center 120px;
        z-index: 0;
      }
      footer:before{
        display:none;
      }
    }
  }

  .pagination{
    display:flex;
    justify-content: center;
    align-items: center;
    li{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 ${rem(8)};
      a{
        ${font(rem(20), rem(23), dblack, groldMedium)};
        padding: ${rem(9)} ${rem(17)};
        border-radius: ${rem(8)};
        cursor: pointer;
        transition: ${SiteTransition};
        background: transparent;  
        ${sm(`    
          font-size: ${rem(17)};
          line-height: ${rem(20)};
          padding: ${rem(8)} ${rem(15)};
        `)}      
      }
      &.pagination__link--active{
        a{
            background-color: ${secondary};
          }
        }
        &.previous{
          a{              
            width: ${rem(21.8)};
            height: ${rem(24)};
            background: url(${images.SliderDots}) no-repeat;
            background-size: ${rem(21.8)};
            font-size: 0;
            padding: 0;
            transform: rotate(180deg); 
            ${sm(`    
              width: ${rem(20)};
              height: ${rem(24)};
              background-size: ${rem(20)};
            `)}         
          }
        }
        &.next{
          a{
            width: ${rem(21.8)};
            height: ${rem(24)};
            background: url(${images.SliderDots}) no-repeat;
            background-size: ${rem(21.8)};
            font-size: 0;
            padding: 0;
            ${sm(`    
              width: ${rem(20)};
              height: ${rem(24)};
              background-size: ${rem(20)};
            `)}
          }
        }
    }
  }
`;
