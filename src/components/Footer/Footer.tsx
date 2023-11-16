import React from "react"
import { View, Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import base from "../../assets/teste.png"
import Controle from "../../assets/controle.png"
import Seta from "../../assets/seta.png"
import Sacola from "../../assets/sacola.png"
import Jogos from "../../assets/jogos.png"
import Lupa from "../../assets/lupa.png"
import Botao from "../../assets/botao.png";

export const Footer = () => {
    // const base = require("../../assets/teste.png");

    return <View > 
        <View style={styles.container}>
            <View style={styles.ladoALado}>

                <TouchableOpacity>
                    <Image source={Controle} style={styles.iconeCantos} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={Seta} style={styles.iconeMeio} />
                </TouchableOpacity>

                <TouchableOpacity >
                    <Image source={Sacola} style={styles.iconeCentro} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={Jogos} style={styles.iconeMeio} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={Lupa} style={styles.iconeLupa} />
                </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.botao}>
                <Image source={Botao} style={styles.iconeBotao} />
                <Text style={styles.titulo}>Jogar</Text>
            </TouchableOpacity>
        </View>
        <Image source={base} style={styles.image} />
       

    </View>

}