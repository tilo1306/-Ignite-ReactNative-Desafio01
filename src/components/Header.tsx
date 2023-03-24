import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import logoImg from '../../assets/logo/Logo.png';

export const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={logoImg} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: getStatusBarHeight(true) + 16,
        height: 173,
        backgroundColor: '#0D0D0D',
        alignItems: 'center',

    },
    img: {
        marginTop: 24,
        justifyContent: 'center',
        height: 32
    }
})
