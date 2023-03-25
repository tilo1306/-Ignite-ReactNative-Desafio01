import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ITask } from '../screen/Home'

interface ITasksListProps {
    tasks: ITask[];
}
export const Count = ({ tasks }: ITasksListProps) => {

    const findListDoneTrue = tasks.filter(task => task.done === true)
    const findListDoneFalse = tasks.filter(task => task.done === false)

    return (
        <View style={styles.container}>
            <View style={styles.areaTextCount}>
                <Text style={styles.textCreated}>Criadas</Text>
                <View style={styles.areaCount}>
                    <Text style={{ color: 'white' }}>{findListDoneFalse.length}</Text>
                </View>
            </View>
            <View style={styles.areaTextCount}>
                <Text style={styles.textConcluded}>Concluídas</Text>
                <View style={styles.areaCount}>
                    <Text style={{ color: 'white' }}>{findListDoneTrue.length}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 32,
        width: 327,
        justifyContent: 'space-between'

    },
    areaTextCount: {
        flexDirection: 'row',
    },
    textCreated: {
        fontSize: 14,
        fontWeight: "bold",
        color: '#489ACC'
    },
    textConcluded: {
        fontSize: 14,
        fontWeight: "bold",
        color: '#8284FA'
    },
    areaCount: {
        marginLeft: 8,
        borderRadius: 19,
        backgroundColor: '#333333',
        width: 25,
        height: 19,
        alignItems: 'center',
    },
    count: {
        fontSize: 12,
        fontWeight: "bold",
    }
})

