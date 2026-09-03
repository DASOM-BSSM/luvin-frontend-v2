import { colorScheme } from 'nativewind';
import type { PropsWithChildren } from 'react';

/**
 * Figma "Luvin-Design" 의 `Color system` 컬렉션은 모드가 `Mode 1` 하나뿐이다.
 * 즉 다크 팔레트가 디자인상 정의되어 있지 않으므로, OS 가 다크모드여도
 * 라이트 팔레트로 고정한다. (app.json 의 userInterfaceStyle 은 "automatic")
 *
 * 나중에 Figma 에 Dark 모드가 추가되면 여기서 'system' 으로 바꾸고
 * tailwind.config.js 에 dark: 변형을 추가하면 된다.
 */
colorScheme.set('light');

export function ThemeProvider({ children }: PropsWithChildren) {
  return children;
}
