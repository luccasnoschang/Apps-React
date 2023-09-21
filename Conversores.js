import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [entradaReal, setEntradaReal] = useState('');
  const [saidaDolar, setSaidaDolar] = useState('...'); 
  
  function converterR_D(){
    let dolar = Number(entradaReal) / 4.87
    setSaidaDolar(dolar.toFixed(2))
  }

  const [entradaDolar, setEntradaDolar] = useState('');
  const [saidaReal, setSaidaReal] = useState('...'); 
    
  function converterD_R(){
    let real = Number(entradaDolar) * 4.87
    setSaidaReal(real.toFixed(2))
  }
 
  return (

    <ScrollView>

    <View style={styles.container}>
      <Text style={styles.textoH1}>Conversores</Text>
    
{/* real para dolar */}

    <View style={styles.card}>
      <Text>Real pra dolar</Text>
      <TextInput 
      style={styles.input}
      value={entradaReal}
      onChangeText={setEntradaReal}
      keyboardType='numeric'
      />
      <TouchableOpacity style={styles.botao} onPress={converterR_D}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </TouchableOpacity>
      <Text>U${saidaDolar}</Text>
    </View>

{/* dolar para real */}

    <View style={styles.card}>
      <Text>Dolar para Real</Text>
      <TextInput 
      style={styles.input}
      value={entradaDolar}
      onChangeText={setEntradaDolar}
      keyboardType='numeric'
      />
      <TouchableOpacity style={styles.botao} onPress={converterD_R}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </TouchableOpacity>
      <Text>R${saidaReal}</Text>
    </View>
    
    <View style={styles.card}>
      <Text>Real para Euro</Text>
    </View>

    <View style={styles.card}>
      <Text>Euro para Real</Text>
    </View>

    <View style={styles.card}>
      <Text>Real para Bitcoin</Text>
    </View>

    <View style={styles.card}>
      <Text>Bitcoin para Real</Text>
    </View>

      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:10,
  },
  textoH1: {
    fontSize:60,
  },
  input:{
    borderWidth:1,
    width:60,
    borderRadius:10,
    padding:5,
  },
  card:{
    width:"95%",
    height:200,
    backgroundColor:'pink',
    borderWidth:1,
    borderRadius:10,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:15,
  },
  botao:{
    borderWidth:1,
    padding:10,
    borderRadius:10,
  },
  textoBotao:{

  },
});
