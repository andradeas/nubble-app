import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {Box, BoxProps} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';

import {ScrollViewContainer, ViewContainer, ScreenHeader} from './components';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  HeaderComponent?: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  style,
  title,
  HeaderComponent,
  ...boxProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{flex: 1}}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...boxProps}>
          <ScreenHeader
            HeaderComponent={HeaderComponent}
            canGoBack={canGoBack}
            title={title}
          />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
