import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { styles } from "./styles";
import play from "../../assets/play.png"
import logo from "../../assets/playlogo.png"

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={play}
        style={styles.backgroundImage}
      />
      <View style={styles.coluna}>
      <Image
        source={logo}
        style={styles.logo}
      />
      <ActivityIndicator style={styles.carregando}/>
      </View>
    </View>
  )
}
export default App