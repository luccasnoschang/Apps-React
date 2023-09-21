import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from 'react';
import Feather from "@expo/vector-icons/Feather";

let postagens = [
  {imagem: 'youtube', texto: 'Ae galera, saiu video novo no canal. Passa lá pra ver eu destruindo no portugol!🔮📺 \nyuoutube.com/devManoJuca \n#fullStackPortugol #portugolehprogramacao #respeitaosdev #tmj'},
  {imagem: 'arrow-up-right', texto: 'Cada linha de código é uma oportunidade para transformar lógica em realidade. Codando para criar o futuro. 💻✨ #DesenvolvimentoInovador'},
  {imagem: 'cloud-off', texto:'Bug? Isso é apenas um quebra-cabeça esperando para ser resolvido. Encontrando soluções elegantes no mundo da programação. 🐛🔍 #DebuggingLife'},
  {imagem: 'database', texto:'Na estrada da programação, cada  erro é uma lição e cada desafio é uma chance de crescimento. A busca pela eficiência nunca para. ⚡👩‍💻 #CaminhoDoDev'},
  {imagem: 'codesandbox', texto:'Linhas de código se tornam pontes entre a imaginação e a realidade digital. Construindo possibilidades infinitas com as mãos no teclado. 🌉💡 #ArquitetoDeCodigo'},
  {imagem: 'coffee', texto:'Café, código, repetir. A rotina de um dev é uma dança constante entre criatividade e lógica. 🚀☕ #CodigoCriativo'},
  {imagem: 'codepen', texto:'Só os devs entendem a satisfação de um código limpo e bem documentado. Aquela sensação de realização é imbatível. 📝✅ #CodigoElegante'},
  {imagem: 'alert-triangle', texto:'No universo binário, os desafios se transformam em oportunidades para inovação. Codando hoje o mundo de amanhã. 🌐👨‍💻 #FuturoDoCodigo'},
  {imagem: 'activity', texto:'Enxergando além das linhas de código, vislumbrando um ecossistema de tecnologia em constante evolução. 🌍📱 #VisaoTech'},
  {imagem: 'award', texto:'A comunidade de desenvolvedores é como um vasto playground virtual, onde ideias se tornam colaborações e projetos incríveis. 🤝🌈 #ComunidadeDev'},
  {imagem: 'aperture', texto:'Cada algoritmo é uma jornada de resolução de problemas, uma trilha para aprimorar habilidades e chegar a soluções brilhantes. 🗺️✨ #AlgoritmoExplorador'},
]

export default function App() {
  const [conteudoFeed, setConteudoFeed] = useState(<Feed/>)
  function mostrarFeed(){
    setConteudoFeed(<Feed/>)
  }
  
  function mostrarPerfil(){
    setConteudoFeed(<Perfil/>)
  }

  function criarPostagem(){
    setConteudoFeed(<FormPost/>)
  }

  function pesquisar(){
    setConteudoFeed(<Pesquisar/>)
  }

  return (
    <View style={styles.container}>
    
    <View style={styles.header}>

      <View style={styles.headerTitulo}>
        <Text style={{color:`white`, fontSize:20,}}>Rede Social foda</Text>
      </View>

        <View style={styles.headerIcons}>

          <TouchableOpacity>
            <FontAwesome
            name='heart'
            size={30}
            color='#FFFFFF'
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome
            name='comments'
            size={30}
            color='#FFFFFF'
            />
          </TouchableOpacity>
        </View>
      </View>  

    <View style={styles.feed}>
      <ScrollView>
        {conteudoFeed}  
      </ScrollView>
    </View>   

    <View style={styles.footer}>
        
     <TouchableOpacity onPress={mostrarFeed}>
      <FontAwesome
      name='home'
      size={35}
      color='#FFFFFF'
      />
      </TouchableOpacity>

      <TouchableOpacity onPress={pesquisar}>
        <Feather
        name='search'
        size={35}
        color='#FFFFFF'
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={criarPostagem}>
        <Feather
        name='plus-square'
        size={35}
        color='#FFFFFF'
        />
      </TouchableOpacity>



      <TouchableOpacity onPress={mostrarPerfil}>
        <FontAwesome
        name='user'
        size={35}
        color='#FFFFFF'
        />
      </TouchableOpacity>


      </View>
        
       
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
    backgroundColor:'black',


 },
  header: {
    backgroundColor:'black',
    height: 65,   
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    fontWeight:'bold',
    fontSize:700,
    marginTop:'10%',
  },

  headerTitulo:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    fontWeight:'bold',
    width:'60%',
  },

  headerIcons:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    gap:20,
  },

  feed: {
    backgroundColor:'#fff',
    flex:1,
    height:65,
    width:'100%'
  },

  footer: {
    backgroundColor:'black',
    height:45,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    marginBottom:'10%',
  },
  input: { 
    padding:40,
    borderWidth:1,
    paddingLeft:40,
    paddingRight:40,
  },
  inputImagem:{
    marginTop:40,
    padding:5,
    borderWidth:1,
    paddingLeft:40,
    paddingRight:40,
  },
  botao:{
    borderWidth:1,
    padding:5,
    paddingLeft:13,
    paddingRight:13,
    borderRadius:10, 
    backgroundColor:'grey',                                            
  },
  textoBotao:{
    color:'white',
    fontWeight:'bold',
  },
  espacamento:{
    gap:10,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },

});

function Feed(){
  return (

    <View>
      {/* <Post imagem={postagens[0].imagem} texto={postagens[0].texto}/> */}

      {postagens.map((post, index) => (
        <Post imagem={post.imagem} texto={post.texto} key={index}/>
      ) )}
    </View>

  )
}

function Post(props){
  return(
    <View style={{alignItems:'center', padding:20}}>
      <Feather
        name={props.imagem}
        size={160}
        color='#black'
      />

      <Text>{props.texto}</Text>

    </View>
  )
}

function Perfil(){
  return(
    <View>
      <Feather
      name='image'
      size={160}
      color='#black'
      />
      <Text> </Text>
    </View>
  )
}

function FormPost(){
  const [inputImagem, setInputImagem] = useState('');
  const [inputTexto, setInputTexto] = useState('');

  function cadastrar(){
    if(inputImagem.trim() != '' && inputTexto.trim() != ''){
       
        let postCriado = {
          imagem: inputImagem.trim(),
          texto: inputTexto.trim(),
        }
        
        postagens.unshift(postCriado)
        console.log(postagens)
        
        setInputImagem('')
      }
}
  return (
  
    <View style={styles.espacamento}>

      <TextInput
      multiline='true'
      value={inputImagem}
      onChangeText={setInputImagem}
      style={styles.inputImagem}   
      placeholder='Nome da imagem'
      />

      <TextInput
      multiline='true'
      value={inputTexto}
      onChangeText={setInputTexto}
      style={styles.input}   
      placeholder='Texto do post'
      />

     <TouchableOpacity style={styles.botao} onPress={cadastrar}>
        <Text style={styles.textoBotao}>
          Cadastrar
        </Text>
      </TouchableOpacity>

    </View>
  )
}

function Pesquisar(){
  return(
    alert('foi')
  )
}