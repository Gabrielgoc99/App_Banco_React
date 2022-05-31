import React from 'react';
import { Text, View, Stylesheet, Button, Animated, Image} from 'react-native';
import {useState} from 'react';
import Constants from 'expo-constants';
import Styles from './Componentes/Styles'

export default function Home ( { navigation } ) {

  const [tamanho] = useState (new Animated.Value(5));
  const [largura] = useState (new Animated.Value(10));
  const [altura] = useState (new Animated.Value(50));

  Animated.sequence([
  Animated.timing(tamanho,{toValue:26.5, delay:0, duration:2000}),
  Animated.spring(largura,{toValue:250, tension:80, friction:7, velocity:20, width: 450}),
  Animated.loop(Animated.sequence([Animated.decay(altura,{ velocity:0.5, deceleration:0.997})])).start()
  ]).start();
  
  return (
    <View style={Styles.container}>
      <Animated.Text style={{fontSize:tamanho, backgroundColor: 'blue', color: 'white', marginBottom: 10}}>
        Bem Vindo ao Seu Banco!
      </Animated.Text>       
      <Animated.Image source={require('../assets/bank.jpg')} style={{ flexDirection:"columns", height:largura, width:300}}>           
      </Animated.Image>
      <Animated.Image source={require('../assets/loteria.png')} style={{ flexDirection:"columns", height:altura, width:300, marginTop: 10}}> 
      </Animated.Image>
    </View>
  );
}