// Home.js
import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/auth"; // ต้องการ import logoutUser

const Home = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <View>
      <Text>Welcome to Home Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Home;
