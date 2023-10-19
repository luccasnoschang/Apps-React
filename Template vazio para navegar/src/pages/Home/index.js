import React from "react";
import { View, Text, StyleSheet, Button, Touchable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>

            <Text>Tela Home</Text>

            <View>

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Sobre')}>
                <Text>
                    Ir para Sobre
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Vendas')}>
                <Text>
                    Ir para Vendas
                </Text>
            </TouchableOpacity>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao:{
        borderWidth:1,
        borderRadius:5,
        padding:5,
    },
})