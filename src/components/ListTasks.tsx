import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { ITask } from '../screen/Home'
import { Count } from './Count';
import ClipBoard from '../../assets/Clipboard.png'
import { EmptyList } from './EmptyList';
import { TaskItem } from './TaskItem';

interface ITasksListProps {
    tasks: ITask[];
}
export const ListTasks = ({ tasks }: ITasksListProps) => {

    return (
        <>
            <Count tasks={tasks} />
            {
                tasks.length > 0 ?
                    <View style={styles.container}>
                        <FlatList
                            data={tasks}
                            keyExtractor={item => String(item.id)}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                return (
                                    <TaskItem
                                        task={item}
                                    />
                                )
                            }}
                        />
                    </View>

                    :
                    < EmptyList />
            }

        </>
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
})
