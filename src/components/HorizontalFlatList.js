import React from 'react'
import { View, StyleSheet, FlatList, Text, Image, TouchableOpacity } from 'react-native'
import { horizontalFlatListData } from '../../data/dataWeather';
import Icon from 'react-native-vector-icons/Ionicons';
function HorizontalFlatListItem({ item, index, parentFlatList }) {
    return (
        <View style={styles.post}>
            <TouchableOpacity style={styles.imgBackground} onPress={() => {
                alert(`You pressed ${item.hour}`)
            }}>

            </TouchableOpacity>
            <Text style={styles.text}>
                {item.hour}
            </Text>
            <Icon name={item.status} size={30} color={"white"} />
            <Text style={styles.text}>
                {item.degrees} C
            </Text>
        </View>
    )
}


export default function HorizontalFlatList() {
    return (
        <View style={styles.container}>
            <View style={styles.imgBackground}>
                <Image style={styles.img} source={require('../../public/images/anh12.jpg')} />
            </View>
            <View style={styles.item}>
               
                <Text style={styles.heading}>
                    Weather Forecast
                </Text>
                <FlatList style={styles.flatList} horizontal={true}
                    data={horizontalFlatListData}
                    renderItem={({ item, index }) => {
                        return (
                            <HorizontalFlatListItem key={index} item={item} index={index} parentFlatList={this} />
                        )
                    }}>

                </FlatList>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    item: {
        height: 150,
    },
    flatList: {
        backgroundColor: 'black',
        opacity: 0.5,
    },
    post: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: 90,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        margin: 4,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        margin: 20,
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'transparent',
        margin: 10
    },
    imgBackground: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },
    img: {
        flex: 1,
        flexDirection: 'column',
        width: null,
        height: null,
        backgroundColor: 'transparent',
        justifyContent: 'center',
    }


})
