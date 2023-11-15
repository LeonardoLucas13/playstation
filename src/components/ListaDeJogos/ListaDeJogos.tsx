import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { styles } from './styles'
import { AntDesign } from '@expo/vector-icons';
import Ouro from "../../assets/ouro.png"
import Prata from "../../assets/prata.png"
import Bronze from "../../assets/bronze.png"
import Platina from "../../assets/platina.png"

export const ListaDeJogos = ({ jogo }: any) => {
    const { id, nome, imagem, horas, platina, ouro, prata, bronze } = jogo;


    return <TouchableOpacity>
       
                <Image source={imagem} style={styles.image} />

                
        
    </TouchableOpacity>
}