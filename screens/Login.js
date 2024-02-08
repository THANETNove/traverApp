import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TextInput,
  Pressable,
  SafeAreaView,
} from "react-native";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/auth"; // ต้องการ import logoutUser
import logo from "../assets/LogoLB.png";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  const [text, onChangeText] = React.useState("");
  const [password, onPassword] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

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
      <Image
        source={logo} // Replace with the actual path to your local image
        style={styles.logo_image}
      />
      <View style={styles.boxIndex}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder={"Username"}
        />
        <TextInput
          style={styles.input}
          onChangeText={onPassword}
          value={password}
          placeholder={"Password"}
        />
        <Pressable onPress={handleForgot}>
          <Text style={styles.forgotPassword}>ลืมรหัสผ่าน</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.textLogin}>เริ่มใช้งาน</Text>
        </Pressable>
      </View>
      <Pressable onPress={handleRegister}>
        <Text style={styles.register}>
          ยังไม่มีบัญชีกับเรา? <Text style={styles.create}>สร้างได้เลย</Text>
        </Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  logo_image: {
    marginTop: 64,
    width: 250,
    height: 250,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "darkgray",
    marginVertical: 8,
    borderWidth: 1,
    padding: 10,
    borderRadius: 32,
  },
  boxIndex: {
    paddingTop: 42,
    width: "100%",
    paddingHorizontal: "10%",
  },
  button: {
    marginTop: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 42,
    borderRadius: 50,
    backgroundColor: "#0085FF",
  },
  textLogin: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 8,
    textAlign: "right",
  },
  register: {
    marginTop: 16,
  },
  create: {
    color: "#0085FF",
  },
});
