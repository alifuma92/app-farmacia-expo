import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// import icons
import { Ionicons } from '@expo/vector-icons'; 

// import Config
import { Theme } from '../Config'

const ListItem = ({title, category}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
          <Text style={styles.title}>
              {title}
          </Text>
          <Text style={styles.category}>
              {category}
          </Text>
      </View>
      <View style={{width: 30, flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Ionicons
          name="chevron-forward"
          size={24}
          color={Theme.colors.primary}
        />
      </View>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Theme.colors.secondary,
        borderRadius: Theme.borderRadius.base,
        padding: 15
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Theme.colors.base_text
    },
    category: {
        marginTop: 5,
        fontSize: 14,
        color: Theme.colors.medium_dark
    }
})