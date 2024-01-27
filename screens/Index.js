import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";

const Index = ({ navigation }) => {
  const user = useSelector((state) => state.authUser.user);

  console.log("user", user);
  const handleLogin = () => {
    // ทำการ login หรือตรวจสอบข้อมูลของผู้ใช้ที่นี่

    // เมื่อ login สำเร็จ ให้ navigate ไปยังหน้า Home
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <Text>Index</Text>
      <Button title="Index" onPress={handleLogin} />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
