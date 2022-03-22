/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

 import {
   SafeAreaView,
   StatusBar,
   StyleSheet,
   Text,
   LogBox,
   View,
 } from 'react-native';
 
 // import theme
 import { Theme } from './src/Config';
 
 // import screens
 import { 
   Homepage,
   OrdinaProdotti,
   PrenotaAppuntamenti,
   Farmacie,
   Farmacia,
   Articoli,
   Articolo,
 } from './src/Screens'
 
 // import icons
 import { Ionicons } from '@expo/vector-icons'; 
 
 // import gesture handler
 import {GestureHandlerRootView} from 'react-native-gesture-handler'
 
 // import react navigation component
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
 // ignoro i warning che derivano dall'importazione di componenti in altri componenti tramite il file /components/index.js e vale anche per le altre cartelle
 LogBox.ignoreLogs(['Require cycle:']);

 const Tab = createBottomTabNavigator()
 const Stack = createNativeStackNavigator()
 
 const App = () => {
 
   const StackNavigatorOptions = () => {
     return {
       headerTitle: () => <Text>LOGO</Text>,
       headerBackTitleVisible: false,
       headerTintColor: Theme.colors.base_text
     }
   }
 
   const HomepageStackNavigator = () => {
     return (
       <Stack.Navigator>
         <Stack.Screen name="Homepage" component={Homepage} options={StackNavigatorOptions} />
         <Stack.Screen name="Farmacie" component={Farmacie} options={StackNavigatorOptions} />
         <Stack.Screen name="Farmacia" component={Farmacia} options={StackNavigatorOptions} />
         <Stack.Screen name="Articoli" component={Articoli} options={StackNavigatorOptions} />
         <Stack.Screen name="Articolo" component={Articolo} options={StackNavigatorOptions} />
       </Stack.Navigator>
     )
   }
 
   const PrenotaAppuntamentiStackNavigator = () => {
     return (
       <Stack.Navigator>
         <Stack.Screen name="PrenotaAppuntamenti" component={PrenotaAppuntamenti} options={StackNavigatorOptions} />
       </Stack.Navigator>
     )
   }
 
   return (
     <GestureHandlerRootView style={{flex: 1}}>
       <NavigationContainer>
         <Tab.Navigator
           screenOptions={({ route }) => ({
             tabBarIcon: ({ focused, color, size }) => {
               let iconName;
               if (route.name === 'Home') {
                 iconName = 'home'
               } else if (route.name === 'Ordina') {
                 iconName = 'cart'
               } else if (route.name === 'Prenota') {
                 iconName = 'calendar'
               }
               // You can return any component that you like here!
               return <Ionicons name={iconName} size={size} color={color} />;
             },
             tabBarActiveTintColor: Theme.colors.primary,
             tabBarInactiveTintColor: Theme.colors.base_text,
           })}
         >
           <Tab.Screen name="Home" component={HomepageStackNavigator} options={{headerShown: false}} />
           <Tab.Screen name="Ordina" component={OrdinaProdotti} />
           <Tab.Screen name="Prenota" component={PrenotaAppuntamentiStackNavigator} options={{headerShown: false}}/>
         </Tab.Navigator>
       </NavigationContainer>
     </GestureHandlerRootView>
   );
 };
 
 
 export default App;
 
