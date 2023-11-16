import { StyleSheet, Platform } from "react-native"

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0c0d0f',
        width: '100%'
    },
    containerConteudo: {
        //backgroundColor: '#070908',
        paddingHorizontal: '5%',
        marginBottom: 100
    },
    text: {
        marginLeft: 30,
        color: '#fff',
        fontSize: 22,
        textAlign: 'left',
        paddingTop: '10%'
    },
    containerFooter: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            marginBottom: 25
        
    },
})