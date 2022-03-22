import React from 'react'
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import { Theme } from '../Config'

const ScreenWrapper = ({children, barStyle = 'dark-content'}) => {
  return (
    <>
        <StatusBar barStyle={barStyle} /> 
        <SafeAreaView style={{flex: 1, backgroundColor: Theme.colors.light}}>
            {children}
        </SafeAreaView>
    </>
    
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({})