import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';

export default function App() {
  const [numero, setNumero] = useState(0)
  const [imgDado, setImgDado] = useState(require('./img/dice-target.png'))

  function sortear(){
    let n = Math.ceil(Math.random() * 6)
    setNumero(n)
    switch(n){
      case 1: 
        setImgDado(require('./img/1.png'))
        break
      case 2:
        setImgDado(require('./img/2.png'))
        break
      case 3:
        setImgDado(require('./img/3.png'))
        break
      case 4:
        setImgDado(require('./img/4.png'))
        break
      case 5:
        setImgDado(require('./img/5.png'))
        break
      case 6:
        setImgDado(require('./img/6.png'))
        break
    }
  }

  return (
    <View style={styles.container}>

    <Image style={styles.imagem} source={imgDado} />
      
    <Text style={styles.texto}> Sorteio de Dados</Text>

      <TouchableOpacity style={styles.botao} onPress={sortear}>
        <Text style={styles.botao}>Sortear</Text>
      </TouchableOpacity>
    
      <StatusBar style="auto" />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    gap:30,
  },
  
  botao: {
    backgroundColor: "black",
    color:"white",
    padding:10,
    borderRadius: 10,
    fontWeight:"900",
 },

 texto: {
  fontSize:30,
  fontWeight:"700",
 },

 resultado: {
  fontSize:40,
 },
 
 imagem: {
  width:200,
  height:200,
  borderRadius:20,
 },

});
