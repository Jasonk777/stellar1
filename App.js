import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SpaceCraftsScreen from "./screens/SpaceCraft";
import StarMapsScreen from "./screens/StarMap";
import DailyPicsScreen from "./screens/DailyPic";

const Stack = createStackNavigator();

function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SpaceCraft" component={SpaceCraftsScreen} />
        <Stack.Screen name="StarMap" component={StarMapsScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;