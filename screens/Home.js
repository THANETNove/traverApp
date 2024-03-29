import React, { useRef, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import Carousel from "react-native-snap-carousel";
const windowWidth = Dimensions.get("window").width;

const Home = ({ navigation }) => {
  const images = [
    require("../assets/image/a1.webp"),
    require("../assets/image/a2.jpeg"),
    require("../assets/image/a3.webp"),
    require("../assets/image/a4.jpeg"),
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.viewPager}>
        <Image source={item} style={styles.image} />
      </View>
    );
  };

  const handleBoxContent = (index) => {
    console.log("index", index);
    navigation.navigate("BoxContent");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.boxCarousel}>
        <Carousel
          data={images}
          renderItem={renderItem}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          autoplay={true}
          loop={true}
          layout={"stack"}
          layoutCardOffset={`18`}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={styles.category}>หมวดหมู่แหล่งท่องเที่ยว</Text>
        <Pressable style={styles.button} onPress={() => handleBoxContent(1)}>
          <Text style={styles.textButton}>สถานที่แหล่งท่องเที่ยว</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => handleBoxContent(2)}>
          <Text style={styles.textButton}>สถานที่แหล่งท่องเที่ยว</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => handleBoxContent(3)}>
          <Text style={styles.textButton}>สถานที่แหล่งท่องเที่ยว</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  boxCarousel: {
    width: "100%",
    height: 200,
  },
  viewPager: {
    width: "100%",
    height: 200,
  },
  safeArea: {
    zIndex: 1,
    elevation: 1,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  category: {
    marginTop: 44,
    fontSize: 24,
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    backgroundColor: "#0085FF",
    width: 280,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  textButton: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});
