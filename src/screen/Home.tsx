import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';
import { TodoInput } from '../components/TodoInput';
import * as Crypto from "expo-crypto";
import { ListTasks } from '../components/ListTasks';

export interface ITask {
    id: number
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


    return (
        <View style={styles.container}>
            <Header />
            <TodoInput addTask={handleAddTaskInput} />
            <ListTasks tasks={tasks} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
        alignItems: 'center'

    }
})