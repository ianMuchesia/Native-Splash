import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import ImageContainer from '../components/home/ImageContainer'

const Home = () => {
  return (
    <SafeAreaView >
     <Header/>
     <ImageContainer/>
    </SafeAreaView>
  )
}

export default Home