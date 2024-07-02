import React from 'react';
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({color}: Props) {
  const {colors} = useAppTheme();

  /*O UseTheme é usado para pegar o valor passado dentro de color que é
  uma variável mas que é necessário pegar o # da cor*/

  return <RNActivityIndicator color={colors[color]} />;
}
