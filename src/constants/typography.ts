/**
 * 타이포그래피 토큰.
 *
 * 크기 / 이름은 Luvin-Frontend-v1 의 tailwind.config.js 그대로다.
 * tailwind.config.js 의 theme.extend.fontFamily / fontSize 와 같은 값을 미러링한다.
 */

export const fontFamily = {
  ydeStreetB: 'YdestreetB',
  ydeStreetL: 'YdestreetL',
} as const;

/** 전 스타일 공통 line-height (160%) */
export const lineHeightRatio = 1.6;

export const heading = {
  h1: { fontFamily: fontFamily.ydeStreetB, fontSize: 24, lineHeight: 38.4 },
  h2: { fontFamily: fontFamily.ydeStreetB, fontSize: 18, lineHeight: 28.8 },
  h3: { fontFamily: fontFamily.ydeStreetB, fontSize: 16, lineHeight: 25.6 },
  h4: { fontFamily: fontFamily.ydeStreetB, fontSize: 14, lineHeight: 22.4 },
  h5: { fontFamily: fontFamily.ydeStreetB, fontSize: 12, lineHeight: 19.2 },
} as const;

export const body = {
  xl: { fontFamily: fontFamily.ydeStreetL, fontSize: 18, lineHeight: 28.8 },
  l: { fontFamily: fontFamily.ydeStreetL, fontSize: 16, lineHeight: 25.6 },
  m: { fontFamily: fontFamily.ydeStreetL, fontSize: 14, lineHeight: 22.4 },
  s: { fontFamily: fontFamily.ydeStreetL, fontSize: 12, lineHeight: 19.2 },
  xs: { fontFamily: fontFamily.ydeStreetL, fontSize: 10, lineHeight: 16 },
  xxs: { fontFamily: fontFamily.ydeStreetL, fontSize: 8, lineHeight: 12.8 },
} as const;

export const typography = { fontFamily, heading, body } as const;

export type Typography = typeof typography;
export type HeadingLevel = keyof typeof heading;
export type BodySize = keyof typeof body;
