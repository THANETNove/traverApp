// ImageModal.js
import React, { useState } from 'react';
import {
    Modal,
    View,
    Image,
    StyleSheet,
    Dimensions,
    Pressable,
} from 'react-native';

const ImageModal = ({ imageUrl, onClose }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleOpen = () => {
        setModalVisible(true);
    };

    const handleClose = () => {
        setModalVisible(false);
        if (onClose) onClose(); // Call the onClose callback if provided
    };

    React.useEffect(() => {
        if (imageUrl) {
            handleOpen();
        }
    }, [imageUrl]);

    return (
        <Modal
            visible={modalVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={handleClose}
        >
            <View style={styles.modalContainer}>
                <Pressable style={styles.modalBackground} onPress={handleClose}>
                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.modalImage}
                    />
                </Pressable>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalBackground: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalImage: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.7,
        resizeMode: 'contain',
    },
});

export default ImageModal;
