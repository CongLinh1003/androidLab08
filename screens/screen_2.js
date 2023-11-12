import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const screen_2 = ({ Navigation }) => {
    const [coffeeShops, setCoffeeShops] = useState([]);
    // Function to fetch data from your database
    const fetchData = async () => {
        try {
            const response = await fetch('https://65096249f6553137159b52a5.mockapi.io/coffeeshops');
            const data = await response.json();
            setCoffeeShops(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(); // Fetch data when the component mounts
    }, []);

    return (
        <View style={styles.container} >
            <View style={styles.f_h}>
                <Pressable>
                    <Image style={styles.ico} source={require('../assets/Frame.png')}></Image>
                </Pressable>
                <Text style={styles.heading}>Shops Near Me</Text>
                <Pressable>
                    <Image style={styles.ico} source={require('../assets/Image 209.png')}></Image>
                </Pressable>
            </View>
            <FlatList
                data={coffeeShops}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.shopItem}>
                        <Image source={{ uri: item.img }} style={styles.shopImage} />
                        <Text>{item.name}</Text>
                        <Text>{item.address}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default screen_2

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
        backgroundColor: 'white',
        gap: 20,
    },
    img: {
        width: '70%',
        height: '150px',
        borderRadius: '10px',

    },
    ico: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    f_h: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 15,
        padding: 15,

    },
    shopItem: {
        margin: 10,
    },
    shopImage: {
        width: 200,
        height: 150,
    },
})