import { StyleSheet, Platform } from "react-native"

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 113,
    // tintColor: '#a0a2a3',
    opacity: 0.2,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
   justifyContent: 'flex-end'
    
  },
  iconeCentro: {
    width: 20,
    height: 30,
    tintColor: 'white',
    top: 95   
  },
Centro: {
    top: 95   
  },
  iconeCantos: {
    width: 30,
    height: 20,
    tintColor: 'white',
    top: 110   
  },
  iconeLupa: {
    width: 25,
    height: 25,
    tintColor: 'white',
    top: 110   
  },
  iconeMeio: {
    width: 30,
    height: 30,
    tintColor: 'white',
    top: 100   
  }
  ,
  iconeBotao: {
    width: '100%',
    height: 50,
    tintColor: '#17181a',
    top: 130,
    
  },
  ladoALado: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
    top: 30
  },
  titulo: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    top: 90
  }
})