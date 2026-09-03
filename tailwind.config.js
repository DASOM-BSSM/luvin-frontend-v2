/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // Figma: brown color/*
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
        // Figma: yellow color/*
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
        // Figma:  red color/*
        pink: {
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
        // Figma: state color/*
        state: {
          error: '#FF0030',
          warning: '#FFBA00',
          success: '#00D55B',
        },
        // Figma: text color/*
        text: {
          primary: '#1D1D1D',
          secondary: '#334655',
          muted: '#647F8B',
        },
        // Figma: default color/*
        default: {
          white: '#FFFFFF',
          black: '#1D1D1D',
          bg: '#FFFEFA',
          gray: '#D9D9D9',
        },
      },
      // Figma에 spacing / radius 변수가 없어 Tailwind 기본 스케일을 그대로 쓴다.
      spacing: {},
      borderRadius: {},
      fontFamily: {
        // Figma 텍스트 스타일이 Heading="Yde street B", Body="Yde street L" 로
        // 서로 다른 패밀리를 쓴다. RN은 정적 폰트 파일 간 굵기 합성을 못 하므로
        // fontWeight 대신 패밀리를 나눠 등록해야 한다.
        // 값 = ttf 의 PostScript 이름 = app/_layout.tsx 의 useFonts 키.
        'yde-street-b': ['YdestreetB'],
        'yde-street-l': ['YdestreetL'],
      },
      // Figma 텍스트 스타일. line-height 는 전 스타일 공통 160%.
      // '160%' 는 react-native-css-interop 이 버리므로 단위 없는 '1.6' 을 쓴다.
      fontSize: {
        'heading-h1': ['24px', { lineHeight: '1.6' }],
        'heading-h2': ['20px', { lineHeight: '1.6' }],
        'heading-h3': ['18px', { lineHeight: '1.6' }],
        'heading-h4': ['16px', { lineHeight: '1.6' }],
        'heading-h5': ['14px', { lineHeight: '1.6' }],
        'body-xl': ['20px', { lineHeight: '1.6' }],
        'body-l': ['18px', { lineHeight: '1.6' }],
        'body-m': ['16px', { lineHeight: '1.6' }],
        'body-s': ['14px', { lineHeight: '1.6' }],
        'body-xs': ['12px', { lineHeight: '1.6' }],
        'body-xxs': ['10px', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
};
