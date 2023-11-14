import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { styles } from './styles'
import { AntDesign } from '@expo/vector-icons';
import Ouro from "../../assets/ouro.png"
import Prata from "../../assets/prata.png"
import Bronze from "../../assets/bronze.png"
import Platina from "../../assets/platina.png"

export const JogosRecentes = ({ jogo }) => {
    const { id, nome, imagem, horas, platina, ouro, prata, bronze } = jogo;


    return <TouchableOpacity>
        <View style={styles.container}>
            <View style={styles.ladoALado}>
                <Image source={imagem} style={styles.image} />

                <View style={styles.coluna}>
                    <Text style={styles.titulo}>{nome}</Text>

                    <Text style={styles.textClaro}>Jogado(s)</Text>
                    <View style={styles.ladoALado}>
                        <AntDesign name="clockcircle" size={12} color="white" />
                        <Text style={styles.text}> {horas} horas</Text>
                    </View>
                </View>
            </View>

            <View style={styles.divisao}></View>

            <View style={styles.ladoALado}>
                <Image source={Ouro} style={styles.iconeGrande} />

                <View style={styles.coluna}>
                    <Text style={styles.titulo}>Troféus</Text>
                    <View style={styles.ladoALado}>

                        <Image source={Platina} style={styles.icone} />
                        <Text style={styles.textClaro}> {platina}</Text>

                        <Image source={Ouro} style={styles.icone} />
                        <Text style={styles.textClaro}> {ouro}</Text>

                        <Image source={Prata} style={styles.icone} />
                        <Text style={styles.textClaro}> {prata}</Text>

                        <Image source={Bronze} style={styles.icone} />
                        <Text style={styles.textClaro}> {bronze}</Text>
                    </View>
                </View>
            </View>
        </View>
    </TouchableOpacity>
}