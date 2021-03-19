import styled from "styled-components";
import {
  rem,
  white,
  secondary,
  groldMedium,
  groldRegular,
  font,
  lGrey,
  grey,
  dblack,
  lPink,
  xl,
  lg,
  md,
  sm,
  xs,
} from "../../config/variables";

export const StepperStyle = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${rem(105)});
  ${xl(`
    height: calc(100vh - ${rem(92)});
  `)}
  .Stepper-tabs {
    display: flex;
    border-radius: ${rem(8)};
    ${sm(`
      padding: 0 ${rem(15)};
    `)}
    &-single {
      padding: ${rem(14)} ${rem(40)} ${rem(14)} ${rem(70)};
      max-width: calc(33.33% - 15px);
      width: 100%;
      height: ${rem(87)};
      background: ${lGrey};
      align-items: center;
      display: flex;
      justify-content: center;
      position: relative;
      transition: 0.2s ease-in-out;
      ${xl(`
        padding: ${rem(12)} ${rem(30)} ${rem(12)} ${rem(60)};
        height: ${rem(75)};
      `)}
      ${lg(`
        padding: ${rem(14)} ${rem(0)} ${rem(14)} ${rem(46)};
      `)}
      ${md(`
        padding: ${rem(12)} ${rem(0)} ${rem(12)} ${rem(35)};
        height: ${rem(75)};
      `)}
      ${sm(`
        flex: 0 0 ${rem(85)};
        max-width: initial;
        height: ${rem(55)};
        transition: inherit;
      `)}
      ${xs(`
        flex: 0 0 ${rem(65)};
        padding: ${rem(12)} ${rem(0)} ${rem(12)} ${rem(20)};
      `)}
      &:first-child {
        border-top-left-radius: ${rem(8)};
        border-bottom-left-radius: ${rem(8)};
      }
      &:before {
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: ${rem(43.5)} 0 ${rem(43.5)} ${rem(30)};
        border-color: transparent transparent transparent ${lGrey};
        position: absolute;
        z-index: 2;
        top: 0;
        right: -30px;
        transition: 0.2s ease-in-out;
        ${xl(`
          border-width: ${rem(37.5)} 0 ${rem(37.5)} ${rem(20)};
          right: ${rem(-17.5)};
        `)}
        ${md(`
          border-width: ${rem(37.5)} 0 ${rem(37.5)} ${rem(20)};
          right: ${rem(-17.5)};
        `)}
        ${sm(`
          border-width: ${rem(27.5)} 0 ${rem(27.5)} ${rem(15)};
          right: ${rem(-14)};
          transition: inherit;
        `)}
      }
      &:after {
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: ${rem(45.24)} 0 ${rem(45.24)} ${rem(31.2)};
        border-color: transparent transparent transparent ${white};
        position: absolute;
        z-index: 1;
        top: ${rem(-1.5)};
        right: ${rem(-32)};
        transition: 0.2s ease-in-out;
        ${xl(`
          border-width: ${rem(42)} 0 ${rem(42)} ${rem(21.5)};
          top: ${rem(-4.5)};
          right: ${rem(-19)};
        `)}
        ${md(`
          border-width: ${rem(42)} 0 ${rem(42)} ${rem(21.5)};
          top: ${rem(-4.5)};
          right: ${rem(-19)};
        `)}
        ${sm(`
          border-width: ${rem(29)} 0 ${rem(29)} ${rem(16)};
          top: ${rem(-1.7)};
          right: ${rem(-16)};
          transition: inherit;
        `)}
      }
      &.active,
      &.fill {
        background: ${secondary};
        cursor: pointer;
        &:before {
          border-color: transparent transparent transparent ${secondary};
        }
        .count {
          background: ${lPink};
          color: ${dblack};
        }
      }
      .count {
        width: ${rem(56)};
        height: ${rem(56)};
        ${font(rem(42), rem(42), white, groldMedium)};
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${secondary};
        border-radius: 50%;
        margin-right: ${rem(14)};
        transition: 0.2s ease-in-out;
        ${xl(`
          width: ${rem(50)};
          height: ${rem(50)};
          font-size: ${rem(38)};
          line-height: ${rem(38)};
        `)}
        ${lg(`
          width: ${rem(45)};
          height: ${rem(45)};
          font-size: ${rem(32)};
          line-height: ${rem(32)};
        `)}
        ${md(`
          width: ${rem(40)};
          height: ${rem(40)};
          font-size: ${rem(30)};
          line-height: ${rem(30)};
        `)}
        ${md(`
          width: ${rem(34)};
          height: ${rem(34)};
          font-size: ${rem(24)};
          line-height: ${rem(28)};
        `)}
        ${sm(`
          transition: inherit;
        `)}
        ${xs(`
          margin-right: ${rem(5)};
        `)}
      }
      .content-blk {
        flex: 1;
        ${sm(`
          opacity: 0;
          visibility: hidden;
          width: 0;
        `)}
        h6 {
          ${font(rem(22), rem(20), "#434343", groldMedium)};
          margin: 0;
          ${xl(`
            font-size: ${rem(18)};
            line-height: ${rem(18)};
          `)}
          ${lg(`
            font-size: ${rem(18)};
            line-height: ${rem(18)};
          `)}
          ${md(`
            font-size: ${rem(16)};
            line-height: ${rem(16)};
          `)}
          ${xs(`
            font-size: ${rem(14)};
            line-height: ${rem(11)};
          `)}
        }
        p {
          ${font(rem(16), rem(16), grey, groldRegular)};
          text-transform: uppercase;
          margin: 0;
          ${xl(`
            font-size: ${rem(14)};
            line-height: ${rem(14)};
          `)}
          ${lg(`
            font-size: ${rem(14)};
            line-height: ${rem(14)};
          `)}
          ${md(`
            font-size: ${rem(14)};
            line-height: ${rem(14)};
          `)}
          ${xs(`
            font-size: ${rem(8)};
            line-height: ${rem(8)};
          `)}
        }
      }
      &.active {
        ${sm(`
          flex: 0 0 calc(100% - ${rem(200)});
        `)}
        ${xs(`
          flex: 0 0 calc(100% - ${rem(130)});
        `)}
        .content-blk {
          ${sm(`
            opacity: 1;
            visibility: visible;
            width: auto;
          `)}
        }
      }
    }
  }
  .Stepper-content {
    padding: ${rem(15)} 0 0;
    flex: 1;
    height: calc(100% - ${rem(87)});
    &-single {
      display: none;
      height: 100%;
      &.active {
        display: block;
      }
    }
  }
`;
