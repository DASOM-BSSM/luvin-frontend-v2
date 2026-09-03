/** @type {import('tailwindcss').Config} */

// 기준: Luvin-Frontend-v1 의 tailwind.config.js
// V2 에서 변경된 색상만 Figma "Luvin-Design" 의 `Color system` 값으로 교체했다.
//   - yellow      : 10단계 전부 변경 (주황 계열 -> 크림 계열)
//   - red         : 신규 (Figma `pink color/*`)
//   - default.bg  : #FAF5E8 -> #FFFEFA
//   - default.gray: 신규
// brown / neutral / state / text / default.white·black 은 V1 그대로.

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // V1 그대로 (Figma `brown color/*` 와 동일)
        brown: {
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
        },
        // 변경 : Figma `yellow color/*`
        yellow: {
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
        },
        // 신규 : Figma `pink color/*` (코드에서는 red 로 쓴다)
        red: {
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
        },
        // V1 그대로 (Figma 에는 대응 변수가 없음)
        neutral: {
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
        },
        // V1 그대로 (Figma `state color/*` 와 동일)
        state: {
          error: '#FF0030',
          warning: '#FFBA00',
          success: '#00D55B',
        },
        // V1 그대로 (Figma `text color/*` 와 동일)
        text: {
          primary: '#1D1D1D',
          secondary: '#334655',
          muted: '#647F8B',
        },
        default: {
          white: '#FFFFFF',
          black: '#1D1D1D',
          bg: '#FFFEFA', // 변경 : #FAF5E8 -> Figma `default color/bg`
          gray: '#D9D9D9', // 신규 : Figma `default color/gray`
        },
      },
      spacing: {},
      borderRadius: {},
      fontFamily: {
        // V1 은 'yde-street' 한 패밀리 + fontWeight 로 굵기를 구분했으나,
        // ttf 두 개의 Family 가 모두 "Yde street" 라 RN 이 굵기를 못 고른다.
        // PostScript 이름(= src/app/_layout.tsx 의 useFonts 키)으로 나눠 등록한다.
        'yde-street-b': ['YdestreetB'],
        'yde-street-l': ['YdestreetL'],
      },
      fontSize: {
        // 크기는 V1 그대로. lineHeight 만 '160%' -> '1.6' 으로 바꿨다.
        // react-native-css-interop 이 퍼센트 line-height 를 버려서 RN 에 적용되지 않는다.
        'heading-h1': ['24px', { lineHeight: '1.6' }],
        'heading-h2': ['18px', { lineHeight: '1.6' }],
        'heading-h3': ['16px', { lineHeight: '1.6' }],
        'heading-h4': ['14px', { lineHeight: '1.6' }],
        'heading-h5': ['12px', { lineHeight: '1.6' }],
        'body-xl': ['18px', { lineHeight: '1.6' }],
        'body-l': ['16px', { lineHeight: '1.6' }],
        'body-m': ['14px', { lineHeight: '1.6' }],
        'body-s': ['12px', { lineHeight: '1.6' }],
        'body-xs': ['10px', { lineHeight: '1.6' }],
        'body-xxs': ['8px', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
};
