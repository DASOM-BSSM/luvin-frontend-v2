import '@/global.css';

import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// 컴포넌트 밖(모듈 스코프)에서 호출해야 한다. 훅 안에서 부르면 이미 늦은 경우가 있다.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // 키 이름이 곧 RN 의 fontFamily 값이다.
  // ttf 의 PostScript 이름과 맞춘다.
  const [loaded, error] = useFonts({
    YdestreetB: require('@/assets/fonts/YdestreetB.ttf'),
    YdestreetL: require('@/assets/fonts/YdestreetL.ttf'),
  });

  useEffect(() => {
    // 폰트 로드에 실패해도 스플래시에 갇히지 않게 error 도 함께 본다.
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Stack />;
}
