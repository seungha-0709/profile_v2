import {
  createGlobalTheme,
  globalStyle,
  fontFace,
  style,
} from "@vanilla-extract/css";

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
  fontFamily: textR,
  fontSize: 14,
  lineHeight: 1.6,
  color: vars.color.COLOR_04,
  boxSizing: "border-box",
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
  typo_SB,
  typo_c02,
  {
    fontSize: 16,
    margin: 0,
  },
]);

export const list_ul = style({
  listStyle: "none",
  padding: 0,
  paddingLeft: 20,
});

export const nested_list_ul = style([
  list_ul,
  {
    selectors: {
      [`${list_ul} > li.&::before`]: {
        content: "· ",
      },
    },
  },
]);

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
