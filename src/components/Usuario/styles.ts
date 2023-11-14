import { StyleSheet, Platform } from "react-native"

export const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    marginLeft: 12
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius:50,
  },
  icone: {
    margin: 10
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
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 8,
    marginTop: 8,
    marginLeft: 8,
  },
  ladoALado: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
  coluna: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  container: {
    borderRadius: 10, 
    margin: 7
  },
 
})