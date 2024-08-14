// App.js

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { configureStore } from "./redux/store"; // import configureStore แทน { store, persistor }

import Home from "./router/routerHome";
import Login from "./screens/Login";
import Index from "./screens/Index";
import Profile from "./screens/Profile";
import ForgotPassword from "./screens/ForgotPassword";
import Register from "./screens/Register";
import UpPassword from "./screens/UpPassword";
import BoxContent from "./screens/BoxContent";
import TraveDetails from "./screens/TraveDetails";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BoxContent"
        component={BoxContent}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TraveDetails"
        component={TraveDetails}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
function ContentStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ContentStack}
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const { store, persister } = configureStore(); // ใช้ configureStore แทน store
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <NavigationContainer>

          <Stack.Navigator
            initialRouteName="Index"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Index" component={Index} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="UpPassword" component={UpPassword} />
            <Stack.Screen name="Home" component={MyTabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>

  );
}
