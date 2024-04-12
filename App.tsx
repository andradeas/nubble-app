import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset={'headingLarge'}>CoffeeStack</Text>

          <Button loading title="Primary" marginBottom="s10" />
          <Button disabled title="Primary" marginBottom="s10" />

          <Button title="Outline" preset="outline" marginBottom="s10" />

          <Button disabled preset="outline" title="Loading" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
