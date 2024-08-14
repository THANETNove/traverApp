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
import PagerView from 'react-native-pager-view';

/* import Carousel from "react-native-snap-carousel"; */
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../redux/auth";
const windowWidth = Dimensions.get("window").width;

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { data, statusData } = useSelector((state) => state.authUser);
  const pagerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);


  const images = [
    require("../assets/image/a1.webp"),
    require("../assets/image/a2.jpeg"),
    require("../assets/image/a3.webp"),
    require("../assets/image/a4.jpeg"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextPage = currentPage + 1 >= images.length ? 0 : currentPage + 1;
      setCurrentPage(nextPage);
      pagerRef.current.setPage(nextPage);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentPage]);


  const renderItem = ({ item }) => {
    return (
      <View style={styles.viewPager}>
        <Image source={item} style={styles.image} />
      </View>
    );
  };

  const handleBoxContent = (index) => {
    dispatch(getData(index, dispatch));
    /*   */

  };

  useEffect(() => {

    //console.log("data", data);
    if (statusData == "success") {
      navigation.navigate("BoxContent");
    }
  }, [statusData])





  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.boxCarousel}>
        <PagerView
          style={styles.pagerView}
          initialPage={0}
          ref={pagerRef}
          onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
        >
          {images.map((image, index) => (
            <View key={index} style={styles.page}>
              <Image source={image} style={styles.image} />
            </View>
          ))}
        </PagerView>
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
          <Text style={styles.textButton}>สถานที่พัก</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => handleBoxContent(3)}>
          <Text style={styles.textButton}>สถานที่ซื้อของฝาก</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 34,
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
  pagerView: {
    flex: 1,
    height: 300, // Adjust height as needed
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
