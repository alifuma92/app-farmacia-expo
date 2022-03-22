import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

// import Config
import { Theme } from '../Config'

const Button = ({title, color, backgroundColor, size = "medium", action, disabled = false, activeOpacity = 0.2}) => {

  const buttonHeight = (size) => {
    switch(size) {
      case 'large':
        return 48
      case 'medium':
        return 40
      case 'small':
        return 32
      default:
        return 40
    }
  }

  const buttonFontSize = (size) => {
    switch(size) {
      case 'large':
        return 20
      case 'medium':
        return 17
      case 'small':
        return 17
      default:
        return 17
    }
  }

  return (
    <TouchableOpacity
      style={{...styles.container, backgroundColor, height: buttonHeight(size)}}
      onPress={action}
      disabled={disabled}
      activeOpacity={activeOpacity}
    >
      <Text style={{...styles.text, color, fontSize: buttonFontSize(size)}}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    borderRadius: Theme.borderRadius.base,
    justifyContent: 'center'
  },
  text: {
    fontWeight: '600',
    textAlign: 'center'
  }
})