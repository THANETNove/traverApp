import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { registerUser, logoutUser } from "../redux/auth";
import Icon from "react-native-vector-icons/FontAwesome";
import logo from "../assets/LogoLB.png";

import { useSelector, useDispatch } from "react-redux";

const Register = ({ navigation }) => {
  const { user, statusUser } = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    password: "",
    confirm_password: "",
    first_name: "",
    email: "",
    address: "",
    subdistrict: "",
    district: "",
    province: "",
    state: "0",
    zip_code: "",
  });
  const [errors, setErrors] = useState({
    password: "",
    confirm_password: "",
    first_name: "",
    email: "",
    address: "",
    subdistrict: "",
    district: "",
    province: "",
    zip_code: "",
  });
  function isValidEmail(email) {
    // ใช้ regular expression เพื่อตรวจสอบรูปแบบของอีเมล
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.password.trim()) {
      newErrors.password = "กรุณากรอบข้อมูล";
      isValid = false;
    } else if (formData.password.trim().length < 6) {
      newErrors.password = "Password ต้องมีความยาวอย่างน้อย 6 ตัวอักษร";
      isValid = false;
    }

    if (!formData.confirm_password.trim()) {
      newErrors.confirm_password = "กรุณากรอบข้อมูล";
      isValid = false;
    }

    if (formData.password.trim() !== formData.confirm_password.trim()) {
      newErrors.confirm_password = "รหัสผ่านไม่ตรงกัน";
      isValid = false;
    }
    if (!formData.first_name.trim()) {
      newErrors.first_name = "กรุณากรอบข้อมูล";
      isValid = false;
    }
    // Email validation

    if (!formData.email.trim()) {
      newErrors.email = "กรุณากรอบข้อมูล";
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
      isValid = false;
    }
    if (!formData.address.trim()) {
      newErrors.address = "กรุณากรอบข้อมูล";
      isValid = false;
    }
    if (!formData.subdistrict.trim()) {
      newErrors.subdistrict = "กรุณากรอบข้อมูล";
      isValid = false;
    }
    if (!formData.district.trim()) {
      newErrors.district = "กรุณากรอบข้อมูล";
      isValid = false;
    }
    if (!formData.province.trim()) {
      newErrors.province = "กรุณากรอบข้อมูล";
      isValid = false;
    }
    if (!formData.zip_code.trim()) {
      newErrors.zip_code = "กรุณากรอบข้อมูล";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (key, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleLogin = () => {
    // ทำการ login หรือตรวจสอบข้อมูลของผู้ใช้ที่นี่
    dispatch(logoutUser());
    if (validate()) {
      dispatch(registerUser(formData, dispatch));
    }
  };
  const handleGoBack = () => {
    navigation.navigate("Login");
  };

  useEffect(() => {
    if (user != null) {
      navigation.navigate("Home");
    }
  }, [user]);

  useEffect(() => {
    if (statusUser.email_exists) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Email already exists",
      }));
    }
    if (statusUser.name_exists) {
      setErrors((prevState) => ({
        ...prevState,
        first_name: "Name already exists",
      }));
    }
  }, [statusUser]);

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
            onChangeText={(text) => handleChange("email", text.toLowerCase())}
            value={formData.email}
            placeholder={"Email"}
          />
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              handleChange("password", text.toLowerCase())
            }
            value={formData.password}
            placeholder={"Password"}
            secureTextEntry={true}
          />
          {errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}

          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              handleChange("confirm_password", text.toLowerCase())
            }
            value={formData.confirm_password}
            placeholder={"Confirm Password"}
            secureTextEntry={true}
          />
          {errors.confirm_password && (
            <Text style={styles.error}>{errors.confirm_password}</Text>
          )}

          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              handleChange("first_name", text.toLowerCase())
            }
            value={formData.first_name}
            placeholder={"ชื่อ นามสกุล"}
          />
          {errors.first_name && (
            <Text style={styles.error}>{errors.first_name}</Text>
          )}

          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange("address", text.toLowerCase())}
            value={formData.address}
            placeholder={"ที่อยู่"}
          />
          {errors.address && <Text style={styles.error}>{errors.address}</Text>}

          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              handleChange("subdistrict", text.toLowerCase())
            }
            value={formData.subdistrict}
            placeholder={"เเขวง/ตำบล"}
          />
          {errors.subdistrict && (
            <Text style={styles.error}>{errors.subdistrict}</Text>
          )}

          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              handleChange("district", text.toLowerCase())
            }
            value={formData.district}
            placeholder={"เขต/อำเภอ"}
          />
          {errors.district && (
            <Text style={styles.error}>{errors.district}</Text>
          )}

          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              handleChange("province", text.toLowerCase())
            }
            value={formData.province}
            placeholder={"จังหวัด"}
          />
          {errors.province && (
            <Text style={styles.error}>{errors.province}</Text>
          )}

          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              handleChange("zip_code", text.toLowerCase())
            }
            value={formData.zip_code}
            placeholder={"รหัสไปรษณีย์"}
          />
          {errors.zip_code && (
            <Text style={styles.error}>{errors.zip_code}</Text>
          )}

          <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.textLogin}>สมัครสมาชิก</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    /*  alignItems: "center", */
    paddingTop: 64,
  },
  logo_image: {
    width: 150,
    height: 150,
    marginBottom: 32,
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
    width: "100%",
    paddingHorizontal: "10%",
    display: "flex",

    marginBottom: 120,
  },
  box_logo: {
    display: "flex",
    alignItems: "center",
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
});
