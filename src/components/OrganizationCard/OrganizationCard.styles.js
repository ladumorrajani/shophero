import styled from "styled-components";
import {
  groldSLight,
  rem,
  SiteTransition,
  white,
  xlGrey,
  groldMedium,
  xlgrey,
  font,
  xdgrey,
  lGreen,
  green,
  primary,
  secondary,
  groldBold,
  dblack,
  grey,
  customScroll,
  md,
  sm,
  xs,
} from "../../config/variables";
import { images } from "../../config/images";
import Dialog from "@material-ui/core/Dialog";

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${rem(6)} ${rem(15)};
  transition: ${SiteTransition};
  ${md(`
    padding: ${rem(4)} ${rem(10)};
  `)}
`;

export const CardInfo = styled.div`
  width: ${rem(22)};
  height: ${rem(22)};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${rem(1)} solid ${primary};
  border-radius: 50%;
  transition: ${SiteTransition};
  ${md(`
    width: ${rem(18)};
    height: ${rem(18)};
  `)}
`;

export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: calc(100% - ${rem(53)});
  padding: ${rem(10)} ${rem(38)};
  border: ${rem(2)} solid ${white};
  border-radius: ${rem(15)};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transition: ${SiteTransition};
  border-bottom: ${rem(1)} solid ${xlgrey};
  ${md(`
    padding: ${rem(10)} ${rem(28)};
    height: calc(100% - ${rem(40)});
  `)}
`;

export const Name = styled.div`
  ${font(rem(16), rem(21), xlGrey, groldSLight)};
  transition: ${SiteTransition};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  ${md(`
    font-size: ${rem(12)};
    line-height: ${rem(16)};
  `)}
`;

export const Count = styled.div`
  ${font(rem(20), rem(21), xdgrey, groldMedium)};
  transition: ${SiteTransition};
  ${md(`
    font-size: ${rem(14)};
    line-height: ${rem(18)};
  `)}
`;

export const OrganizatioCard = styled.div`
  max-width: ${rem(256)};
  width: 100%;
  height: ${rem(154)};
  border-radius: ${rem(15)};
  overflow: hidden;
  transition: ${SiteTransition};
  background: ${white};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  ${md(`
    height: ${rem(106)};
    border-radius: ${rem(10)};
  `)}
  &:before {
    position: absolute;
    content: "";
    background: url(${images.TickFill});
    width: ${rem(26)};
    height: ${rem(26)};
    opacity: 0;
    transition: ${SiteTransition};
    right: ${rem(12)};
    top: ${rem(12)};
    ${md(`
      width: ${rem(20)};
      background-size: ${rem(20)};
      height: ${rem(20)};
      right: ${rem(7)};
      top: ${rem(7)};
    `)}
  }
  &:hover {
    box-shadow: 2px 2px 10px #0000000d;
    ${CardTitle} {
      background: ${primary};
    }
    ${CardInfo} {
      background: ${white};
      border-color: ${white};
      svg {
        fill: ${primary};
      }
    }
    ${Name} {
      color: ${dblack};
    }
    ${Count} {
      color: ${dblack};
    }
  }
  &.selected {
    background: ${lGreen};
    &:before {
      opacity: 1;
    }
    ${ImgWrap} {
      border-color: ${green};
    }
    ${CardTitle} {
      background: ${green};
    }
    ${CardInfo} {
      background: ${white};
      border-color: ${white};
      svg {
        fill: ${green};
      }
    }
    ${Name} {
      color: ${white};
    }
    ${Count} {
      color: ${white};
    }
  }
`;

export const Img = styled.img`
  display: block;
  max-height: 100%;
`;

export const CardTitleWrap = styled.div`
  flex: 1;
  width: calc(100% - ${rem(40)});
  ${md(`
    width: calc(100% - ${rem(30)});
  `)}
`;

export const DialogStyle = styled(Dialog)`
  .MuiDialog-scrollPaper {
    background: rgba(255, 246, 209, 0.9);
  }
  .MuiDialog-paper {
    border: ${rem(3)} solid ${secondary};
    border-radius: ${rem(26)};
    padding: ${rem(31)};
    max-width: ${rem(800)};
    width: 100%;
    ${customScroll()};
    ${md(`
      padding: ${rem(23)};
      max-width: ${rem(600)};
    `)}
    ${sm(`
      padding: ${rem(22)} ${rem(18)};
      max-width: ${rem(600)};
      border-radius: ${rem(20)};
    `)}
    ${xs(`
      padding: ${rem(15)} ${rem(15)};
      max-width: 100%;
      border-radius: ${rem(15)};
      margin: ${rem(10)};
    `)}
  }
`;

export const DialogHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${rem(18)};
  ${md(`
    margin-bottom: ${rem(13)};
  `)}
`;

export const Logo = styled.div`
  max-width: 100%;
  ${sm(`
    max-width: 50%;
  `)}
`;

export const AmountInfo = styled.div`
  padding-left: ${rem(64)};
  background: url(${images.IconDoller}) left center no-repeat;
  ${md(`
    padding-left: ${rem(58)};
    background-size: ${rem(48)};
  `)}
  ${sm(`
    padding-left: ${rem(49)};
    background-size: ${rem(41)};
  `)}
  ${xs(`
    padding-left: ${rem(35)};
    background-size: ${rem(32)};
  `)}
`;

export const AmountCount = styled.h3`
  ${font(rem(41), rem(44), primary, groldBold)};
  margin: 0;
  ${md(`
    font-size: ${rem(33)};
    line-height: ${rem(37)}
  `)}
  ${sm(`
    font-size: ${rem(27)};
    line-height: ${rem(30)}
  `)}
  ${xs(`
    font-size: ${rem(22)};
    line-height: ${rem(24)}
  `)}
`;

export const AmountNote = styled.p`
  ${font(rem(17), rem(17), primary, groldBold)};
  margin: 0;
  ${md(`
    font-size: ${rem(13)};
    line-height: ${rem(13)}
  `)}
  ${sm(`
    font-size: ${rem(11)};
    line-height: ${rem(11)}
  `)}
`;

export const DialogContent = styled.div`
  width: 100%;
`;

export const Heading = styled.h5`
  ${font(rem(28), rem(40), dblack, groldMedium)};
  margin-bottom: ${rem(16)};
  ${md(`
    font-size: ${rem(20)};
    line-height: ${rem(29)}
  `)}
  ${sm(`
    font-size: ${rem(18)};
    line-height: ${rem(26)};
    margin-bottom: ${rem(10)};
  `)}
`;

export const Content = styled.p`
  ${font(rem(18), rem(24), grey, groldSLight)};
  margin-bottom: ${rem(25)};
  white-space: break-spaces;
  ${md(`
    font-size: ${rem(16)};
    line-height: ${rem(20)};
    margin-bottom: ${rem(17)};
  `)}
  ${sm(`
    font-size: ${rem(14)};
    line-height: ${rem(18)};
    margin-bottom: ${rem(13)};
  `)}
`;

export const DialogFooter = styled.div`
  display: flex;
  justify-content: center;
`;
