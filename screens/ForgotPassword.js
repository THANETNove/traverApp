import React from "react";
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

const ForgotPassword = ({ navigation }) => {
  const handleGoBack = () => {
    // ทำการ login หรือตรวจสอบข้อมูลของผู้ใช้ที่นี่

    // เมื่อ login สำเร็จ ให้ navigate ไปยังหน้า Home
    navigation.navigate("Login");
  };
  const handleForgotPassword = () => {
    // ทำการ login หรือตรวจสอบข้อมูลของผู้ใช้ที่นี่

    // เมื่อ login สำเร็จ ให้ navigate ไปยังหน้า Home
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.container}>
      <Text>ForgotPassword</Text>
      <Button title="GoBack" onPress={handleGoBack} />
    </View> */}
      <Pressable onPress={handleGoBack}>
        <Icon
          name="chevron-left"
          size={20}
          style={styles.chevron}
          color="#0085FF"
        />
      </Pressable>
      <ScrollView>
        <View style={styles.boxIndex}>
          <Image
            source={logo} // Replace with the actual path to your local image
            style={styles.logo_image}
          />

          <TextInput
            style={styles.input}
            /*  onChangeText={onPassword}
          value={password} */
            placeholder={"ใส่ Email ที่ใช้ในการสมัครสมาชิก"}
          />

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
    alignItems: "center",
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
});
