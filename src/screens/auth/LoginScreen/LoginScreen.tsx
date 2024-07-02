import React from 'react';
import {Alert} from 'react-native';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';

import {
  Text,
  Button,
  Screen,
  FormTextInput,
  FormPasswordInput,
} from '@components';
import {RootStackParamList} from '@routes';

import {loginSchema, LoginSchema} from './loginSchema';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: LoginSchema) {
    Alert.alert(`Email: ${email} ${'\n'} Senha: ${password}`);
  }

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

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{marginBottom: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
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

      <Button
        title="Entrar"
        marginBottom="s12"
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
      />
      <Button
        onPress={navigateToSignUpScreen}
        title="Criar uma conta"
        preset="outline"
      />
    </Screen>
  );
}
