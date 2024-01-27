import React from "react";
import { StyleSheet, View, Text, Button, SafeAreaView } from "react-native";

export default function Login({ navigation }) {
  const handleLogin = () => {
    // ทำการ login หรือตรวจสอบข้อมูลของผู้ใช้ที่นี่

    // เมื่อ login สำเร็จ ให้ navigate ไปยังหน้า Home
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
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
