import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// import Config
import { Theme } from '../Config'

const Record = ({label, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>
      {value}
    </View>
  )
}

export default Record

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: Theme.colors.secondary
    },
    label: {
      fontSize: 17,
      fontWeight: 'bold',
    }
})