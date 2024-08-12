import React, { useState, useEffect } from "react";
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

import { useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../redux/auth"; // ต้องการ import logoutUser
import logo from "../assets/LogoLB.png";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user, statusUser } = useSelector((state) => state.authUser);

  const [email, onChangeEmail] = React.useState("");
  const [password, onPassword] = React.useState("");

  function isValidEmail(email) {
    // ใช้ regular expression เพื่อตรวจสอบรูปแบบของอีเมล
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const [errors, setErrors] = useState({
    password: "",
    email: "",
  });
  const validate = () => {
    let isValid = true;
    const newErrors = {};

    // Email validation

    if (!email.trim()) {
      newErrors.email = "กรุณากรอบข้อมูล";
      isValid = false;
    } else if (!isValidEmail(email)) {
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
      isValid = false;
    }
    if (!password.trim()) {
      newErrors.password = "กรุณากรอบข้อมูล";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = () => {
    // ทำการ login หรือตรวจสอบข้อมูลของผู้ใช้ที่นี่
    if (validate()) {
      dispatch(loginUser(email, password, dispatch));
    }
  };
  const handleForgot = () => {
    dispatch(logoutUser());
    navigation.navigate("ForgotPassword");
  };
  const handleRegister = () => {
    navigation.navigate("Register");
  };

  useEffect(() => {
    if (user != null) {
      navigation.navigate("Home");
    }
    if (statusUser == "fail") {
      setErrors((prevState) => ({
        ...prevState,
        email: "กรุณาตรวจสอบ Email Password ใหม่",
      }));
    }

  }, [user, statusUser]);

  return (
    <View style={styles.container}>
      <Image
        source={logo} // Replace with the actual path to your local image
        style={styles.logo_image}
      />
      <View style={styles.boxIndex}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeEmail(text.toLowerCase())}
          value={email}
          placeholder={"Email"}
        />
        {errors.email && <Text style={styles.error}>{errors.email}</Text>}

        <TextInput
          style={styles.input}
          onChangeText={(text) => onPassword(text.toLowerCase())}
          value={password}
          placeholder={"Password"}
          secureTextEntry={true}
        />
        {errors.password && <Text style={styles.error}>{errors.password}</Text>}
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
  error: {
    textAlign: "left",
    color: "red",
    marginBottom: 8,
  },
});
