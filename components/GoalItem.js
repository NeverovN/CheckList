import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => props.onDelete(props.id)}>
            <View style={styles.goalListItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    goalListItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#59bbdd',
        borderColor: '#808080',
        borderWidth: 1,
        borderRadius: 20
    }
});


export default GoalItem