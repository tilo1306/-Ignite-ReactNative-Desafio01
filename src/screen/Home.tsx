import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';
import { TodoInput } from '../components/TodoInput';


export const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <TodoInput />
            <Text>sdhauhudashud</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',

    }
})