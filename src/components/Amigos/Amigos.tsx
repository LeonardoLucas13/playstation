import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { styles } from './styles'
import { AntDesign } from '@expo/vector-icons';


export const Amigos = ({ online }:any) => {
    const { id, nome, jogo, avatar } = online;


    return <TouchableOpacity>
        <View style={styles.container}>
            <Image source={jogo} style={styles.image} />

            <View style={styles.ladoALado}>
            <Image source={avatar} style={styles.avatar} />
           
            <View style={styles.coluna}>
            <Text style={styles.titulo}>{nome}</Text>
            <Text style={styles.textClaro}>Jogando agora</Text>
            </View>
            </View>
        </View>
    </TouchableOpacity>
}