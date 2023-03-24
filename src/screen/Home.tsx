import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';


export const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Text>sdhauhudashud</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919'
    }
})