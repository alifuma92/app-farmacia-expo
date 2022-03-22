import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// import icons
import { Ionicons } from '@expo/vector-icons'; 

// import config
import { Theme } from '../Config';

const PharmacyCard = ({title, backgroundColor, color, iconBackgroundColor, iconColor}) => {
  return (
    <View style={{...styles.container, backgroundColor}}>
      <Text style={{...styles.title, color}} numberOfLines={1}>
          {title}
      </Text>
      <View style={{...styles.circle, backgroundColor: iconBackgroundColor}}>
        <Ionicons 
          name={"medkit"}
          color={iconColor}
          size={24}
        />
      </View>
    </View>
  )
}

export default PharmacyCard

const styles = StyleSheet.create({
  container: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderRadius: Theme.borderRadius.base
  },
  circle: {
    width: 48,
    height: 48,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 5
  }
})