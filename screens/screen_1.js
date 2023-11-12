import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
const screen_1 = ({ navigation }) => {
    const [btn, setBtn] = useState({});
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to Cafe world</Text>
            <Image source={require('../assets/img1.png')} style={styles.img}></Image>
            <Image source={require('../assets/img2.png')} style={styles.img}></Image>
            <Image source={require('../assets/img3.png')} style={styles.img}></Image>
            <Pressable style={styles.btn} onPress={() => { navigation.navigate('screen_2') }}>
                <Text style={styles.heading}>Get Started</Text>
            </Pressable>
        </View>
    )
}

export default screen_1

const styles = StyleSheet.create({
    heading: {
        fontSize: 25
        , fontWeight: 700,

    },
    btn: {
        width: '50%',
        backgroundColor: 'lightblue',
        borderRadius: '10px',
        alignItems: 'center',
        padding: 10,
    },
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'lightgray',
        paddingTop: 25,
        gap: 20,
    },
    img: {
        width: '70%',
        height: '150px',
        borderRadius: '10px',

    }

})