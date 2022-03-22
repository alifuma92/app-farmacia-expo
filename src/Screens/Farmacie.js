import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native'

// import custom components
import { ScreenWrapper, ScreenHeader, PharmacyCard } from '../Components'

// import config
import { Theme } from '../Config'

// import fake server data
import {  Pharmacies } from '../FakeServer'

const Farmacie = ({navigation}) => {
  return (

    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* SCREEN TITLE */}
        <ScreenHeader
          title="Le nostre farmacie"
          iconBackgroundColor={Theme.colors.primary_50}
          icon="ios-business-sharp"
        /> 
        {/* PHARMACIES LIST */}
        <View style={{flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 5}}>
        {
          Pharmacies.map((item, index) => {
            return (
              <TouchableOpacity
                key={index} 
                style={{width: '50%', paddingHorizontal: 5, paddingVertical: 5}}
                onPress={() => navigation.navigate('Farmacia')}
              >
                <PharmacyCard
                  title={item.name}
                  color={Theme.colors.base_text}
                  backgroundColor={Theme.colors.secondary}
                  iconColor={Theme.colors.base_text}
                  iconBackgroundColor={Theme.colors.primary_50}
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

export default Farmacie

const styles = StyleSheet.create({})