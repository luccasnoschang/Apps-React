import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import Feather from "@expo/vector-icons/Feather";
import { useState } from 'react';

let inputs = [
  {texto:'BIN', placeholder:'BASE 2'},
  {texto:'OCT', placeholder:'BASE 8'},
  {texto:'DEC', placeholder: 'BASE 10'},
  {texto:'HEX', placeholder: 'BASE 16'},
]

export default function App() {
  
  return (
    <View style={styles.container}>

      <Header />
      <Body/>
      <Footer />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2370f4',
  },
  headerCima: {
    width: '100%',
    height: 65,
    alignItems: 'center',
    justifyContent: 'space-around',
    textAlign: 'center',
    backgroundColor: '#2370f4',
    flexDirection:'row',
  },
  header: {
    marginTop:'5%',
    backgroundColor: '#2370f4',
    height: 65,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection:'row',
  },
  body: {
    flex: 1,
    height: 65,
    width: '100%',
    backgroundColor: '#222222',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  
  footer: {
    backgroundColor: 'black',
    height: 65,
    width: '100%',
    flexDirection: 'row',
    marginBottom: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fundoFooter: {
    width: '100%',
    backgroundColor: 'black',
  },
  botoes: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    gap:20,
  },
  input: { 
    padding:15,
    borderWidth:2,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    paddingLeft:90,
    paddingRight:90,
    borderColor:'#2370f4',
    color:'white',
  },
  texto:{
    backgroundColor:'#2370f4',
    border:'1px solid black',
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    padding:8.5,
    paddingLeft:15,
    paddingRight:15,
    color:'white',
  }
});

function Header() {
  return (
    <View style={{ marginTop: '15%', width: '100%',}}>

      <View style={styles.headerCima}>

        
          <Text style={{ fontSize:25, color:'white', fontWeight:'bold' }}>Conversor de base</Text>


        <View style={styles.botoes}>
          <TouchableOpacity>
            <Text style={{color:'white',fontWeight:'bold'}}>RESET</Text>
          </TouchableOpacity>
     
          <TouchableOpacity>
            <Feather
              name='more-vertical'
              size={30}
              color='#FFFFFF'
            />
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={{ fontSize:16, color:'white', fontWeight:'bold',}}>BASES COMUNS</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ fontSize:16, color:'white', fontWeight:'bold'}}>TODAS AS BASES</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

function Body() {
  return (
 
  <View style={{width:'100%', flex:1,}}>

    {inputs.map( (inpt, index) => (
      <Inputs texto={inpt.texto} placeholder={inpt.placeholder} key={index}/>
    ) )}

  </View>
 
  )
}

function Inputs(props){
  const [inputs, setInputs] = useState();
  const [conteudoBody, setConteudoBody] = useState(<Body/>)

  return (

    <View style={styles.body}>
      <View style={styles.texto}>
        <Text style={styles.texto}>{props.texto}</Text>
      </View>

      <TextInput
      multiline='true'
      value={inputs}
      onChangeText={setConteudoBody}
      style={styles.input}   
      placeholder={props.placeholder}
      placeholderTextColor='#ccccc4'
      />

    </View>

  )
}

function Footer() {
  return (
    <View style={styles.fundoFooter}>
      <View style={styles.footer}>
        <Text style={{ fontSize: 20, color: 'white' }}>footer</Text>
      </View>
    </View>
  )
}