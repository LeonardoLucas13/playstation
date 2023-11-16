import { StyleSheet, Platform } from "react-native"

export const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
        margin: 10
    },
    titulo: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'left',
        marginBottom: 8,
        marginTop: 8,
        marginLeft: '7%'
    },
    container: {
        backgroundColor: '#0c0d0f',
        width: '100%'
    },
    containerJogos: {
        backgroundColor: '#1e1f23',
        borderRadius: 50,
        width: 'auto',
        height: 'auto',
        marginVertical: 3,

    },
    containerText: {
        height: 40,
        paddingHorizontal: 15,
        color: '#fff',
        backgroundColor: '#1e1f23',
        borderRadius: 50,
        marginHorizontal: '5%',
        marginTop: 40,
        marginBottom: '2%'
    },
    ladoALado: {
        backgroundColor: '#070908',
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        width: '40%',
        margin: 3,
        justifyContent: 'center',
        marginLeft: '5%',
        gap: 10

    },
    coluna: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingLeft: 20,
    },
    containerFooter: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        
    },
    containerConteudo: {
        paddingHorizontal: '5%',
    },
    scrollContent: {
        paddingBottom: 180,
    }
})