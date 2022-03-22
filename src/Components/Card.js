import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

// import Config
import { Theme } from '../Config'

// import full width image component
import FullWidthImage from 'react-native-fullwidth-image'

// import custom component
import { Tag } from '../Components'

const Card = ({ image, categories, title, width}) => {
  return (
    <View style={{...styles.container, width}}>
      <FullWidthImage
        source={image}
        style={{}}
      />
      <View style={styles.content}>
        {
          categories.length > 0 
          &&
          <View style={{flexDirection: 'row', marginBottom: 10, flexWrap: 'wrap'}}>
            {
              categories.map((item, index) => {
                return (
                  <Tag
                    key={index}
                    title={item}
                  />
                )
              })
            }
          </View>
        }
        <Text style={styles.title} numberOfLines={2}>
            {title}
        </Text>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.secondary,
    borderRadius: Theme.borderRadius.base,
    overflow: 'hidden',
    flex: 1
  },
  content: {
    padding: 15
  },
  imageBackground: {
    width: 300,
    height: 250
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17
  }
})