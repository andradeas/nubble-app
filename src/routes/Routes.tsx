import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUpScreen} from '../screens/auth/SignUpScreen/SignUpScreen';
import {LoginScreen} from '../screens/auth/LoginScreen/LoginScreen';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;

  // TODO: Success Screen: icon, title, description
};

const Stack = createNativeStackNavigator<RootStackParamList>();

//Router.tsx

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true,
        }}
        initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
