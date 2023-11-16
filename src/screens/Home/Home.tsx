import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { JogosRecentes } from "../../components/Recentes/JogosRecentes"
import { Amigos } from "../../components/Amigos/Amigos"
import { Usuario } from "../../components/Usuario/Usuario"
import { Footer } from "../../components/Footer/Footer"
import { styles } from "./styles";

const Principal = () => {
    const [recentes, setRecentes] = useState([
        {
            id: '1',
            nome: "Call of Duty",
            imagem: require("../../assets/callofduty.png"),
            horas: 188,
            platina: 0,
            ouro: 0,
            prata: 0,
            bronze: 0,
        },
        {
            id: '2',
            nome: "Horizon Zero Dawn",
            imagem: require("../../assets/Horizon_Zero_Dawn_capa.png"),
            horas: 32,
            platina: 1,
            ouro: 2,
            prata: 5,
            bronze: 48,
        },
        {
            id: '3',
            nome: "DOOM",
            imagem: require("../../assets/doom.png"),
            horas: 15,
            platina: 0,
            ouro: 1,
            prata: 5,
            bronze: 8,
        }
    ]);
    const [amigos, setAmigos] = useState([
        {
            id: '1',
            nome: "Darkorioon",
            jogo: require("../../assets/league-newlogo-banner.png"),
            avatar: require("../../assets/jane.png"),
        },
        {
            id: '2',
            nome: "VI44D",
            jogo: require("../../assets/league-newlogo-banner.png"),
            avatar: require("../../assets/andre.png"),
        },
        {
            id: '3',
            nome: "Itaipava Latao",
            jogo: require("../../assets/league-newlogo-banner.png"),
            avatar: require("../../assets/luketa.png"),
        }
    ]);

    return (<View style={styles.container}>
        <View >
            <ScrollView>
                <Usuario />
                <Text style={styles.text}>Amigos jogando</Text>
                <FlatList
                    data={amigos}
                    horizontal
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <Amigos online={item} />
                    }
                />

                <Text style={styles.text}>Jogos recentes</Text>


                <View style={styles.containerConteudo}>
                    <FlatList
                        data={recentes}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <JogosRecentes jogo={item} />
                        }
                    />

                </View>
            </ScrollView>
        </View >
        <View style={styles.containerFooter}>
            <Footer />
        </View>
    </View>
    )
}
export default Principal