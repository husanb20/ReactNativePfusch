
import { StyleSheet, Text, View } from 'react-native';
import Home from "./components/screens/Home";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Cards from "./components/screens/Cards";

const Stack = createStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Home"}>
                <Stack.Screen name={"Home"} component={Home}></Stack.Screen>
                <Stack.Screen name={"Cards"} component={Cards}></Stack.Screen>
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
