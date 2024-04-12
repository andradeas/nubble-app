import React from 'react';
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';
import {Theme, ThemeColors} from '../../theme/theme';
import {useTheme} from '@shopify/restyle';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({color}: Props) {
  const {colors} = useTheme<Theme>();

  /*O UseTheme é usado para pegar o valor passado dentro de color que é
  uma variável mas que é necessário pegar o # da cor*/

  return <RNActivityIndicator color={colors[color]} />;
}
