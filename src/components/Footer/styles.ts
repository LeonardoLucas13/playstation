import { StyleSheet, Platform } from "react-native"

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 125,
    position: 'absolute',
    tintColor: 'black',
    opacity: 0.8,
    zIndex: -1

  },
  iconeCentro: {
    width: 20,
    height: 30,
    tintColor: 'white',
    marginBottom: 20,
  },
  Centro: {
    marginBottom: 5,
  },
  iconeCantos: {
    width: 30,
    height: 20,
    tintColor: 'white',
    marginBottom: 0,
  },
  iconeLupa: {
    width: 25,
    height: 25,
    tintColor: 'white',
    marginBottom: 0,
  },
  iconeMeio: {
    width: 30,
    height: 30,
    tintColor: 'white',
    marginBottom: 5,
  },
  iconeBotao: {
    width: '100%',
    height: 50,
    tintColor: '#17181a',
    position: 'absolute',
    bottom: 0,
    top: 0
  },
  ladoALado: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  titulo: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginLeft: 10,
    top: 15
  },
  botao:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginTop: 25
  }
})