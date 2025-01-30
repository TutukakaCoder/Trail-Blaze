import { SpringValue } from '@react-spring/web';
import type { ComponentProps } from 'react';
import type { AnimatedProps as SpringAnimatedProps } from '@react-spring/web';

export interface AnimatedStyles {
  opacity?: SpringValue<number>;
  transform?: SpringValue<string>;
  backgroundPosition?: SpringValue<string>;
  background?: string;
  backgroundSize?: string;
  [key: string]: SpringValue<any> | string | undefined;
}

export type AnimatedComponentProps<T extends object = {}> = SpringAnimatedProps<
  T & {
    style?: any;
    className?: string;
    children?: React.ReactNode;
  }
>; 