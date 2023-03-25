import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import ClipBoard from '../../assets/Clipboard.png'


export const EmptyList = () => {

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Image source={ClipBoard} />
                <Text style={styles.firstText}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.secondText}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        minHeight: 247,
        width: 327,
        alignItems: 'center',
        borderTopColor: '#333333',
        borderTopWidth: 1,
        justifyContent: "center",
    },
    firstText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#808080',
        marginTop: 16
    },
    secondText: {
        fontSize: 14,
        color: '#808080'
    }
})

