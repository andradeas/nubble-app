import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {EyeOffIcon} from './src/assets/icons/EyeOffIcon';
import {EyeOnIcon} from './src/assets/icons/EyeOnIcon';
import {Box} from './src/components/Box/Box';
import {Icons} from './src/components/Icon/Icons';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset={'headingLarge'}>CoffeeStack</Text>

          <Box flexDirection="row">
            <EyeOffIcon color="blue" size={100} />
            <EyeOnIcon color="red" size={70} />
            <Icons name="eyeOff" />
          </Box>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
