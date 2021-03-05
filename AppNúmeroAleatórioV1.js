//Primeira versão de um script para criar um app (Android) que gera um número aleatório, utilizando React Native
//Emilly Lamotte

import React, {useState} from "react";
import {Text,SafeAreaView,TouchableOpacity,StyleSheet}from "react-native";

const App = () => {

  const [numero,setNumero] = useState(0)

  function handleNumero(){ 
    const novo_numero = Math.floor(Math.random()*100)
    setNumero(novo_numero)
  }

  return( 
        <SafeAreaView  style= {style.container}>
          <Text style = {style.titulo} >Aplicativo para gerar um número aleatório entre 1 e 100</Text>
           <Text style = {style.numero}>{numero}</Text>
            <TouchableOpacity onPress={handleNumero} style = {style.botao}>
              <Text style = {style.texto}>Gerar número</Text>
            </TouchableOpacity>
        </SafeAreaView>
  );
};

  const style = StyleSheet.create({
     container: {
      backgroundColor: "#808080",
      flex: 1,
      justifyContent:"center",
      alignItems: "center",
     },
    numero:{
      fontSize: 50,
      fontWeight: "bold",
      color: "#FFFFFF",
      marginTop: 10,
     },
    titulo:{
      fontSize: 20,
      fontWeight: "bold",
      color: "#FFFFFF",
      alignItems: "center",
      justifyContent:"center",
      marginBottom:100, 
    },
    texto:{
      fontSize: 20,
      fontWeight: "bold",
      color: "#000000",
      justifyContent: "center",
      alignItems: "center",
    },
    botao:{
      backgroundColor: "#FFFFFF",
      paddingHorizontal: 60,
      paddingVertical:20, 
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center", 
      marginTop: 15,  
    },
});
export default App
