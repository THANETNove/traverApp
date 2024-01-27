import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeMaun from "../screens/Home";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const HomeStack = createNativeStackNavigator();

function App() {
  return (
    <HomeStack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          /*  const icons = {
             Home: 'home',
             Profile: 'account',
           }; */

          return <MaterialCommunityIcons name="home" color="red" size={size} />;
        },
      })}
    >
      <HomeStack.Screen
        name="HomeManu"
        component={HomeMaun}
        options={{
          headerShown: false,
          gestureEnabled: false,
          cardOverlayEnabled: false,
        }}
      />
      {/*  <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Tradesman" component={Tradesman}
      />
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="Profile_tras_user" component={profile_tras_user}
        options={{
          title: 'Profile',
        }} />
      <HomeStack.Screen name="workings_tras_user" component={workings_tras_user}
        options={{
          title: 'Profile',
        }} />
      <HomeStack.Screen name="address" component={address}
        options={{
          title: 'Address',
        }} />
      <HomeStack.Screen name="Login" component={Login} />
      <HomeStack.Screen name="Ahow_bank" component={Ahow_bank} />
      <HomeStack.Screen name="chat" component={chat} />
      <HomeStack.Screen name="homeShop" component={HomeShop}
        options={{
          title: 'Shop',
        }} />
      <HomeStack.Screen name="add_shopping" component={Add_shopping}
        options={{
          title: 'Shopping',
        }} />
      <HomeStack.Screen name="add_product" component={Add_product}
        options={{
          title: 'Product',
        }} />
      <HomeStack.Screen name="shop_user" component={Shop_user}
        options={{
          title: 'รายละเอียด',
        }} />
      <HomeStack.Screen name="Notify_repair_work" component={Notify_repair_work}
        options={{
          title: 'เเจ้งงานซ่อม',
        }} />
      <HomeStack.Screen name="Notify_repair_work_user" component={Notify_repair_work_user}
        options={{
          title: 'รายการ เเจ้งงานซ่อม',
        }} />
      <HomeStack.Screen name="JobDescription" component={JobDescription}
        options={{
          title: 'รายละเอียดงานซ่อม',
        }} /> */}
    </HomeStack.Navigator>
  );
}

export default function RouterHome() {
  return <App />;
}
