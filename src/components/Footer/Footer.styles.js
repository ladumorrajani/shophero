import styled from "styled-components";
import {
  rem,
  dblack,
  SiteTransition,
  groldMedium,
  groldRegular,
  font,
  xl,
  lg,
  md,
  sm,
} from "../../config/variables";
import Link from "@material-ui/core/Link";
import { images } from "../../config/images";
import { NavLink } from "react-router-dom";

export const FooterWrap = styled.footer`
  position: relative;
  display: flex;
  z-index: 0;
  padding-bottom: ${rem(95)};
  ${xl(`
    padding-bottom: ${rem(65)};
  `)}
  ${lg(`
    padding-bottom: ${rem(60)};
  `)}
  ${md(`
    padding-bottom: ${rem(38)};
  `)}
  ${sm(`
    padding-bottom: ${rem(20)};
  `)}
  &:before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100%;
    background: url(${images.FooterPatern}) bottom no-repeat;
    background-size: contain;
    height: ${rem(1135)};
    z-index: -1;
  }
`;

export const FooterStyle = styled.div`
  width: 100%;
  padding: ${rem(29)} ${rem(30)};
  background-color: rgba(241, 203, 48, 0.8);
  border-radius: ${rem(20)};
  position: relative;
  ${xl(`
    padding: ${rem(23)} ${rem(25)};
  `)}
  ${lg(`
    padding: ${rem(19)} ${rem(20)};
  `)}
  ${md(`
    padding: ${rem(19)} ${rem(15)};
    border-radius: ${rem(15)};
  `)}
  ${sm(`
    padding: ${rem(19)} ${rem(30)};
  `)}
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${sm(`
    flex-direction: column;
    text-align: center;
  `)}
`;

export const Nav = styled.ul`
  display: flex;
  margin-bottom: ${rem(45)};
  ${md(`
    margin-bottom: ${rem(25)};
  `)}
  ${sm(`
    flex-direction: column;
  `)}
`;

export const MenuItem = styled.li`
  margin-right: ${rem(36)};
  list-style: none;
  ${lg(`
    margin-right: ${rem(25)};
  `)}
  ${md(`
    margin-right: ${rem(15)};
  `)}
  ${sm(`
    margin-right: ${rem(0)};
    text-align: center;
    padding-bottom: ${rem(10)};
    margin-bottom: ${rem(10)};
    border-bottom: ${rem(1)} solid rgba(255,255,255,0.45);
  `)}
`;

export const ItemLink = styled(NavLink)`
  font-size: ${rem(16)};
  line-height: 1.5;
  color: ${dblack};
  transition: ${SiteTransition};
  font-family: ${groldMedium};
  cursor: pointer;
  position: relative;
  display: block;
  transition: ${SiteTransition};
  text-transform: uppercase;
  ${sm(`
    font-size: ${rem(18)};
  `)}
  &:hover {
    text-decoration: none;
    opacity: 0.8;
  }
`;

export const Logo = styled.div`
  margin-right: ${rem(18)};
  ${md(`
    margin-right: ${rem(16)};
    max-width: ${rem(120)};
  `)}
  ${sm(`
    margin-right: ${rem(0)};
    max-width: ${rem(120)};
    margin-bottom: ${rem(14)};
  `)}
`;

export const SunFooterWrap = styled.div`
  display: flex;
  align-items: center;
  ${sm(`
    flex-direction: column;
    align-items: center;
  `)}
`;

export const Copyright = styled.div`
  display: flex;
  margin-right: ${rem(16)};
  ${md(`
    flex-direction: column;
  `)}
  ${sm(`
    margin-right: ${rem(0)};
  `)}
`;

export const P = styled.p`
  margin: 0;
  margin-right: ${rem(16)};
  font-family: ${groldRegular};
  ${sm(`
    margin-right: ${rem(0)};
  `)}
`;

export const CopyrightList = styled.ul`
  display: flex;
`;

export const CopyrightItem = styled.li`
  list-style: disc;
  margin-right: ${rem(10)};
  padding-right: ${rem(10)};
  &:first-child {
    list-style: none;
  }
`;

export const CopyrightLink = styled(Link)`
  display: block;
  ${font(rem(16), rem(24), dblack, groldRegular)};
  text-decoration: none;
  cursor: pointer;
  transition: ${SiteTransition};
  &:hover {
    text-decoration: none;
    opacity: 0.8;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  margin-top: ${rem(-70)};
  ${md(`
    margin-top: 0;
  `)}
`;

export const SocialItem = styled.li`
  list-style: none;
  margin-left: ${rem(30)};
  ${md(`
    margin-left: ${rem(15)};
  `)}
  ${sm(`
    margin: 0 ${rem(7)};
    margin-top: ${rem(18)};
  `)}
`;

export const SocialLink = styled(Link)`
  display: block;
  cursor: pointer;
  transition: ${SiteTransition};
  &:hover {
    opacity: 0.8;
  }
  img {
    display: block;
    ${md(`
      max-width: ${rem(30)};
    `)}
  }
`;
