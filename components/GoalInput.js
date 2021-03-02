import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import CustomButton from "./CustomButton";

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Goals"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />

            <CustomButton
              style={styles.button}
              onSelect={() => props.onAddGoal(enteredGoal)}>
                ADD
            </CustomButton>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        borderColor: '#808080',
        borderRadius: 25,
        borderWidth: 1,
        padding: 10
    },
    image: {
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 150
    },
    button: {
        marginHorizontal: 10,
        height: 50,
        width: 70,
    }
})

export default GoalInput;