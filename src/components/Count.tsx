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
        justifyContent: 'space-between',
        marginTop: 32,
        width: 327,
    },
    areaTextCount: {
        flexDirection: 'row',
    },
    textCreated: {
        color: '#489ACC',
        fontSize: 14,
        fontWeight: "bold",
    },
    textConcluded: {
        color: '#8284FA',
        fontSize: 14,
        fontWeight: "bold",
    },
    areaCount: {
        alignItems: 'center',
        backgroundColor: '#333333',
        borderRadius: 19,
        height: 19,
        marginLeft: 8,
        width: 25,
    },
    count: {
        fontSize: 12,
        fontWeight: "bold",
    }
})

