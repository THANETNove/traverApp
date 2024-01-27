import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

export default function Login({ navigation }) {
  const handleLogin = () => {
    // ทำการ login หรือตรวจสอบข้อมูลของผู้ใช้ที่นี่

    // เมื่อ login สำเร็จ ให้ navigate ไปยังหน้า Home
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView>
      <Text>Login</Text>
      <Button title="Login" onPress={handleLogin} />
    </SafeAreaView>
  );
}
