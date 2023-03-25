import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { ITask } from '../screen/Home'
import { Count } from './Count';
import { EmptyList } from './EmptyList';
import { TaskItem } from './TaskItem';

interface ITasksListProps {
    tasks: ITask[];
    toggleTaskDone: (taskId: string) => void;
    removeTask: (taskId: string) => void
}
export const ListTasks = ({ tasks, toggleTaskDone, removeTask }: ITasksListProps) => {

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
                                        toggleTaskDone={toggleTaskDone}
                                        removeTask={removeTask}
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
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 20,
        minHeight: 247,
        width: 327,
    },
})
