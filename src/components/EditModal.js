import React, { useState } from 'react';
import {Text, Dimensions, StyleSheet, TextInput } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../../data/data';
const screenWidth = Dimensions.get('window').width;
export default function EditModal({ isOpen, onClose, post }) {
    const [newPostTitle, setTitle] = useState('');

    return (
        <Modal
            style={styles.modal}
            position='center' backdrop={true}
            isOpen={isOpen}
            onClosed={() => {
                onClose();
            }}>
            <Text style={styles.text}>

                Post's Information
            </Text>
            <TextInput style={styles.input}
                placeholder="Enter Post Title"
                onChangeText={(text) => {
                    setTitle(text)
                }}
                defaultValue={post ?post.title : ""}
            />
            <Button style={styles.button}
                containerStyle={
                    styles.containerStyle
                }
                onPress={() => {
                    const index = flatListData.findIndex((item) => {
                       
                        return item.id === post.id;
                    });
                    if (index !== -1) {
                        flatListData[index].title = newPostTitle;
                    }
                    onClose();
                }}>
                Update
            </Button>
        </Modal>
    )
}

const styles = StyleSheet.create({

    modal: {
        justifyContent: 'center',
        shadowRadius: 10,
        width: screenWidth - 80,
        height: 280,
        zIndex: 100,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
    },
    input: {
        height: 40,
        borderBottomColor: 'gray',
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
        borderBottomWidth: 1
    },
    button: {
        fontSize: 18,
        color: 'white',
    },
    containerStyle: {
        padding: 8,
        marginLeft: 70,
        marginRight: 70,
        height: 40,
        borderRadius: 6,
        backgroundColor: 'mediumseagreen'
    }
});
