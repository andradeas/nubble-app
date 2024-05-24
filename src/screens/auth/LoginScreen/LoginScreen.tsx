import React from 'react';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {RootStackParamList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen>
      <Text preset="headingLarge" marginBottom="s8">
        Olá
      </Text>
      <Text preset="paragraphLarge" marginBottom="s40">
        Digite o seu e-mail e senha para entrar
      </Text>

      <TextInput
        label="E-mail"
        errorMessage="Mensagem de erro"
        placeholder="Digite seu e-mail"
        boxProps={{marginBottom: 's20'}}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{marginBottom: 's10'}}
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        preset="paragraphSmall"
        bold
        color="primary"
        marginBottom="s48">
        Esqueci minha senha
      </Text>

      <Button title="Entrar" marginBottom="s12" />
      <Button
        onPress={navigateToSignUpScreen}
        title="Criar uma conta"
        preset="outline"
      />
    </Screen>
  );
}