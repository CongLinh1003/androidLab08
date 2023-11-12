import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screen_1 from './screens/screen_1';
import screen_2 from './screens/screen_2';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='screen_1' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='screen_1' component={screen_1} />
        <Stack.Screen name='screen_2' component={screen_2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
