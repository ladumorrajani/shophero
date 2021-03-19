import styled from "styled-components";
import {
  rem,
  dblack,
  groldMedium,
  SiteTransition,
  primary,
  secondary,
  white,
  font,
  xl,
  lg,
  md,
  sm,
  xs,
  xxs,
} from "../../config/variables";
import { NavLink } from "react-router-dom";

export const HeaderStyle = styled.header`
  width: 100%;
  padding: ${rem(25)} 0;
  background: ${white};
  ${xl(`
    padding: ${rem(20)} 0;
  `)}
  ${lg(`
    padding: ${rem(18)} 0;
  `)}
  ${md(`
    padding: ${rem(18)} 0;
  `)}
  ${sm(`
    padding: ${rem(15)} 0;
  `)}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${xs(`
    align-items: flex-start;
  `)}
`;

export const Logo = styled.div`
  max-width: ${rem(256)};
  width: 100%;
  cursor: pointer;
  ${lg(`
    max-width: ${rem(200)};
  `)}
  ${md(`
    max-width: ${rem(150)};
  `)}
  ${sm(`
    max-width: ${rem(130)};
  `)}
  ${xxs(`
    max-width: ${rem(115)};
    margin-top: ${rem(2)};
  `)}
  a {
    display: block;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  ${xxs(`
    flex-wrap: wrap;
    justify-content: flex-end;
    position: relative;
  `)}
`;

export const MenuList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  margin-right: ${rem(31)};
  ${lg(`
    margin-right: ${rem(25)};
  `)}
  ${md(`
    margin-right: ${rem(15)};
  `)}
  ${sm(`
    display: none;
  `)}
`;

export const MenuItem = styled.li`
  margin: 0 ${rem(21)};
  list-style: none;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  ${lg(`
    margin: 0 ${rem(15)};
  `)}
  ${md(`
    margin: 0 ${rem(6)};
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
  text-align: center;
  ${lg(`
    font-size: ${rem(15)};
  `)}
  ${md(`
    font-size: ${rem(13)};
  `)}
  &:hover,
  &.active {
    text-decoration: none;
    color: ${primary};
    &:after,
    &:before {
      opacity: 1;
      visibility: visible;
    }
    &:before {
      top: ${rem(0)};
      left: ${rem(-6)};
    }
    &:after {
      right: ${rem(-6)};
      bottom: ${rem(0)};
    }
  }
  &:after,
  &:before {
    content: "";
    position: absolute;
    width: ${rem(10)};
    height: ${rem(10)};
    transition: ${SiteTransition};
    border-radius: ${rem(2)};
    opacity: 0;
    visibility: hidden;
  }
  &:before {
    border-left: ${rem(2)} solid ${secondary};
    border-top: ${rem(2)} solid ${secondary};
    top: ${rem(6)};
    left: 0;
  }
  &:after {
    border-right: ${rem(2)} solid ${secondary};
    border-bottom: ${rem(2)} solid ${secondary};
    right: 0;
    bottom: ${rem(6)};
  }
`;

export const MobileMenu = styled.div`
  display: none;
  ${sm(`
    display: flex;
  `)}
`;

export const MobileButton = styled.div`
  width: ${rem(42)};
  height: ${rem(32)};
  background: ${primary};
  border-radius: ${rem(5)};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${rem(13)};
  margin-bottom: ${rem(-3)};
  cursor: pointer;
  span {
    position: absolute;
    width: ${rem(24)};
    height: ${rem(2)};
    border-radius: ${rem(2)};
    background: ${white};
    &:before {
      content: "";
      position: absolute;
      width: ${rem(24)};
      height: ${rem(2)};
      border-radius: ${rem(2)};
      background: ${white};
      left: 0;
      top: ${rem(-7)};
    }
    &:after {
      content: "";
      position: absolute;
      width: ${rem(24)};
      height: ${rem(2)};
      border-radius: ${rem(2)};
      background: ${white};
      left: 0;
      bottom: ${rem(-7)};
    }
  }
`;

export const MobileMenuWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: ${primary};
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.3, 0.4, 0.7, 1);
  &.open {
    transform: translateX(0);
  }
`;

export const MobileHeader = styled.div`
  padding: ${rem(11)} ${rem(15)};
  background: ${white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  .language-select-root {
    .language-select-btn {
      ${sm(`
        display: block;
        margin: 0;
      `)}
    }
  }
`;

export const MobileHeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

export const CloseButton = styled.div`
  width: ${rem(42)};
  height: ${rem(32)};
  background: ${dblack};
  border-radius: ${rem(5)};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${rem(13)};
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    width: ${rem(24)};
    height: ${rem(2)};
    border-radius: ${rem(2)};
    background: ${white};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:after {
    content: "";
    position: absolute;
    width: ${rem(24)};
    height: ${rem(2)};
    border-radius: ${rem(2)};
    background: ${white};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const Mobilecontent = styled.div`
  flex: 1;
  overflow: auto;
  ${MenuList} {
    display: block;
    padding: ${rem(12)} ${rem(20)};
    margin: 0;
    height: 100%;
  }
  ${MenuItem} {
    margin: 0;
    border-bottom: ${rem(1)} solid rgba(255, 255, 255, 0.45);
    padding: ${rem(15)} 0;
    &:last-child {
      border: 0;
    }
  }
  ${ItemLink} {
    ${font(rem(22), rem(29), dblack, groldMedium)};
    &:after,
    &:before {
      display: none;
    }
  }
`;
