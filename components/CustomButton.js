import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = props => {
  return (
    <View style={{...styles.screen, ...props.style}}>
      <TouchableOpacity style={styles.button} onPress={props.onSelect}>
        <Text style={styles.text}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#13d051',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  button: {
    opacity: 0.8,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'open-sans-bold'
  }
});

export default CustomButton;