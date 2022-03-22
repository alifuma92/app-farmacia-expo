import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// import icons
import { Ionicons } from '@expo/vector-icons'; 

// import config
import { Theme } from '../Config';

const ScreenHeader = ({title, icon, iconBackgroundColor}) => {
  return (
    <View style={styles.container}>
      <View style={{...styles.circle, backgroundColor: iconBackgroundColor}}>
        <Ionicons 
          name={icon}
          size={24}
          color={Theme.colors.base_text}
        />
      </View>
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  )
}

export default ScreenHeader

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  circle: {
    width: 48,
    height: 48,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  title: {
    color: Theme.colors.base_text,
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center'
  }
})