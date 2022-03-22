import React, {useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

// import custom components
import { ScreenWrapper, ScreenHeader, Tag } from '../Components'

// import config
import { Theme } from '../Config'

// import full width image
import FullWidthImage from 'react-native-fullwidth-image'

const Articolo = ({navigation, route}) => {
  
  console.log(route.params)
  const { title, image, categories, description } = route.params

  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
          <ScreenHeader
            title={title}
            icon="newspaper"
            iconBackgroundColor={Theme.colors.primary_50}
          />

          {/* LISTA TAG */}
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10, flexWrap: 'wrap'}}>
            { 
              categories?.map((item, index) => (
                <Tag 
                  key={index}
                  title={item}
                />
              ))
            }
          </View>

          {/* IMMAGINE */}
          <FullWidthImage
            source={{uri: image}}
            style={{marginVertical: 20}}
          />

          {/* DESCRIZIONE */}
          <View style={{paddingHorizontal: 10, marginBottom: 25}}>
            <Text style={{color: Theme.colors.base_text, fontSize: 17}}>
              {description}
            </Text>
          </View>

      </ScrollView>
    </ScreenWrapper>
  )
}

export default Articolo

const styles = StyleSheet.create({})