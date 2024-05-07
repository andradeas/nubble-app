import React from 'react';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';

interface Props {
  name: IconName;
}

export function Icons({name}: Props) {
  const SVGIcon = iconRegistry[name];
  return <SVGIcon />;
}

const iconRegistry = {
  eyeOff: EyeOffIcon,
  eyeOn: EyeOnIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
