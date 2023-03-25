import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';
import { TodoInput } from '../components/TodoInput';
import * as Crypto from "expo-crypto";
import { ListTasks } from '../components/ListTasks';

export interface ITask {
    id: string
    task: string
    done: boolean
}

export const Home = () => {
    const [tasks, setTasks] = useState<ITask[]>([{
        id: Crypto.randomUUID(),
        task: "HTML",
        done: false

    },
    {
        id: Crypto.randomUUID(),
        task: "CSS",
        done: false

    },
    {
        id: Crypto.randomUUID(),
        task: "Javascript",
        done: true

    },

    ])

    const handleAddTaskInput = (newTask: string) => {
        const taskAlreadyExists = tasks.find(task => task.task === newTask)

        if (taskAlreadyExists) {
            return Alert.alert("Tarefa já cadastrada",
                "Você não pode cadastrar uma tarefa com o mesmo nome")
        }

        const task = {
            id: Crypto.randomUUID(),
            task: newTask,
            done: false
        }
        setTasks([...tasks, task])
    }

    const handleToggleTaskDone = (taskId: string) => {
        const newListTasks = tasks.map(task => ({ ...task }))
        const findTask = newListTasks.find(task => task.id === taskId) as ITask
        findTask.done = !findTask.done
        setTasks(newListTasks)
    }

    const handleDeleteTask = (taskId: string) => {
        Alert.alert("Remover item", "Tem certeza que você deseja remover esse item?",
            [
                {
                    text: 'sim',
                    onPress: () => setTasks(prevState => prevState.filter(task => task.id !== taskId))
                },
                {
                    text: 'não',
                    style: 'cancel'
                }
            ])
    }

    return (
        <View style={styles.container}>
            <Header />
            <TodoInput addTask={handleAddTaskInput} />
            <ListTasks
                tasks={tasks}
                toggleTaskDone={handleToggleTaskDone}
                removeTask={handleDeleteTask} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#191919',
        flex: 1,
    }
})