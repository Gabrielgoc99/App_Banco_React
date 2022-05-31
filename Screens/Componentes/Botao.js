import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import styles from './Styles';

export const Botao = (props) => {

  return(
    <View style= {styles.botao}>
      <Button
        title={props.label}
        onPress={props.onPress}
        color={props.cor}          
      />
    </View>   
  );
}
export default Botao;