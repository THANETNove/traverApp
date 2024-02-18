// Home.js
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/auth"; // ต้องการ import logoutUser
import { useSelector } from "react-redux";
import logo from "../assets/LogoLB.png";

const Profile = ({ navigation }) => {
  const user = useSelector((state) => state.authUser.user);
  const dispatch = useDispatch();

  const [data, setData] = useState(user);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigation.navigate("Index");
  };

  useEffect(() => {
    setData(user);
  }, [user]);

  return (
    <SafeAreaView style={styles.container}>
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
          <Text style={styles.text}>
            ชื่อ-นามสกุล : {data && data.first_name}
          </Text>
          <Text style={styles.text}>Email : {data && data.email}</Text>
          <Text style={styles.text}>ที่อยู่ : {data && data.address}</Text>
          <Text style={styles.text}>
            เเขวง/ตำบล : {data && data.subdistrict}
          </Text>
          <Text style={styles.text}>เขต/อำเภอ : {data && data.district}</Text>
          <Text style={styles.text}>จังหวัด : {data && data.province}</Text>
          <Text style={styles.text}>
            รหัสไปรษณีย์ : {data && data.zip_code}
          </Text>
          <Pressable onPress={handleLogout}>
            <View style={styles.logout}>
              <Text style={styles.textLogout}>Logout</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  box_logo: {
    display: "flex",
    alignItems: "center",
  },
  logo_image: {
    width: 150,
    height: 150,
    marginBottom: 32,
  },
  boxIndex: {
    width: "100%",
    paddingHorizontal: "10%",
    display: "flex",
    marginBottom: 120,
  },
  text: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 18,
    marginVertical: 4,
  },
  logout: {
    marginTop: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 45,
    backgroundColor: "#0085FF",
    borderRadius: 50,
  },
  textLogout: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});
