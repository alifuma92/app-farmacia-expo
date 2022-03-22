import React, {useState, useRef} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'

// import custom components
import { ScreenWrapper, ScreenHeader, ListItem, Button, Filter } from '../Components'

// import config
import { Theme } from '../Config'

// import fake api
import { Services } from '../FakeServer'

// import bottom sheet component
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView
} from '@gorhom/bottom-sheet';

const PrenotaAppuntamenti = () => {

  // can be: []
  // or:
  // [{label: 'category', value: 'esami'}, ...]
  const [filters, setFilters] = useState([])
  const [categories, setCategories] = useState(['esami', 'trattamenti', 'fisioterapia'])

  // refs
  const bottomSheetModalRef = useRef(null);

  const removeFilter = (index) => {
    let actual_filters = [...filters]
    actual_filters.splice(index)
    setFilters(actual_filters)
  }

  const setFilter = (item) => {
    let actual_filters = [...filters]
    actual_filters.push({label: 'category', value: item})
    setFilters(actual_filters)
    // close modal filters
    bottomSheetModalRef.current?.dismiss()
  }

  return (
    <ScreenWrapper>
      <BottomSheetModalProvider>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <ScreenHeader
            title="Prenota appuntamenti"
            icon="calendar"
            iconBackgroundColor={Theme.colors.primary_50}
          />

          {/* SEZIONE FILTRI SELEZIONATI */}
          {
            filters.length > 0 
            &&
            <View style={{paddingHorizontal: 10, marginBottom: 25, borderBottomWidth: 1, borderBottomColor: Theme.colors.secondary, paddingBottom: 15}}>
              <Text style={{color: Theme.colors.medium_dark, fontSize: 15, marginBottom: 5}}>
                Filtra per
              </Text>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {
                  filters.map((item, index) => {
                    return (
                      <Filter
                        key={index}
                        value={item.value}
                        action={() => removeFilter(index)}
                      />
                    )
                  })
                }
              </View>
            </View>
          }
          

          {/* LISTA SERVIZI */}
          <View style={{paddingHorizontal: 10}}>
            {
              Services.length > 0
              ?
                Services.map((item, index) => (
                  <TouchableOpacity
                    key={index} 
                    style={{marginBottom: 10}}
                    onPress={() => alert('vai a ...')}
                  >
                    <ListItem
                      title={item.title}
                      category={item.category}
                    />
                  </TouchableOpacity>
                ))
              :
                <Text>
                  Al momento non è possibile prenotare nessun servizio/esame.
                </Text>
            }
          </View>
        </ScrollView>

        {/* FLOATING BUTTON FILTRI */}
        <View style={styles.floatingButtonContainer}>
            <Button
              activeOpacity={0.8}
              title="Filtra"
              color={Theme.colors.light}
              backgroundColor={Theme.colors.primary}
              size="large"
              action={() => bottomSheetModalRef.current?.present()}
            />
        </View>

        {/* BOTTOM SHEET MODAL FILTERS */}
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={['50%']}
          enablePanDownToClose={true}
          style={{paddingHorizontal: 10}}
        >
          <Text style={{fontSize: 20, fontWeight: '900', color: Theme.colors.base_text, marginBottom: 20}}>
            Categorie
          </Text>
          <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
            {
              categories.map((item, index) => (
                <TouchableOpacity
                  onPress={() => setFilter(item)} 
                  key={index} 
                  style={{marginBottom: 10,backgroundColor: Theme.colors.secondary, paddingHorizontal: 10, paddingVertical: 10, borderRadius: Theme.borderRadius.base}}
                >
                  <Text style={{color: Theme.colors.base_text, fontSize: 14, fontWeight: 'bold'}}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ))
            }
          </BottomSheetScrollView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </ScreenWrapper>
  )
}

export default PrenotaAppuntamenti

const styles = StyleSheet.create({
  floatingButtonContainer: {
    width: 100,
    position: 'absolute', 
    bottom: 25, 
    left: '50%', 
    marginLeft: -50,
    shadowColor: Theme.colors.light,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 1,
  }
})