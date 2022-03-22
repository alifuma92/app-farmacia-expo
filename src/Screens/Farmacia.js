import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

// import custom components
import { ScreenWrapper, ScreenHeader, Record, Button } from '../Components'

// import Config
import { Theme } from '../Config'

const Farmacia = () => {
  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* SCREEN TITLE */}
        <ScreenHeader 
          title={"Comunale 1"}
          icon={"medkit"}
          iconBackgroundColor={Theme.colors.primary_50}
        />

        {/* DESCRIPTION */}
        <View style={{padding: 10}}>
          <Text style={{fontSize: 17, color: Theme.colors.base_text}}>
            Questa è la descrizione della farmacia
          </Text>
        </View>

        {/* CONTACTS */}
        <View style={{marginVertical: 20}}>
          <View style={{padding: 10}}>
            <Text style={styles.sectionTitle}>
              Contatti
            </Text>
          </View>
          {/* Email */}
          <Record
            label="Email"
            value={<Text style={styles.recordValueText}>info@gmail.com</Text>}
          />
          {/* Telefono */}
          <Record
            label="Telefono"
            value={<Text style={styles.recordValueText}>0212345678</Text>}
          />
          {/* Indirizzo */}
          <Record
            label="Indirizzo"
            value={<Text style={styles.recordValueText}>Via Turati 26, 20121 Milano</Text>}
          />
          {/* Whatsapp */}
          <Record
            label="Whatsapp"
            value={<Button title="Scrivi" size="small" color={Theme.colors.primary} backgroundColor={Theme.colors.secondary} action={() => alert("Apri whatsapp")} />}
          />
        </View>

        {/* ORARI */}
        <View style={{marginVertical: 20}}>
          <View style={{padding: 10}}>
            <Text style={styles.sectionTitle}>
              Orari
            </Text>
          </View>
          <View style={{padding: 10}}>
            <Text style={{fontSize: 17, color: Theme.colors.base_text}}>
              Aperti tutti i giorni dalle 9:00 alle 20:00
            </Text>
          </View>
        </View>

      </ScrollView>
    </ScreenWrapper>
  )
}

export default Farmacia

const styles = StyleSheet.create({
  sectionTitle: {
    color: Theme.colors.primary,
    fontSize: 19,
    fontWeight: 'bold'
  },
  recordValueText: {
    fontSize: 17,
    color: Theme.colors.base_text
  }
})