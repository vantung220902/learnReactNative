import React, { useState } from 'react';
import { Text, Dimensions, StyleSheet, TextInput } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../../data/data';
const screenWidth = Dimensions.get('window').width;
export default function MyModal({ isOpen, onClose }) {
    const [newPostTitle, setTitle] = useState('');
    const [newPostBody, setNewPostBody] = useState('');
    const [newImg, setNewImg] = useState('');
    const generateKey = (numberOfCharacters) => {
        return require('random-string')({ length: numberOfCharacters });
    }
    return (
        <Modal
            style={styles.modal}
            position='center' backdrop={true}
            isOpen={isOpen}
            onClosed={() => {
                onClose();
            }}>
            <Text style={styles.text}>

                New Post's Information
            </Text>
            <TextInput style={styles.input}
                placeholder="Enter new Post Title"
                onChangeText={(text) => {
                    setTitle(text)
                }}
                value={newPostTitle}
            />
            <TextInput style={styles.input}
                placeholder="Enter new Post Body"
                onChangeText={(text) => {
                    setNewPostBody(text)
                }}
                value={newPostBody}
            />
            <TextInput style={styles.input}
                placeholder="Enter new Post Img"
                onChangeText={(text) => {
                    setNewImg(text)
                }}
                value={newImg}
            />
            <Button style={styles.button}
                containerStyle={
                    styles.containerStyle
                }
                onPress={(event) => {
                    if (newPostTitle.length === 0) {
                        alert('You must enter a post title')
                        return;
                    }
                    const newPost = {
                        id: generateKey(24),
                        title: newPostTitle,
                        body: newPostBody,
                        imgUrl: 'https://res.cloudinary.com/the-roap-trip/image/upload/v1639034120/rr1cvttdd1rjxrcgbgyw.jpg'
                    }
                    flatListData.push(newPost);
                    onClose();
                }}>
                Save
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
