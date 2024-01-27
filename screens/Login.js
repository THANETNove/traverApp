import React from "react";
import { StyleSheet, View, Text, Button, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/auth"; // ต้องการ import logoutUser

const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    // ทำการ login หรือตรวจสอบข้อมูลของผู้ใช้ที่นี่
    const dataAuth = [{ user: "thanet" }, { password: "12345" }];
    // เมื่อ login สำเร็จ ให้ navigate ไปยังหน้า Home
    dispatch(loginUser(dataAuth));
    navigation.navigate("Home");
  };
  const handleForgot = () => {
    navigation.navigate("ForgotPassword");
  };
  const handleRegister = () => {
    navigation.navigate("Register");
  };
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Home" onPress={handleLogin} />
      <Button title="ForgotPassword" onPress={handleForgot} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
