import React, { useState, useRef, useEffect, useCallback } from 'react'
import {
    FlatList, StyleSheet,
    View, Image, Dimensions
    , TouchableHighlight, RefreshControl
} from 'react-native'
import MyModal from './MyModal';
import EditModal from './EditModal';
import { getAllPost } from '../../networking/Server';
import FlatListItem from './FlatItem';
const screenWidth = Dimensions.get('window').width;

export default function FlatListExample() {
    const [deletedRowKey, setDeletedRowKey] = useState(null);
    const [dataList, setDataList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const refreshFlatList = (deletedKey) => {
        setDeletedRowKey(deletedKey)
    };
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenUpdate, setIsOpenUpdate] = useState(false);
    const [post, setPost] = useState(null);
    const flatList = useRef();
    useEffect(() => {
        refreshDataFromServer();
    }, []);
    const refreshDataFromServer = () => {
        setRefreshing(true);
        getAllPost().then((posts) => {
            setDataList(posts);
            setRefreshing(false);
        }).catch((error) => {
            setDataList([]);
            setRefreshing(false);

        });

    }
    const onClose = () => {
        setIsOpen(false);
      
    }
    const onOpenUpdate = (post) => {
        setIsOpenUpdate(true);
        setPost(post);

    }
    const onCloseUpdate = () => {
        setIsOpenUpdate(false);
    }
    const handleRefresh = () => {
        refreshDataFromServer();
    }
  
    return (
        <View style={styles.container}>
            <View style={styles.itemAdd}>
                <TouchableHighlight style={styles.mr10}
                    onPress={() => {
                        setIsOpen(true);
                    }}>
                    <Image style={styles.imgAdd} source={require('../../public/images/add.png')} />
                </TouchableHighlight>
            </View>
            <FlatList ref={flatList} data={dataList || []}
                initialNumToRender={7} 
                renderItem={useCallback(({ item, index }) => {
                    // console.log(`Item= ${JSON.stringify(item)},Index= ${index}`)
                    return (
                        <FlatListItem item={item} index={index} key={index}
                            refreshFlatList={refreshFlatList} onOpenUpdate={onOpenUpdate}
                        />
                    )
                })} refreshControl={<RefreshControl refreshing={refreshing}
                    onRefresh={handleRefresh}
                />}>
            </FlatList>
            <MyModal isOpen={isOpen} onClose={onClose} />
            <EditModal isOpen={isOpenUpdate} post={post} onClose={onCloseUpdate} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
        padding: 4
    },
    itemAdd: {
        height: 50,
        width: screenWidth,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    mr10: {
        marginRight: 10
    },
    imgAdd: {
        width: 35,
        height: 35
    }
});
