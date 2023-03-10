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

globalStyle("html, body", {
  margin: 0,
  fontFamily: textL,
  fontSize: 14,
  lineHeight: 1.6,
  color: vars.color.COLOR_04,
  boxSizing: "border-box",
  position: "relative",
});

globalStyle("ul", {
  padding: 0,
  paddingLeft: 10,
  listStyle: "none",
});

export const rootStyle = style({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  padding: "40px 0",
});

export const container = style({
  width: 1000,
});

export const typo_link = style({
  color: vars.color.COLOR_02,
  textDecoration: "none",
  marginRight: 4,
  ":hover": {
    textDecoration: "underline",
  },
  cursor: "pointer",
});

export const typo_code = style({
  fontSize: 13,
  color: vars.color.COLOR_04,
  display: "inline-block",
  border: `1px solid ${vars.color.COLOR_06}`,
  padding: "2px 6px",
  marginRight: 4,
  marginBottom: 4,
  borderRadius: 6,
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

globalStyle("input", {
  height: 28,
  width: 300,
  display: "block",
  border: `1px solid ${vars.color.COLOR_06}`,
  borderRadius: 10,
  padding: "4px 10px",
  fontFamily: typo_R,
  color: vars.color.COLOR_03,
  boxSizing: "border-box",
});

globalStyle("textarea", {
  width: "100%",
  height: 300,
  margin: "20px 0",
  resize: "none",
  display: "block",
  border: `1px solid ${vars.color.COLOR_06}`,
  borderRadius: 10,
  padding: "20px",
  fontFamily: typo_R,
  color: vars.color.COLOR_03,
  boxSizing: "border-box",
});

export const nested_list_li = style({
  listStyleType: "none",
  marginBottom: 4,
});

export const list_li = style([nested_list_li, typo_c03, typo_M]);

export const flex = style({
  display: "flex",
  gap: 60,
});

export const flexSpaceBetween = style([
  flex,
  {
    width: "100%",
    justifyContent: "space-between",
  },
]);

export const flexAlignCenter = style([
  flex,
  {
    alignItems: "center",
  },
]);

export const flexTextAlignCenter = style([
  flexAlignCenter,
  {
    gap: 0,
    justifyContent: "flex-start",
  },
]);

export const containerFlex = style([flexAlignCenter, flexSpaceBetween]);

export const headerStyle = style([
  flex,
  {
    width: "100%",
    padding: 40,
    boxSizing: "border-box",
    borderBottom: `1px solid ${vars.color.COLOR_07}`,
    flexWrap: "nowrap",
    marginBottom: 40,
  },
]);

export const asideStyle = style({
  width: 300,
  marginLeft: 60,
});

export const header_H1 = style([
  typo_B,
  typo_c02,
  {
    fontSize: 28,
    lineHeight: 1.4,
    marginTop: 0,
    marginBottom: 30,
  },
]);

export const profileImg = style({
  width: 200,
  height: 200,
  borderRadius: 100,
  backgroundImage: "url(/profile_v2_gray.png)",
  backgroundPosition: "center",
  backgroundSize: "cover",
});

export const tooltipBackdrop = style({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 5,
  width: "100%",
  height: "100vh",
  background: "transparent",
});

export const tooltipContainer = style([
  flexTextAlignCenter,
  {
    border: `1px solid ${vars.color.COLOR_06}`,
    borderRadius: 20,
    padding: 20,
    width: 400,
    height: 80,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    background: "rgba(255, 255, 255, 0.6)",
    backdropFilter: "blur(5px)",
    boxShadow: `5px 5px 12px ${vars.color.COLOR_07}`,
    position: "absolute",
    zIndex: 10,
    top: 140,
    left: 580,
  },
]);

export const iconMarginRight = style({
  marginRight: 8,
});

export const mailModalBackdrop = style({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 15,
  width: "100%",
  height: "100%",
  background: "rgba(255, 255, 255, 0.6)",
  backdropFilter: "blur(6px)",
});

export const mailModalContainer = style([
  flexTextAlignCenter,
  {
    border: `1px solid ${vars.color.COLOR_06}`,
    borderRadius: 20,
    padding: 40,
    boxSizing: "border-box",
    width: 800,
    height: 600,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    background: "rgba(255, 255, 255, 1)",
    boxShadow: `8px 8px 16px ${vars.color.COLOR_07}`,
    position: "fixed",
    zIndex: 20,
    top: 160,
    left: "50%",
    transform: "translate(-50%, 0%)",
  },
]);
