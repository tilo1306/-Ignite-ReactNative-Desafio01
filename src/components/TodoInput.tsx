import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

interface ITodoInputProps {
    addTask: (task: string) => void
}


export const TodoInput = ({ addTask }: ITodoInputProps) => {
    const [task, setTask] = useState('');
    function handleAddNewTask() {

        if (task.length >= 1) {
            addTask(task)
            setTask('')
        }
    }
    return (
        <View style={styles.container}>
            <TextInput
                maxLength={230}
                placeholder='Adicione uma nova tarefa'
                placeholderTextColor='#808080'
                style={styles.inputText}
                returnKeyType="send"
                value={task}
                onChangeText={text => setTask(text)}
                onSubmitEditing={handleAddNewTask}

            />
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={handleAddNewTask}
            >
                <View style={styles.imgButton}>
                    <Text style={styles.textButton}>+</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -31,
        zIndex: 1,

    },
    inputText: {
        backgroundColor: '#262626',
        borderRadius: 6,
        color: 'white',
        height: 54,
        marginRight: 4,
        paddingHorizontal: 16,
        width: 271,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
        flexDirection: 'row',
        height: 54,
        justifyContent: 'center',
        width: 54,
    },
    imgButton: {
        alignItems: 'center',
        borderColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        height: 20,
        padding: 0,
        justifyContent: 'center',
        width: 20,
    },
    textButton: {
        color: 'white',
        flex: 1,
        fontSize: 7,
        textAlignVertical: 'center'
    }
})
