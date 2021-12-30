import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import { sectionListData } from '../../data/sectionData';
function SectionListItem({ item, index }) {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>
                {item.name}
            </Text>
            <Text style={styles.text}>
                {item.description}
            </Text>
            <View style={styles.lineBottom}/>
        </View>
    )
}
function SectionHeader({ section }) {
    return (
        <View style={styles.header} >
            <Text style={styles.textHeading}>
                {section.title}
            </Text>
        </View>
    )
}
export default function SectionListBasic() {
    return (
        <View style={styles.container}>
            <SectionList
                renderItem={({ item, index }) => {
                    return (<SectionListItem item={item} index={index}
                        keyExtractor={(item, index) => item.name} />

                    )
                }}
                renderSectionHeader={({ section }) => {
                    return (<SectionHeader section={section} />);
                }}
                sections={sectionListData}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(98,197,184)'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgb(173, 252, 250)',
        marginLeft: 20,
        marginRight: 10,
    },
    header: {
        flex: 1,
        backgroundColor: 'rgb(77,120,140)'
    },
    textHeading: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        margin: 20
    },
    lineBottom: {
        backgroundColor: 'rgb(77,120,140)',
        height: 1,
        marginLeft: 20,
        marginRight: 10,
        margin:4
    }
})
