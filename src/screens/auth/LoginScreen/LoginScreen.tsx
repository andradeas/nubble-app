import React from 'react';

import {useAuthSignIn} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {
  Text,
  Button,
  Screen,
  FormTextInput,
  FormPasswordInput,
} from '@components';
import {AuthScreenProps} from '@routes';

import {loginSchema, LoginSchema} from './loginSchema';

export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  const {showToast} = useToastService();
  const {isLoading, signIn} = useAuthSignIn({
    onError: message => showToast({message, type: 'error'}),
  });
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: LoginSchema) {
    signIn({email, password});
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
        loading={isLoading}
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
