/**
 * 색상 토큰.
 *
 * 기준은 Luvin-Frontend-v1 의 tailwind.config.js 이고, V2 에서 변경된 색상만
 * Figma "Luvin-Design" 의 `Color system` 값으로 교체했다.
 * tailwind.config.js 의 theme.extend.colors 와 같은 값을 미러링한다.
 */

/** V1 그대로 (Figma `brown color/*` 와 동일) */
export const brown = {
  100: '#F8F0EA',
  200: '#F4E8DF',
  300: '#E8CFBD',
  400: '#B6642A',
  500: '#A45A26',
  600: '#925022',
  700: '#894B20',
  800: '#6D3C19',
  900: '#522D13',
  1000: '#40230F',
} as const;

/** 변경 : Figma `yellow color/*` (V1 은 주황 계열이었음) */
export const yellow = {
  100: '#FFFDF5',
  200: '#FFFCF0',
  300: '#FFF9E1',
  400: '#FFED9E',
  500: '#E6D58E',
  600: '#CCBE7E',
  700: '#BFB277',
  800: '#998E5F',
  900: '#736B47',
  1000: '#595337',
} as const;

/** 신규 : Figma `pink color/*` (코드에서는 red 로 쓴다) */
export const red = {
  100: '#FFF6F8',
  200: '#FFF2F5',
  300: '#FFE4EA',
  400: '#FFBCCA',
  500: '#FFA8BA',
  600: '#E697A7',
  700: '#BF7E8C',
  800: '#996570',
  900: '#734C54',
  1000: '#593B41',
} as const;

/** V1 그대로 (Figma 에는 대응 변수가 없음) */
export const neutral = {
  100: '#FDFCF8',
  200: '#FCFAF4',
  300: '#F9F5E9',
  400: '#ECDFB8',
  500: '#D4C9A6',
  600: '#BDB293',
  700: '#B1A78A',
  800: '#8E866E',
  900: '#6A6453',
  1000: '#534E40',
} as const;

/** V1 그대로 (Figma `state color/*` 와 동일) */
export const state = {
  error: '#FF0030',
  warning: '#FFBA00',
  success: '#00D55B',
} as const;

/** V1 그대로 (Figma `text color/*` 와 동일) */
export const text = {
  primary: '#1D1D1D',
  secondary: '#334655',
  muted: '#647F8B',
} as const;

export const defaultColor = {
  white: '#FFFFFF',
  black: '#1D1D1D',
  /** 변경 : #FAF5E8 -> Figma `default color/bg` */
  bg: '#FFFEFA',
  /** 신규 : Figma `default color/gray` */
  gray: '#D9D9D9',
} as const;

export const colors = {
  brown,
  yellow,
  red,
  neutral,
  state,
  text,
  default: defaultColor,
} as const;

export type Colors = typeof colors;
export type ColorShade = keyof typeof brown;
