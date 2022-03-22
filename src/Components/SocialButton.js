import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

// import icons
import { Ionicons } from '@expo/vector-icons'; 

import { Theme } from '../Config';

const SocialButton = ({title, icon, action, color, backgroundColor}) => {
  return (
    <TouchableOpacity 
        onPress={action}
        style={{...styles.container, backgroundColor}}
    >
      <Ionicons
        name={icon}
        size={48}
        color={color}
      />
      <Text style={{...styles.text, color: Theme.colors.base_text}}>
          {title}
      </Text>
    </TouchableOpacity>
  )
}

export default SocialButton

const styles = StyleSheet.create({
    container: {
        height: 66,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Theme.borderRadius.base
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10
    }
})