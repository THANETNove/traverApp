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
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const BoxContent = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.navigate("Home");
  };
  const data = Array.from({ length: 10 }, (_, index) => index + 1); // สร้าง array ขนาด 10 โดยให้ค่าเริ่มต้นเป็น 1

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={handleGoBack}>
        <Icon
          name="chevron-left"
          size={20}
          style={styles.chevron}
          color="#0085FF"
        />
      </Pressable>

      <View style={styles.box}>
        <TextInput
          style={styles.input}
          placeholder={"ค้นหา ชื่อสถานที่"}
          secureTextEntry={true}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.scrollBox}>
            {data.map((item, index) => (
              <Pressable key={index} style={styles.boxContent}>
                <View>
                  <Image
                    source={require("../assets/image/a4.jpeg")} // Replace with the actual path to your local image
                    style={styles.image}
                  />
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.textHead}>วัดพระศรีรัตนศาสดาราม</Text>
                  <Text style={styles.time}>เวลาทำการ null-null น.</Text>
                  <View style={styles.boxIcon}>
                    <Icon
                      name="eye"
                      size={20}
                      style={styles.chevron}
                      color="#0085FF"
                    />
                    <Text> 40</Text>
                    <Icon
                      name="heart"
                      size={20}
                      style={styles.chevron2}
                      color="#0085FF"
                    />
                    <Text> 40</Text>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default BoxContent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  scrollBox: {
    height: "100%",
    marginBottom: 164,
  },
  box: {
    marginTop: 0,
  },
  boxContent: {
    marginTop: 16,
    width: "100%",
    height: 120,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
  },
  image: {
    width: 85,
    height: 60,
  },
  viewText: {
    marginLeft: 16,
    width: "75%",
  },
  textHead: {
    fontSize: 18,
  },
  time: {
    fontSize: 14,
    color: "#9C9494",
  },
  boxIcon: {
    marginTop: 16,
    flexDirection: "row",
  },
  chevron: {
    marginRight: 8,
  },
  chevron2: {
    marginLeft: 32,
    marginRight: 8,
  },
  input: {
    marginTop: 20,
    width: "100%",
    height: 40,
    borderColor: "darkgray",
    marginVertical: 8,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },
});
