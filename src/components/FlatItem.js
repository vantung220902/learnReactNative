import React, { memo, useState } from 'react';
import flatListData from '../../data/data'
import Swipeout from 'react-native-swipeout'
import {Text, View, Image, Alert, Dimensions} from 'react-native'
const screenWidth = Dimensions.get('window').width;
function FlatListItem({ item, index, refreshFlatList, onOpenUpdate }) {
    const [activeRowKey, setActiveRowKey] = useState(null)
    const swipeSettings = {
        autoClose: true,
        onClose: (secId, rowId, direction) => {
            if (activeRowKey !== null) {
                setActiveRowKey(null)
            }
        },
        onOpen: (secId, rowId, direction) => {
            setActiveRowKey(index)
        },
        right: [
            {
                onPress: () => {
                    onOpenUpdate(item)
                },
                text: 'Edit', type: 'primary',
            },
            {
                onPress: () => {
                    const deletingRow = activeRowKey
                    Alert.alert('Alert', 'Are you sure you want to delete ?',
                        [
                            {
                                text: 'No',
                                onPress: () => {
                                    console.log('Cancel Pressed')

                                }
                                , style: 'cancel'
                            },
                            {
                                text: 'Yes',
                                onPress: () => {
                                    flatListData.splice(index, 1)
                                    refreshFlatList(deletingRow)
                                }
                            }
                        ],
                        {
                            cancelable: true
                        }
                    )


                },
                text: 'Delete', type: 'delete'
            },
        ],
        rowId: index,
        sectionId: 1,
        style: {
            width: screenWidth,
        }
    };
    return (
        <>
            <Swipeout {...swipeSettings} key={item.id}>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: 'mediumseagreen'
                    }}>
                        <Image
                            source={require('../../public/images/anh12.jpg')}
                            style={{ width: 100, height: 100, margin: 5 }}
                        >
                        </Image>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            height: 100
                        }}>
                            <Text style={{
                                color: 'white',
                                padding: 4,
                                fontSize: 16,
                            }}>{item.title}</Text>
                            <Text style={{
                                color: 'white',
                                padding: 4,
                                fontSize: 16,
                            }}>{item.body}</Text>
                        </View>
                    </View>
                    <View style={{
                        height: 1,
                        backgroundColor: 'white'
                    }}>

                    </View>
                </View>
            </Swipeout>

        </>
    )
}
export default memo(FlatListItem);