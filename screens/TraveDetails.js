import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Button, Dimensions, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { apiUrlImage as url } from "../config";
import RenderHtml from 'react-native-render-html';
import { WebView } from 'react-native-webview';




const TraveDetails = ({ navigation }) => {
    const [status, setStatus] = useState(0);
    const { data } = useSelector((state) => state.authUser);
    const dispatch = useDispatch();
    const route = useRoute();
    const [isPaused, setIsPaused] = React.useState(false);


    const { placeData } = route.params; // รับ data ที่ส่งมาจาก BoxContent

    const handleGoBack = () => {
        navigation.goBack();

    };
    const handlePlayPause = () => {
        setIsPaused(!isPaused);
    };

    const Details = () => {
        let img = JSON.parse(placeData.image);
        const htmlContent = placeData.history_tourist;
        const tagsStyles = {
            p: {
                fontSize: 16, // ขนาดตัวอักษรสำหรับแท็ก <p>
                color: '#000', // สีตัวอักษร
            },
            a: {
                color: '#007BFF', // สีลิงก์
                fontSize: 16, // ขนาดตัวอักษรสำหรับแท็ก <a>
            },
            // คุณสามารถเพิ่มการกำหนดสไตล์อื่นๆ ตามต้องการ
        };
        return (
            <>

                {img.map((imagePath, index) => (
                    <Image
                        key={index}
                        source={{ uri: `${url}${imagePath}` }} // สร้าง URL ของภาพ
                        style={styles.image}
                    />
                ))}
                <View style={styles.detaisBox}>
                    <Text style={styles.history}>ประวัติ</Text>
                    <RenderHtml
                        contentWidth={styles.container.width}
                        source={{ html: htmlContent }}
                        tagsStyles={tagsStyles} //
                    />
                </View>
            </>
        )
    }

    const Video = () => {

        console.log("placeData.video ", placeData.video);
        return (
            <View style={styles.detaisBox}>

                <WebView
                    source={{ uri: placeData.video }}
                    style={styles.webview}
                />

            </View>
        )
    }




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

            <ScrollView style={styles.box} showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false} >
                <Text style={styles.headerName}>ชื่อสถานที่ : {placeData.name}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={status == 0 ? styles.buttonBlue : styles.button} onPress={() => setStatus(0)}>
                        <Text style={styles.buttonText}>ประวัติ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={status == 1 ? styles.buttonBlue : styles.button} onPress={() => setStatus(1)}>
                        <Text style={styles.buttonText}>วิดีโอ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={status == 2 ? styles.buttonBlue : styles.button} onPress={() => setStatus(2)}>
                        <Text style={styles.buttonText}>แผนที่</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.statusBox}>
                    {status == 0 ? Details() : status == 1 ? Video() : <></>}

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16
    },
    chevron: {
        marginRight: 8,
    },
    headerName: {
        fontSize: 18,
        backgroundColor: "#ffff",
        padding: 24,
        fontWeight: "bold",
        borderRadius: 8,
    },
    box: {
        marginTop: 32,


    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // จัดเรียงปุ่มให้ห่างกัน
        marginTop: 20,
    },
    button: {
        flex: 1,
        marginHorizontal: 8, // ระยะห่างระหว่างปุ่ม
        paddingVertical: 12,
        backgroundColor: '#80A484',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonBlue: {
        backgroundColor: '#0085FF', // สีของปุ่มเมื่อ status = 1
        flex: 1,
        marginHorizontal: 8, // ระยะห่างระหว่างปุ่ม
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
    statusBox: {
        marginTop: 32
    },
    image: {
        width: "100%", // กำหนดความกว้างของภาพ
        height: 250, // กำหนดความสูงของภาพ
        marginBottom: 16,
        borderRadius: 8, // เพิ่มมุมโค้งให้ภาพ
    },
    detaisBox: {
        backgroundColor: "#ffff",
        padding: 24,
        height: height
    },
    detaisBox: {
        backgroundColor: "#ffff",
        padding: 24,
        height: "100%"
    },
    history: {
        fontSize: 18,
        backgroundColor: "#ffff",

        fontWeight: "bold",
        borderRadius: 8,
    },
    webview: {
        width: '100%',
        height: 200,
    },
});

export default TraveDetails;
