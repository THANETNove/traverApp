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
import { updatePassword, logoutUser } from "../redux/auth";
import { useSelector, useDispatch } from "react-redux";

const UpPassword = ({ navigation }) => {
  const dispatch = useDispatch();
  const { statusUpdatePassword, idEmail } = useSelector(
    (state) => state.authUser
  );
  const [password, onPassword] = React.useState("");

  const [errorsPass, setErrorsPass] = useState({
    password: "",
  });

  const validatePass = () => {
    let isValid = true;
    const newErrors = {};
    if (!password.trim()) {
      newErrors.password = "กรุณากรอบข้อมูล";
      isValid = false;
    } else if (password.trim().length < 6) {
      newErrors.password = "Password ต้องมีความยาวอย่างน้อย 6 ตัวอักษร";
      isValid = false;
    }

    setErrorsPass(newErrors);
    return isValid;
  };

  const handleGoBack = () => {
    navigation.navigate("ForgotPassword");
  };

  const handleNewPassword = () => {
    if (validatePass()) {

      if (idEmail) {
        dispatch(updatePassword(idEmail, password, dispatch));
      }
    }
  };

  useEffect(() => {

    console.log("statusUpdatePassword", statusUpdatePassword);
    if (statusUpdatePassword == true) {
      navigation.navigate("Login");
    }


  }, [statusUpdatePassword]);

  useEffect(() => {

  }, []);
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
            onChangeText={(text) => onPassword(text.toLowerCase())}
            value={password}
            placeholder={"Password"}
            secureTextEntry={true}
          />
          {errorsPass.password && (
            <Text style={styles.error}>{errorsPass.password}</Text>
          )}

          <Pressable style={styles.button} onPress={handleNewPassword}>
            <Text style={styles.textLogin}>ยืนยัน</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};
export default UpPassword;

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
