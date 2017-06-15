import React from 'react'
import { View } from 'react-native'

const Row = props =>
  <View
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      marginVertical: 8
    }}
  >
    {props.children}
  </View>

export default Row
