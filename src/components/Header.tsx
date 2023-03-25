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
        alignItems: 'center',
        backgroundColor: '#0D0D0D',
        height: 173,
        paddingTop: getStatusBarHeight(true) + 16,
        width: '100%'
    },
    img: {
        height: 32,
        justifyContent: 'center',
        marginTop: 24,
    }
})
