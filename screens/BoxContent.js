import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { apiUrlImage as url } from "../config";
import ImageModal from "./ImageModal";
import { StatusBar } from 'expo-status-bar';
import { useSelector, useDispatch } from "react-redux";
import { getData, clearStatus, addLink } from "../redux/auth";
import { useFocusEffect } from '@react-navigation/native'; // นำเข้าที่ถูกต้อง


const BoxContent = ({ navigation }) => {
  const { data, statusLink } = useSelector((state) => state.authUser);
  const [traveData, setTraveData] = useState(data);
  const [searchText, setSearchText] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const dispatch = useDispatch();
  const handleGoBack = () => {
    navigation.goBack();
  };

  useFocusEffect(
    useCallback(() => {
      // Fetch new data when the screen is focused
      dispatch(getData(data && data[0].category, dispatch));  // Replace `getData()` with your actual action and parameters if needed

      // Optionally, return a cleanup function if necessary
      return () => { };
    }, [dispatch])
  );


  useMemo(() => {
    setTraveData(data); // Update traveData when data in Redux changes


    if (statusLink == "success") {
      dispatch(clearStatus());
    }

  }, [data, dispatch]);


  useEffect(() => {
    console.log("statusLink", statusLink);

    //console.log("data", data);
    if (statusLink == "success") {
      dispatch(getData(data && data[0].category, dispatch));
    }
  }, [statusLink])

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setTraveData(filtered);
  };

  const openModal = (imageUri) => {
    setSelectedImage(imageUri);
  };

  const closeModal = () => {
    setSelectedImage('');
  };

  const onPlaces = (data) => {

    navigation.navigate("TraveDetails", { placeData: data });

  }
  const onLink = (id) => {

    dispatch(addLink(id, dispatch));

  }
  // 

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
          secureTextEntry={false}
          onChangeText={handleSearch}
          value={searchText}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.scrollBox}>
            {traveData && traveData.length > 0 ? (
              traveData.map((item, index) => {

                let img = JSON.parse(item.image);
                const urlImag = `${url}${img[0]}`;
                return (
                  <Pressable key={index} style={styles.boxContent} onPress={() => onPlaces(item)}>
                    <View>
                      <Pressable onPress={() => openModal(urlImag)}>
                        <Image
                          source={{ uri: urlImag }}
                          style={styles.image}
                        />
                      </Pressable>
                    </View>
                    <View style={styles.viewText}>
                      <Text style={styles.textHead}>{item.name}</Text>
                      <Text style={styles.time}>เวลาทำการ {item.opening_closing_time}l น.</Text>
                      <View style={styles.boxIcon}>
                        <Icon
                          name="eye"
                          size={20}
                          style={styles.chevron}
                          color="#0085FF"
                        />
                        <Text> {item.view}</Text>
                        <Pressable onPress={() => onLink(item.id)}>
                          <Icon
                            name="heart"
                            size={20}
                            style={styles.chevron2}
                            color="#0085FF"
                          />
                        </Pressable>
                        <Text> {item.like > 0 && item.like}</Text>
                      </View>
                    </View>
                  </Pressable>
                );
              })
            ) : (
              <View style={styles.alertContainer}>
                <Text style={styles.alertText}>ไม่มีข้อมูลที่จะแสดง</Text>
              </View>
            )}
          </View>
        </ScrollView>
      </View>

      {/* Use ImageModal Component */}
      <ImageModal
        imageUrl={selectedImage}
        onClose={closeModal}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 44,
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
  alertContainer: {
    marginTop: 64,
    alignItems: 'center',
  },
  alertText: {
    fontSize: 18,
    color: "#7A7474",
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

export default BoxContent;
