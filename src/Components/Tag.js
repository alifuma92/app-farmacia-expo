import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// import config
import { Theme } from '../Config'

const Tag = ({title}) => {
  return (
    <View style={styles.tagContainer}>
        <Text style={styles.tagTitle}>
            {title}
        </Text>
    </View>
  )
}

export default Tag

const styles = StyleSheet.create({
    tagContainer: {
        height: 18,
        paddingHorizontal: 10,
        justifyContent: 'center',
        backgroundColor: Theme.colors.primary,
        borderRadius: Theme.borderRadius.base,
        marginRight: 5,
        marginBottom: 5
      },
      tagTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: Theme.colors.light,
        textAlign: 'center'
      }
})