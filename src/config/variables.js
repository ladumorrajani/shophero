import "../assets/fonts/fonts.css";

export const rem = (pxValue) => {
  const ratio = 16;
  return pxValue / ratio + "rem";
};

// fonts variable
export const groldBlack = "grold_roundedblack";
export const groldBlackI = "grold_roundedblack_italic";
export const groldBold = "grold_roundedbold";
export const groldBoldI = "grold_roundedbold_italic";
export const groldXBlack = "grold_roundedextrablack";
export const groldXBlackI = "grold_roundedXBlkIt";
export const groldXBold = "grold_roundedextrabold";
export const groldXBoldI = "grold_roundedextrabold_italic";
export const groldXLight = "grold_roundedextralight";
export const groldXLightI = "grold_roundedXLtIt";
export const groldRegularI = "grold_rounded_regularitalic";
export const groldLight = "grold_roundedlight";
export const groldLightI = "grold_roundedlight_italic";
export const groldMedium = "grold_roundedmedium";
export const groldMediumI = "grold_roundedmedium_italic";
export const groldRegular = "grold_rounded_regularregular";
export const groldSLight = "grold_roundedsemilight";
export const groldSLightI = "grold_roundedsemilight_italic";
export const groldThin = "grold_roundedthin";
export const groldThinI = "grold_roundedthin_italic";

// color variables
export const primary = "#71C7E5";
export const secondary = "#F1CB30";
export const black = "#000";
export const dblack = "#211915";
export const white = "#fff";
export const dwhite = "#E8E8E8";
export const xdwhite = "#CCCCCC";
export const xdgrey = "#434343";
export const grey = "#888888";
export const xlgrey = "#F0F0F0";
export const lGrey = "#F7F7F7";
export const lPink = "#FCF7E7";
export const red = "#ff0000";
export const dgrey = "#EAE8E8";
export const xlGrey = "#707070";
export const lGreen = "#F0FDFB";
export const green = "#00BE7E";
export const lprimary = "#F0FBFF";
export const xdblack = "#51596C";

// site transition
export const SiteTransition = "all 0.3s ease";

export const font = (
  fsize = null,
  lheight = null,
  color = null,
  ffamily = groldSLight
) => {
  return `
    font-size : ${fsize};
    line-height : ${lheight};
    color : ${color};
    font-family : ${ffamily};
  `;
};

export const customScroll = () => `
  &::-webkit-scrollbar {
    width: ${rem(4)};
    height: ${rem(4)};
  }
  &::-webkit-scrollbar-thumb {
    background-color: #9ba2b0;
    border-radius: ${rem(2)};
  }
`;

/* media queries */
export const xxs = (content) => `
@media (max-width: 405px) {
  ${content};
}
`;
export const xs = (content) => `
@media (max-width: 541px) {
  ${content};
}
`;
export const sm = (content) => `
@media (max-width: 767px) {
  ${content};
}
`;
export const md = (content) => `
@media (max-width: 991px) {
  ${content};
}
`;
export const lg = (content) => `
@media (min-width: 992px) and (max-width: 1199px) {
  ${content};
}
`;
export const xl = (content) => `
@media (min-width: 1200px) and (max-width: 1440px) {
  ${content};
}
`;
export const device = (content) => `
@media (max-width: 1024px) {
  ${content};
}
`;
export const sh = (content) => `
@media (min-width: 1200px) and (max-width: 1440px) and (max-height: 850px) {
  ${content};
}
`;
/* media queries */
