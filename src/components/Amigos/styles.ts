import { StyleSheet, Platform } from "react-native"

export const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 90,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius:50
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
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 8,
    marginTop: 8
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
    backgroundColor: '#191a1c',
    borderRadius: 10, 
    margin: 7
  },
 
})