import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'

// import custom components
import { ScreenWrapper, ScreenHeader, Card } from '../Components'

// import config
import { Theme } from '../Config'

// import fake server
import { News } from '../FakeServer'

const Articoli = ({navigation}) => {
  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <ScreenHeader
          title="Le nostre news"
          icon="newspaper"
          iconBackgroundColor={Theme.colors.primary_50}
        />
        <View style={{paddingHorizontal: 10}}>
          {
            News.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate('Articolo', item)}
                  style={{marginBottom: 20}}
                >
                  <Card
                    title={item.title}
                    image={{uri: item.image}}
                    categories={item.categories}
                  />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </ScrollView>
    </ScreenWrapper>
  )
}

export default Articoli

const styles = StyleSheet.create({})