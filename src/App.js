import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default function App() {

  return (
    <ScrollView keyboardDismissMode='on-drag'
      horizontal={true} pagingEnabled={true}
      showScrollIndicator={true}
      onMomentumScrollBegin={() => {
        // alert('begin scrolling')
      }}
      onMomentumScrollEnd={() => {
        // alert('end scrolling')
      }}
      onScroll={(e) => {
        // let data = `Scrolled to x = ${e.nativeEvent.contentOffset.x}, y = ${e.nativeEvent.contentOffset.y}`
        // console.log(data);
      }}
      // scrollEventThrottle={100}
    >
      <View style={styles.container}>
        <Text style={styles.text}>
          Search for images...
        </Text>
        <TextInput style={styles.textInput} placeholder="Search for images..." />
      </View>
      <ImageZoom cropWidth={screenWidth}
        cropHeight={screenHeight}
        imageWidth={screenWidth}
        imageHeight={screenWidth * 937 / 750}>
        <Image style={styles.img}
          source={require('../public/images/anh12.jpg')}
          resizeMode='cover' />
      </ImageZoom>
      <ImageZoom cropWidth={screenWidth}
        cropHeight={screenHeight}
        imageWidth={screenWidth}
        imageHeight={screenWidth * 937 / 750}>
        <Image style={styles.img}
          source={require('../public/images/anh12.jpg')}
          resizeMode='contain' />
      </ImageZoom>
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 22,
  },
  textInput: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
  },
  img: { width: screenWidth, height: screenWidth * 937 / 750,margin:10 }

});
