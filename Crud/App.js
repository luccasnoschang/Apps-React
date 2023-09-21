import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

// let produtos = []

let produtos = [
  {nome:'abacaxi', valor:11},
  {nome:'bergamota', valor:22},
  {nome:'coco', valor:33},
  {nome:'damasco', valor:44},
  {nome:'ameixa', valor:55},
]

export default function App() {
  const [entradaNome, setEntradaNome] = useState('')
  const [entradaValor, setEntradaValor] = useState('')

  function cadastrar(){
    if(entradaNome.trim() != '' && entradaValor.trim() != ''){
      if(typeof entradaValor.trim() != 'string'){
       
        let produto = {
          nome: entradaNome.trim(),
          valor: Number(entradaValor)
        }
        
        produtos.push(produto)
        
        setEntradaNome('')
        setEntradaValor('')
        
      }else{
        alert("digite um valor válido")
        setEntradaNome('')
        setEntradaValor('')
      }
    }
  }
 
  function pesquisar(){
    
    for(let i = 0; i < produtos.length; i++){
      
      if (produtos[i].nome.toUpperCase() == entradaNome.toUpperCase()){
        setEntradaValor(produtos[i].valor.toString())
        return produtos[i]
      }

    }
  }

  function editar(){
    let produto = pesquisar()
    produto.valor = Number(entradaValor)
    setEntradaNome('')
    setEntradaValor('')
  }

  function apagar(){
    // let produto = pesquisar()
    // let i = produtos.indexOf(produto)
    // produtos.splice(i,1)

    produtos.splice(produtos.indexOf(pesquisar()),1)

    setEntradaNome('')
    setEntradaValor('')
  }
  
  function testar(){
    // let produto = pesquisar()
    // console.log(produto);
    // produto.valor = 999

    // console.log(produtos)
    // console.log(produtos.indexOf(produto));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRUD</Text>
        
        <View style={styles.espacamento}>
          <TextInput
          value={entradaNome}
          onChangeText={setEntradaNome}
          style={styles.inputs}   
          placeholder='Nome'   
          />
          
          <TouchableOpacity style={styles.botao} onPress={pesquisar}>
            <Text style={styles.textoBotao}>
              🔎
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.espacamento}>

          <TextInput
          value={entradaValor}
          onChangeText={setEntradaValor}
          style={styles.inputs}      
          placeholder='Valor'   
          />

         <TouchableOpacity style={styles.botao} onPress={apagar}>
          <Text style={styles.textoBotao}>
            🗑️
          </Text>
        </TouchableOpacity>

        </View>

      <View style={styles.espacamento}>
        <TouchableOpacity style={styles.botao} onPress={cadastrar}>
          <Text style={styles.textoBotao}>
            Adicionar
          </Text>     
        </TouchableOpacity>
    
        <TouchableOpacity style={styles.botao} onPress={editar}>
          <Text style={styles.textoBotao}>
            Editar
          </Text>
        </TouchableOpacity>
       
      </View>

        {/* <TouchableOpacity style={styles.botao} onPress={testar}>
          <Text style={styles.textoBotao}>
            Testar
          </Text>
        </TouchableOpacity> */}

      <View>
        {produtos.map( (produto, index) => (
        <Text key={index}>{produto.nome} R${produto.valor.toFixed(2)}</Text>
        ) )}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#grey',
    alignItems: 'center',
    justifyContent: 'center',
    gap:20,
    paddingTop:50,
  },
  inputs:{
    borderWidth:1,
    padding:5,
  },
  title:{
    fontSize:25,
  },                      
  botao:{
    borderWidth:1,
    padding:5,
    paddingLeft:13,
    paddingRight:13,
    borderRadius:10,
    backgroundColor:'white',                                               
  },
  textoBotao:{
    color:'black',
  },
  espacamento:{
    gap:10,
    flexDirection:'row',
  },
});
