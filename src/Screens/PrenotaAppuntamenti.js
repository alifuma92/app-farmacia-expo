import React, {useState, useRef, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'

// import custom components
import { ScreenWrapper, ScreenHeader, ListItem, Button, Filter } from '../Components'

// import config
import { Theme } from '../Config'

// import fake api
import { Services } from '../FakeServer'

// import icons
import { Ionicons } from '@expo/vector-icons'; 

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
  const [loading, setLoading] = useState(true) 
  const [services, setServices] = useState([])
  const [filteredServices, setFilteredService] = useState([])
  const [filters, setFilters] = useState([])
  const [categories, setCategories] = useState(['esame', 'trattamento', 'fisioterapia'])

  useEffect(() => {
    setTimeout(() => {
      setServices(Services)
      setFilteredService(Services)
      setLoading(false)
    }, 3000)
  }, [])

  // aggiorno la lista dei servizi ogni volta che cambiano i filtri
  useEffect(() => {
    // filtra i risultati
    if(filters.length === 0){
      setFilteredService(services)
    } else {
      const results = services.filter(service => filters.some(filter => filter.value === service.category))
      setFilteredService(results)
    }
  }, [filters])

  // refs
  const bottomSheetModalRef = useRef(null);

  const removeFilter = (index) => {
    // elimino il filtro
    let actual_filters = [...filters]
    actual_filters.splice(index, 1)
    setFilters(actual_filters)
  }

  const setFilter = (item) => {
    // aggiornando i filtri selezionati
    let actual_filters = [...filters]
    actual_filters.push({label: 'category', value: item})
    setFilters(actual_filters)
    // close modal filters
    bottomSheetModalRef.current?.dismiss()
  }

  const isFilterSelected = (filter) => {
    // filter = {label: 'category', value: 'XXX'}
    const search = filters.filter((item) => filter.label === 'category' && filter.value === item.value)
    return search.length > 0 ? true : false
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
              loading 
              ?
                <ActivityIndicator />
              :
                filteredServices.length > 0
                ?
                  filteredServices.map((item, index) => (
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
        {
          !loading && filteredServices.length > 0
          &&
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
        }
        
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
              categories.map((item, index) => {
                const isSelected = isFilterSelected({label: 'category', value: item})
                return (
                  <TouchableOpacity
                    disabled={isSelected}
                    onPress={() => setFilter(item)} 
                    key={index} 
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 10,
                      backgroundColor: Theme.colors.secondary, 
                      paddingHorizontal: 10, 
                      height: 40, 
                      borderRadius: Theme.borderRadius.base,
                      ...isSelected && {opacity: 0.5}
                    }}
                  >
                    <View style={{flex: 1}}>
                      <Text numberOfLines={1} style={{color: Theme.colors.base_text, fontSize: 14, fontWeight: 'bold'}}>
                        {item}
                      </Text>
                    </View>
                    {
                      isSelected 
                      &&
                      <View style={{width: 40, flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <Ionicons
                          name="checkmark"
                          size={24}
                          color={Theme.colors.primary}
                        /> 
                      </View>
                    }
                  </TouchableOpacity>
                )
              })
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