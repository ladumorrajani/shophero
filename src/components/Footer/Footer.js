import React from "react";
import { withRouter } from "react-router-dom";
import { images } from "../../config/images";
import Link from "@material-ui/core/Link";
import {
  FooterWrap,
  FooterStyle,
  Wrapper,
  Nav,
  MenuItem,
  ItemLink,
  Logo,
  SunFooterWrap,
  Copyright,
  CopyrightList,
  CopyrightItem,
  CopyrightLink,
  P,
  SocialList,
  SocialItem,
  SocialLink,
} from "./Footer.styles";
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

const CopyRightData = [
  {
    link: "/",
  },
  {
    link: "/",
  },
];

const SocialIcon = [
  {
    link: "/",
    img: images.FbIcon,
    alt: "Facebook",
  },
  {
    link: "/",
    img: images.TwitterIcon,
    alt: "Twitter",
  },
  {
    link: "/",
    img: images.LinkedIcon,
    alt: "Linkdin",
  },
  {
    link: "/",
    img: images.InstaIcon,
    alt: "Instagram",
  },
];

const Footer = (props) => {
  const { t } = useTranslation();
  return (
    <FooterWrap className={props.className}>
      <div className="container">
        <FooterStyle>
          <Nav>
            {t("footer.footer_nav", { returnObjects: true }).map((item, i) => {
              return (
                <MenuItem key={i}>
                  <ItemLink to={NavData[i].link}>{item.name}</ItemLink>
                </MenuItem>
              );
            })}
          </Nav>
          <Wrapper>
            <SunFooterWrap>
              <Logo>
                <Link href="/">
                  <img src={images.FooterLogo} alt="logo" />
                </Link>
              </Logo>
              <Copyright>
                <P>{t("footer.copyright")}</P>
                <CopyrightList>
                  {t("footer.other_link", { returnObjects: true }).map(
                    (data, i) => {
                      return (
                        <CopyrightItem key={i}>
                          <CopyrightLink
                            onClick={() =>
                              props.history.push(CopyRightData[i].link)
                            }
                          >
                            {data.name}
                          </CopyrightLink>
                        </CopyrightItem>
                      );
                    }
                  )}
                </CopyrightList>
              </Copyright>
            </SunFooterWrap>
            <SocialList>
              {SocialIcon.map((data, i) => {
                return (
                  <SocialItem key={i}>
                    <SocialLink href={data.link} target="_blank">
                      <img src={data.img} alt={data.alt} />
                    </SocialLink>
                  </SocialItem>
                );
              })}
            </SocialList>
          </Wrapper>
        </FooterStyle>
      </div>
    </FooterWrap>
  );
};

export default withRouter(Footer);
