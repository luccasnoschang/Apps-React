import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const emoji = ['👾','👽','👻','☠','💩','🤡','👹','🤖','🐱‍🏍','🦄','🧠','🕷','🦠','🐙','👄','🦉','🐉','🎁','🎸','🍺','🛹','🌍','❄','⚡','🔥','💤','💭','💨','🕑']

export default function App() {
  
  const [emojiEscolhido, setEmojiEscolhido] = useState('🎲')
  const [historico, setHistorico] = useState('')
  let i

  function sorteia(){
    
      i = Math.floor(Math.random() * emoji.length)

      // setEmojiEscolhido(emoji[i])  
      // setHistorico(historico + emojiEscolhido)
      setHistorico(historico + emoji.splice(i,1))
      // console.log(historico)
      console.log(emoji)

  }   

  return (
    <View style={styles.container}>

      <View style={styles.historicoView}>
        <Text style={styles.historico}>{historico}</Text>
      </View>
      
      <Text style={styles.emojis}>{emojiEscolhido}</Text>
      <TouchableOpacity style={styles.botao} onPress={sorteia}>
        <Text>Testar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:50,
  },
    botao:{
      borderWidth:1,
      padding:10,
      borderRadius:5,
  },
  emojis:{
    fontSize:80,
  },
  historicoView:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  historico:{
    flexDirection:'column',
    fontSize:50,
  },
});


