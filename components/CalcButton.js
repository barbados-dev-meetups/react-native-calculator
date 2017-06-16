import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const CalcButton = props =>
  <TouchableOpacity onPress={props.onPress}>
    <View
      style={[
        styles.button,
        { backgroundColor: props.backgroundColor, width: props.long ? 158 : 75 }
      ]}
    >
      <Text style={[styles.text, { color: props.color }]}>{props.value}</Text>
    </View>
  </TouchableOpacity>

const styles = StyleSheet.create({
  button: {
    height: 75,
    borderRadius: 75 / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30
  }
})

export default CalcButton
