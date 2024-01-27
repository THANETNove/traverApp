import React from "react";
import { StyleSheet, View, Text, Button, SafeAreaView } from "react-native";

const Register = ({ navigation }) => {
  const handleLogin = () => {
    // ทำการ login หรือตรวจสอบข้อมูลของผู้ใช้ที่นี่

    // เมื่อ login สำเร็จ ให้ navigate ไปยังหน้า Home
    navigation.navigate("Home");
  };
  const handleGoBack = () => {
    // ทำการ login หรือตรวจสอบข้อมูลของผู้ใช้ที่นี่

    // เมื่อ login สำเร็จ ให้ navigate ไปยังหน้า Home
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <Button title="Home" onPress={handleLogin} />
      <Button title="GoBack" onPress={handleGoBack} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
