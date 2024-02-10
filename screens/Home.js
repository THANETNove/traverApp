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

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>HOME</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
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
