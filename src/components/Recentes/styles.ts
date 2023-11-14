import { StyleSheet, Platform } from "react-native"

export const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'left'
  },
  textClaro: {
    color: '#a0a2a3',
    fontSize: 12,
    textAlign: 'left'
  },
  titulo: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'left',
    marginBottom: 8,
    marginTop: 8
  },
  icone: {
    width: 20,
    height: 20,
  },
  iconeGrande: {
    width: 60,
    height: 60,
    tintColor: "white",
  },
  ladoALado: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coluna: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  container: {
    backgroundColor: '#191a1c',
    borderRadius: 20,
    padding: 30, 
    marginTop: 15
  },
  divisao: {
    backgroundColor: '#a0a2a3',
    borderBottomWidth: 1,
    marginVertical: 10,
    marginTop: 15
  }
})