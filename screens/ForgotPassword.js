import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  Text,
  Button,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import logo from "../assets/LogoLB.png";
import { clickEmail, logoutUser, clearStatus } from "../redux/auth";
import { useSelector, useDispatch } from "react-redux";

const ForgotPassword = ({ navigation }) => {
  const dispatch = useDispatch();
  const { statusEmail, idEmail } = useSelector((state) => state.authUser);
  const [email, onChangeEmail] = React.useState("");

  function isValidEmail(email) {
    // ใช้ regular expression เพื่อตรวจสอบรูปแบบของอีเมล
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  const [errors, setErrors] = useState({
    email: "",
  });

  const validate = () => {
    let isValid = true;
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = "กรุณากรอบข้อมูล";
      isValid = false;
    } else if (!isValidEmail(email)) {
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleGoBack = () => {
    navigation.navigate("Login");
  };

  const handleForgotPassword = () => {
    dispatch(clearStatus());
    if (validate()) {
      dispatch(clickEmail(email, dispatch));
    }
  };

  useEffect(() => {
    setErrors((prevState) => ({
      ...prevState,
      email: "",
    }));
  }, []);

  useEffect(() => {
    if (statusEmail == true) {
      console.log("999");
      navigation.navigate("UpPassword");
    }


    if (statusEmail == false) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Email ไม่ถูกต้อง กรุณาตรวจ Email",
      }));
    }
  }, [statusEmail]);
  useEffect(() => {

    console.log("statusEmail", statusEmail, idEmail);
    if (statusEmail == true) {
      console.log("999");
      navigation.navigate("UpPassword");
    }


  }, [statusEmail]);

  return (
    <View style={styles.container}>
      <Pressable onPress={handleGoBack}>
        <Icon
          name="chevron-left"
          size={20}
          style={styles.chevron}
          color="#0085FF"
        />
      </Pressable>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.box_logo}>
          <Image
            source={logo} // Replace with the actual path to your local image
            style={styles.logo_image}
          />
        </View>

        <View style={styles.boxIndex}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => onChangeEmail(text.toLowerCase())}
            value={email}
            placeholder={"ใส่ Email ที่ใช้ในการสมัครสมาชิก"}
          />
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <Pressable style={styles.button} onPress={handleForgotPassword}>
            <Text style={styles.textLogin}>ยืนยัน</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};
export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 64,
  },
  logo_image: {
    width: 150,
    height: 150,
    marginBottom: 64,
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
    paddingTop: 16,
    width: "100%",
    paddingHorizontal: "10%",
    display: "flex",
    marginBottom: 120,
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
  chevron: {
    marginLeft: "10%",
  },
  error: {
    textAlign: "left",
    color: "red",
    marginBottom: 8,
  },
  box_logo: {
    display: "flex",
    alignItems: "center",
  },
});
