import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ITask } from '../screen/Home'
import Checkbox from 'expo-checkbox';
import ImgTrash from '../../assets/trash.png'

interface ITaskItem {
    task: ITask;
    toggleTaskDone: (taskId: string) => void;
    removeTask: (taskId: string) => void
}

export const TaskItem = ({ task, toggleTaskDone, removeTask }: ITaskItem) => {
    const [isChecked, setIsChecked] = useState(task.done)

    const handleTaskChecked = (taskId: string) => {
        toggleTaskDone(task.id)
        setIsChecked(!isChecked)
    }


    return (
        <View style={styles.container}>
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                color={isChecked ? '#585ABD' : undefined}
                onValueChange={() => handleTaskChecked(task.id)}
            />

            <View style={styles.areaText}>
                <Text numberOfLines={2} style={isChecked ? styles.taskComplete : styles.taskIncomplete}>{task.task}</Text>
            </View>
            <TouchableOpacity onPress={() => removeTask(task.id)}>
                <Image source={ImgTrash} />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#262626',
        borderRadius: 8,
        flexDirection: 'row',
        height: 64,
        marginBottom: 8,
        width: 327,
    },
    checkbox: {
        borderRadius: 50,
        marginLeft: 15.27,
    },
    areaText: {
        height: 40,
        justifyContent: 'center',
        marginLeft: 8,
        marginRight: 8,
        width: 235,
    },
    taskIncomplete: {
        color: '#F2F2F2',
        fontSize: 14,
        width: 230,
    },
    taskComplete: {
        color: '#808080',
        fontSize: 14,
        textDecorationColor: '#808080',
        textDecorationLine: 'line-through',
    }
})