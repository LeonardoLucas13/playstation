import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { styles } from './styles'
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import avatar from "../../assets/meuavatar.png"
import lvl from "../../assets/lvl.png"


export const Usuario = () => {



    return <View style={[styles.container, styles.ladoALado]} >
        <TouchableOpacity>
            <View style={styles.ladoALado}>
                <Image source={avatar} style={styles.avatar} />

                <Text style={styles.titulo}>Leonardo Lucas</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.ladoALado}>
        <TouchableOpacity>
            <Image source={lvl} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity>
            <Fontisto name="bell-alt" size={20} color="white" style={styles.icone} />
        </TouchableOpacity>
        <TouchableOpacity>
            <Ionicons name="ios-settings-sharp" size={20} color="white" style={styles.icone} />
        </TouchableOpacity>
        </View>



    </View>
}