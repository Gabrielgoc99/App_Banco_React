import React, { useRef } from 'react';
import { useState } from "react";
import { Text, View, Stylesheet, Button, Animated, SafeAreaView, Image, Linking} from 'react-native';
import { Botao } from './Componentes/Botao'
import { colors } from './Componentes/Colors'
import Styles from './Componentes/Styles'

export default function Ajuda ( { navigation, route } ) {

  const [tamanho] = useState (new Animated.Value(5));
  const [largura] = useState (new Animated.Value(10));

  const fadeAnim = useRef(new Animated.Value(0)).current;
  Animated.timing(tamanho,{toValue:26.5, delay:0, duration:2000}).start();
  Animated.spring(largura,{toValue:250, tension:80, friction:7, velocity:20, width: 450}).start();
  
  const executar = () => {
    Animated.sequence([
      Animated.timing(tamanho, {toValue:1, duration: 2000})
    ])
  }

  const fadeIn = () => {    
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000
    }).start();
  };
  
  const fadeOut = () => {    
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000
    }).start();
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.buttonRow}>
        <Botao label="Contato" onPress={fadeIn} cor={colors.botaoAzul} />
      </View>
      <Animated.View
        style={[
          Styles.fadingContainer,
          {            
            opacity: fadeAnim
          }
        ]}
      >
        <Text style={Styles.fadingText}>WhatsApp: 32999999999</Text>
        <Text style={Styles.fadingText}>E-mail: 'exibindo@exibir.com'</Text>
      </Animated.View>
      <Animated.Text style={{fontSize:tamanho, backgroundColor: 'blue', color: 'white', marginBottom: 5}}>
        Nossa Localização!
      </Animated.Text>
      <Animated.Image source={require('../assets/GPS.jpg')} style={{ flexDirection:"columns", height:largura, width:300, marginBottom: 10}}>           
      </Animated.Image>

      <Text style={Styles.paragraph}>Repositório do Projeto no Botão Abaixo:</Text>
      
      <Botao style={Styles.botao}
        label= 'GitHub' 
        onPress={() => { 
        Linking.openURL('https://github.com/Gabrielgoc99/App_Banco_React');}}
        cor={colors.botaoAzul}
      /> 
    </SafeAreaView>
  );
}