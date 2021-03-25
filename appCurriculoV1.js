import React from "react";
import {StyleSheet, View, Text, Image, Alert, TouchableOpacity} from "react-native";
import foto from './assets/foto.jpg';
import Icon from "react-native-vector-icons/Feather";

const App = () => {

  function handleRedeSocial(rede_social){
    switch(rede_social){
      case "linkedin":
        Alert.alert ("Meu LinkedIn é:","https://www.linkedin.com/in/emilly-lamotte-4b55a2182/")
      break
      case "github":
        Alert.alert ("Meu GitHub é","https://github.com/emillylamotte")
      break
      case "instagram":
        Alert.alert ("Meu Instagram é:","https://www.instagram.com/emilly_lamotte/?hl=pt-br")
      break
    }
  }
 
  return (
  <>
  <View style ={style.page}> 
      <View style={style.containerCabecalho}>
        <Image source={foto} style = {style.foto}/>
        <Text style={style.nome}>Emilly Lamotte</Text>
        <Text style={style.funcao}>Graduanda em Engenharia de Automação - FURG</Text>
      </View>

      <View style = {style.redessociais}>
          <TouchableOpacity onPress={()=>handleRedeSocial('github')}>
            <Icon name = "github" size={30}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handleRedeSocial('linkedin')}>
            <Icon name = "linkedin" size={30}/>
          </TouchableOpacity>    
          <TouchableOpacity onPress={()=>handleRedeSocial('instagram')}>
            <Icon name = "instagram" size={30}/>
          </TouchableOpacity>    
           
      </View>
        <View  style = {style.card_conteiner}>
          <Text style = {style.card_content_text}>Experiência profissional:</Text>
          <Text style = {style.card_content_text}>Nesse card você pode descrever suas experiências</Text>
          <Text style = {style.card_content_text}>- Experiência atual;</Text>
          <Text style = {style.card_content_text}>- Experiência anterior;</Text>
        </View>
        <View  style = {style.card_conteiner}>
          <Text style = {style.card_content_text}>Formação Complementar:</Text>
          <Text style = {style.card_content_text}>Nesse card você pode descrever outras competências adquiridas</Text>
          <Text style = {style.card_content_text}>- Curso 1;</Text>
          <Text style = {style.card_content_text}>- Curso 2;</Text>
        </View>
  </View>
    
  </>
  );
};

const style = StyleSheet.create({
  page:{
    backgroundColor: "#E7E7E7",//cinza
    flex:1, //prioridade 1
  },
  foto:{
    width: 250,
    height: 250,
    borderRadius: 125,//deixando as bordas arredondadas
  },
  containerCabecalho:{
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 30,
  },
  nome:{
    fontSize:32,
    fontWeight:"bold",
    marginTop:10, //espaçamento em cima
  },
  funcao:{
   color: "#000000",
   marginBottom:10, //espaçamento embaixo
  },
  redessociais:{
    flexDirection: "row",//icones em linha
    justifyContent: "space-between", //espaço entre os icones
    alignContent: "center",
    width: '50%',
    marginTop: 20,
    marginLeft:100,
  },
  card_content_text:{
    color: "#000000",
    alignContent: "center",
    padding:5,
  },
  card_conteiner:{
    width:'90%',
    marginTop: 20,
    marginLeft: 15,
    backgroundColor:"#FFFFFF",
    borderRadius:5,
    borderWidth:1,
    borderColor:"#000000",
    padding:10
  },
  
})

export default App;