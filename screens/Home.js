import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, SafeAreaView } from "react-native";
import Carousel from "react-native-snap-carousel";

const Home = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  viewPager: {
    width: "100%",
    height: 200,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default Home;
