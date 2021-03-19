import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { images } from "../../config/images";
import Button from "../Button/Button";
import Link from "@material-ui/core/Link";
import {
  HeaderStyle,
  Wrapper,
  Logo,
  Nav,
  MenuList,
  MenuItem,
  ItemLink,
  MobileMenu,
  MobileButton,
  MobileMenuWrap,
  MobileHeader,
  CloseButton,
  Mobilecontent,
  MobileHeaderRight,
} from "./Header.styles";
import LanguageSelect from "../LangaugeSelect/LangaugeSelect";
import "../../i18n";
import { useTranslation } from "react-i18next";

const NavData = [
  {
    link: "/about",
  },
  {
    link: "/howitworks",
  },
  {
    link: "/ngo",
  },
  {
    link: "/faq",
  },
  {
    link: "/contact",
  },
];

const Header = (props) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    document.body.classList.add("over-hidden");
  };

  const handleClose = () => {
    setOpen(false);
    document.body.classList.remove("over-hidden");
  };

  return (
    <HeaderStyle id="header">
      <div className="container">
        <Wrapper>
          <Logo>
            <Link onClick={() => props.history.push("/")}>
              <img src={images.logo} alt="logo" />
            </Link>
          </Logo>
          <Nav>
            <MenuList>
              {t("header.nav_menu", { returnObjects: true }).map((item, i) => {
                return (
                  <MenuItem key={i}>
                    <ItemLink activeClassName="active" to={NavData[i].link}>
                      {item.name}
                    </ItemLink>
                  </MenuItem>
                );
              })}
            </MenuList>
            <LanguageSelect />
            <Button>{t("header.watch_btn")}</Button>
            <MobileMenu>
              <MobileButton onClick={() => handleClick()}>
                <span />
              </MobileButton>
              <MobileMenuWrap className={`${open ? "open" : ""}`}>
                <MobileHeader>
                  <Logo>
                    <Link onClick={() => props.history.push("/")}>
                      <img src={images.logo} alt="logo" />
                    </Link>
                  </Logo>
                  <MobileHeaderRight>
                    <LanguageSelect />
                    <CloseButton onClick={() => handleClose()} />
                  </MobileHeaderRight>
                </MobileHeader>
                <Mobilecontent>
                  <MenuList>
                    {t("header.nav_menu", { returnObjects: true }).map(
                      (item, i) => {
                        return (
                          <MenuItem key={i}>
                            <ItemLink
                              activeClassName="active"
                              to={NavData[i].link}
                            >
                              {item.name}
                            </ItemLink>
                          </MenuItem>
                        );
                      }
                    )}
                  </MenuList>
                </Mobilecontent>
              </MobileMenuWrap>
            </MobileMenu>
          </Nav>
        </Wrapper>
      </div>
    </HeaderStyle>
  );
};

export default withRouter(Header);
