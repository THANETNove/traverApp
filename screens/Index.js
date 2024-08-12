import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Pressable,
  SafeAreaView,
} from "react-native";
import { useSelector } from "react-redux";
import logo from "../assets/LogoLB.png";

const Index = ({ navigation }) => {
  const user = useSelector((state) => state.authUser.user);


  const handleLogin = () => {
    // ทำการ login หรือตรวจสอบข้อมูลของผู้ใช้ที่นี่

    if (user) {
      navigation.navigate("Home");
    } else {
      navigation.navigate("Login");
    }

    // เมื่อ login สำเร็จ ให้ navigate ไปยังหน้า Home
  };
  return (
    <View style={styles.container}>
      <Image
        source={logo} // Replace with the actual path to your local image
        style={styles.logo_image}
      />
      <Text style={styles.textIndex}>
        ประวัติโดยย่อแบบคร่าวๆ ก่อนโหลดหน้าจอสู่หน้าล็อคอินขั้นต่อไป
      </Text>
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.textLogin}>เริ่มใช้งาน</Text>
      </Pressable>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: "35%",
  },
  logo_image: {
    width: 300,
    height: 300,
  },
  textIndex: {
    fontSize: 16,
    marginTop: 42,
    marginBottom: 42,
    width: "60%",
    textAlign: "center",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 170,
    height: 42,
    borderRadius: 50,
    backgroundColor: "#0085FF",
  },
  textLogin: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
