import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';
import {Icon} from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
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

          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            rightComponent={<Icon name="eyeOn" color="gray2" />}
            boxProps={{marginBottom: 's10'}}
          />

          <Text preset="paragraphSmall" bold color="primary" marginBottom="s48">
            Esqueci minha senha
          </Text>

          <Button title="Entrar" marginBottom="s12" />
          <Button title="Criar uma conta" preset="outline" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
