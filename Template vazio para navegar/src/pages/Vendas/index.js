import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Vendas(){
    return(
        <View style={styles.container}>
            <Text>Tela Vendas</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})