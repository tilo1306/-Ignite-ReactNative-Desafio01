import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { ITask } from '../screen/Home'
import { Count } from './Count';
import ClipBoard from '../../assets/Clipboard.png'
import { EmptyList } from './EmptyList';


interface ITaskItem {
    task: ITask
}


export const TaskItem = ({ task }: ITaskItem) => {

    return (
        <>
            <Text style={{ color: 'white' }}>{task.task}</Text>
        </>
    )
}
