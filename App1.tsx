import React, { useEffect, useState } from "react"
import { StyleSheet, Text, TextInput, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { JogosRecentes } from "./src/components/Recentes/JogosRecentes"
import { Amigos } from "./src/components/Amigos/Amigos"
import { Usuario } from "./src/components/Usuario/Usuario"
import { Footer } from "./src/components/Footer/Footer"
import { styles } from './stylesListaJogos'
import { ListaDeJogos } from "./src/components/ListaDeJogos/ListaDeJogos";

const Principal = () => {
    const [recentes, setRecentes] = useState([
        {
            id: '1',
            nome: "UFL",
            imagem: require("./src/assets/ufl.png"),
        },
        {
            id: '2',
            nome: "Grand theft auto 5",
            imagem: require("./src/assets/gta5.png"),
        },
        {
            id: '3',
            nome: "FC24",
            imagem: require("./src/assets/fc24.png"),
        },
        {
            id: '4',
            nome: "Call of Duty",
            imagem: require("./src/assets/callofduty.png"),
        },
        {
            id: '5',
            nome: "Mortal Kombat 1",
            imagem: require("./src/assets/mortal1.png"),
        },
        {
            id: '6',
            nome: "Spider-man 2",
            imagem: require("./src/assets/spider-man2.png"),
        },
        {
            id: '7',
            nome: "Fortnite",
            imagem: require("./src/assets/fortnite.png"),
        },
        {
            id: '8',
            nome: "Spider-man",
            imagem: require("./src/assets/spider-man.png"),
        },
        {
            id: '9',
            nome: "UFL",
            imagem: require("./src/assets/ufl.png"),
        },
        {
            id: '10',
            nome: "Grand theft auto 5",
            imagem: require("./src/assets/gta5.png"),
        },
        {
            id: '11',
            nome: "FC24",
            imagem: require("./src/assets/fc24.png"),
        },
        {
            id: '12',
            nome: "Call of Duty",
            imagem: require("./src/assets/callofduty.png"),
        },
        {
            id: '13',
            nome: "Mortal Kombat 1",
            imagem: require("./src/assets/mortal1.png"),
        },
        {
            id: '14',
            nome: "Spider-man 2",
            imagem: require("./src/assets/spider-man2.png"),
        },
        {
            id: '15',
            nome: "Fortnite",
            imagem: require("./src/assets/fortnite.png"),
        },
        {
            id: '16',
            nome: "Spider-man",
            imagem: require("./src/assets/spider-man.png"),
        }
    ]);

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.containerText}
                placeholder="Procurar um jogo"
                placeholderTextColor='#fff'
            />

            <View style={styles.ladoALado}>
                <TouchableOpacity>
                    <View style={styles.containerJogos}>
                        <Text style={styles.text}>Jogos</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>Jogadores</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <Text style={styles.titulo}>Tendências</Text>
                <View style={styles.containerConteudo}>
                    <FlatList
                        data={recentes}
                        numColumns={2}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return <ListaDeJogos jogo={item} />
                        }}
                    />
                </View>
            </ScrollView>
            <View style={styles.containerFooter}>
                <Footer />
            </View>
        </View >
    )
}
export default Principal