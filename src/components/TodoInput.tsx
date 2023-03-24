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
                placeholder='Adicione uma nova tarefa'
                placeholderTextColor='#808080'
                selectionColor='#F2F2F2'
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
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -31,
        flexDirection: 'row'

    },
    inputText: {
        backgroundColor: '#262626',
        height: 54,
        width: 271,
        marginRight: 4,
        borderRadius: 6,
        paddingHorizontal: 16
    },
    button: {
        backgroundColor: '#1E6F9F',
        height: 54,
        width: 54,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    imgButton: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        flex: 1,
        color: 'white',
        fontSize: 7,
        textAlignVertical: 'center'
    }
})
