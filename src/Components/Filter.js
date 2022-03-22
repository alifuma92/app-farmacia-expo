import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

// import Config
import { Theme } from '../Config'

// import icons
import { Ionicons } from '@expo/vector-icons'; 

const Filter = ({label, value, action}) => {
  return (
    <TouchableOpacity
      style={{...styles.container}}
      onPress={action}
    >
      <Text style={styles.text}>
        {value}
      </Text>
      <Ionicons 
        name="close"
        color={Theme.colors.primary}
        size={24}
      />
    </TouchableOpacity>
  )
}

export default Filter

const styles = StyleSheet.create({
    container: {
      backgroundColor: Theme.colors.secondary,
      paddingHorizontal: 10,
      borderRadius: Theme.borderRadius.base,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 32,
      marginRight: 5,
      marginBottom:5
    },
    text: {
      color: Theme.colors.primary,
      fontWeight: '600',
      textAlign: 'center',
      fontSize: 14
    }
})