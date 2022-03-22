import React from 'react'

import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Linking } from 'react-native'

// import theme
import { Theme, Resources } from '../Config'

// import components
import { Box, Button, Card, ScreenWrapper, SocialButton } from '../Components'

// import fake server data
import { News } from '../FakeServer';

const Homepage = ({navigation}) => {
  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        {/* PRIMA RIGA BOX */}
        <View style={{flexDirection: 'row', paddingHorizontal: 5, paddingTop: 5}}>
          <TouchableOpacity 
            style={{flex: 1, padding: 5}}
            onPress={() => navigation.navigate('Farmacie')}
          >
            <Box 
              title={"Le nostre\nfarmacie"}
              iconName="home"
              color={Theme.colors.light}
              backgroundColor={Theme.colors.primary}
              iconBackgroundColor={Theme.colors.light_50}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style={{flex: 1, padding: 5}}
            onPress={() => alert('aprirò la screen dei turni')}
          >
            <Box 
              title={"Farmacie\ndi turno"}
              iconName="time"
              color={Theme.colors.base_text}
              backgroundColor={Theme.colors.secondary}
              iconBackgroundColor={Theme.colors.primary_50}
            />
          </TouchableOpacity>
        </View>

        {/* SECONDA RIGA BOX */}
        <View style={{flexDirection: 'row', paddingHorizontal: 5}}>
          <TouchableOpacity 
            style={{flex: 1, padding: 5}}
            onPress={() => navigation.navigate('Ordina')}
          >
            <Box 
              title={"Ordina\nprodotti"}
              iconName="cart"
              color={Theme.colors.light}
              backgroundColor={Theme.colors.primary}
              iconBackgroundColor={Theme.colors.light_50}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style={{flex: 1, padding: 5}}
            onPress={() => navigation.navigate('Prenota')}
          >
            <Box 
              title={"Prenota\nappuntamenti"}
              iconName="calendar"
              color={Theme.colors.light}
              backgroundColor={Theme.colors.primary}
              iconBackgroundColor={Theme.colors.light_50}
            />
          </TouchableOpacity>
        </View>

        {/* SEZIONE NEWS */}
        {
          News.length > 0
          &&
          <>
            <View style={{paddingHorizontal: 10, paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>
                Le nostre news
              </Text>
              <Button
                title="Vedi tutte"
                action={() => navigation.navigate('Articoli')}
                size="small"
                color={Theme.colors.primary}
                backgroundColor={Theme.colors.secondary}
              />
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 5}}
              >
                {
                  News.map((item, index) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        onPress={() => navigation.navigate('Articolo', item)}
                        style={{paddingHorizontal: 5}}
                      >
                        <Card
                          width={300}
                          title={item.title}
                          image={{uri: item.image}}
                          categories={item.categories}
                        />
                      </TouchableOpacity>
                    )
                  })
                }
            </ScrollView>
          </>
        }

        {/* SOCIAL */}
        <View style={{flexDirection: 'row', paddingHorizontal: 5, marginVertical: 25}}>
          {/* FACEBOOK */}
          <View style={{flex: 1, paddingHorizontal: 5}}>
            <SocialButton
              title={"Seguici su\nFacebook"}
              icon="logo-facebook"
              backgroundColor={Theme.colors.secondary}
              color={Theme.colors.primary}
              action={() => Linking.openURL(Resources.facebook)}
            />
          </View>
          {/* INSTAGRAM */}
          <View style={{flex: 1, paddingHorizontal: 5}}>
            <SocialButton
              title={"Seguici su\nInstagram"}
              icon="logo-instagram"
              backgroundColor={Theme.colors.secondary}
              color={Theme.colors.primary}
              action={() => Linking.openURL(Resources.instagram)}
            />
          </View>
        </View>

      
      </ScrollView>
    </ScreenWrapper>
  )
}

export default Homepage

const styles = StyleSheet.create({})