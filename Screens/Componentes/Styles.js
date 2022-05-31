import { StyleSheet, textarea, select, input } from 'react-native';
import { colors } from './Colors';
import { sizes } from './Sizes';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: sizes.small, 
    width: '100%', 
    margin: 0,  
    backgroundColor: 'black',    
  },
  itensContainer: {
    flexDirection: 'columns',
    padding: 12,
  },
  paragraph: {    
    marginBottom: 0,
    fontSize: sizes.medium,
    fontWeight: 'bold',    
    borderColor: 'red',
    color: 'white',
  },
  imagem: {
    height: 300,
    width: 300,
    alignSelf: 'center',
  },
  botao: {
    width: 200,  
    alignSelf: 'center',
    padding: sizes.small,
    marginBottom: 10,
  },
  input: {
    height: 20, 
    borderColor: "gray", 
    width: 300, 
    borderWidth: 1,     
    marginBottom: 10, 
    backgroundColor: 'white'
  },
  slider: {
      width: 250, 
      height: 40,
      size: 20,
      color:"#f50" ,     
  },
  switchAdjust: {
    marginBottom: 20,
  },
  fadingContainer: {
    padding: 10,
    backgroundColor: "blue", 
    width: 300,
    marginBottom: 10, 
    marginTop: 10,
  },
  fadingText: {
    marginBottom: 10,
    fontSize: sizes.large,    
    color: 'white'    
  },
  buttonRow: {
    flexBasis: 50,
    justifyContent: "space-evenly",
    marginVertical: 10,
    marginBottom: 5,
  }    
});