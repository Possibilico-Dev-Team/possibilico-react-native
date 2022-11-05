import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import SignIn from './components/SignIn';
import EmailSignIn from './components/EmailSignIn';

const Stack = createNativeStackNavigator();

export default function App(styles) {
  return (
    <NavigationContainer styles = {styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: 'Sign In' }}
        />
        <Stack.Screen
          name="EmailSignIn"
          component={EmailSignIn}
          options={{ title: 'Email Sign In' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen 
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}