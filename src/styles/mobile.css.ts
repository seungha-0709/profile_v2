import {
  createGlobalTheme,
  globalStyle,
  fontFace,
  style,
} from "@vanilla-extract/css";

const textL = fontFace({
  src: "url(/Pretendard-Light.subset.woff2) format('woff2')",
});

const textR = fontFace({
  src: "url(/Pretendard-Regular.subset.woff2) format('woff2')",
});

const textM = fontFace({
  src: "url(/Pretendard-Medium.subset.woff2) format('woff2')",
});

const textSB = fontFace({
  src: "url(/Pretendard-SemiBold.subset.woff2) format('woff2')",
});

const textB = fontFace({
  src: "url(/Pretendard-Bold.subset.woff2) format('woff2')",
});

const textEB = fontFace({
  src: "url(/Pretendard-Black.subset.woff2) format('woff2')",
});

const textMono = fontFace({
  src: "url(/monaco.ttf) format('ttf')",
});

export const vars = createGlobalTheme(":root", {
  color: {
    COLOR_01: "#0D0E0F",
    COLOR_02: "#313638",
    COLOR_03: "#5C6568",
    COLOR_04: "#8B9092",
    COLOR_05: "#AEB4B7",
    COLOR_06: "#CBD1D3",
    COLOR_07: "#E5E9EB",
    COLOR_08: "#FAFAFA",
  },
});

export const mobileRootStyle = style({
  width: "100%",
  display: "block",
  padding: 40,
  boxSizing: "border-box",
});

export const mobileStyle = style({
  width: "100%",
  display: "block",
});

export const mobileFlexSpaceBetween = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const typo_R = style({
  fontFamily: textR,
});
export const typo_M = style({
  fontFamily: textM,
});
export const typo_SB = style({
  fontFamily: textSB,
});
export const typo_B = style({
  fontFamily: textB,
});

export const typo_c01 = style({
  color: vars.color.COLOR_01,
});
export const typo_c02 = style({
  color: vars.color.COLOR_02,
});
export const typo_c03 = style({
  color: vars.color.COLOR_03,
});
export const typo_c04 = style({
  color: vars.color.COLOR_04,
});
export const typo_c05 = style({
  color: vars.color.COLOR_05,
});
export const typo_c06 = style({
  color: vars.color.COLOR_06,
});
export const typo_c07 = style({
  color: vars.color.COLOR_07,
});
export const typo_c08 = style({
  color: vars.color.COLOR_08,
});

export const typo_h2 = style([
  typo_B,
  typo_c02,
  {
    fontSize: 22,
    margin: 0,
    marginTop: 20,
    marginBottom: 20,
  },
]);

export const typo_h3 = style([
  typo_B,
  typo_c02,
  {
    fontSize: 16,
    margin: 0,
  },
]);

export const mobileProfileImg = style({
  width: 200,
  height: 200,
  borderRadius: 100,
  backgroundImage: "url(/profile_v2_gray.png)",
  backgroundPosition: "center",
  backgroundSize: "cover",
});
