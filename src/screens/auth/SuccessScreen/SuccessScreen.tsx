import React from 'react';

import {Button, Icon, Screen, Text} from '@components';
import {AuthScreenProps} from '@routes';

export function SuccessScreen({
  route,
  navigation,
}: AuthScreenProps<'SuccessScreen'>) {
  function goBackToBegin() {
    // TODO: navegar para a tela de login
    navigation.goBack();
  }

  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" marginTop="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" marginTop="s16">
        {route.params.description}
      </Text>
      <Button
        onPress={goBackToBegin}
        title="Voltar ao início"
        marginTop="s40"
      />
    </Screen>
  );
}
