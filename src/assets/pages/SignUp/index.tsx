import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';


export default function SignUp() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [nome, setNome] = useState('')

  function handleRegister(){
    if(email === ''){
      alert("Preencha o email.");
      
    }
    if(senha === ''){
      alert("Preencha com alguma senha.");
      
    }
    if(nome ===''){
      alert("Informe seu nome.");
      
    }
    console.log("Seu registro foi concluido com sucesso: " + nome)
  }


  return (


    <View style={styles.container}>
      <Text style={styles.saudacao}>Bem-vindo!</Text>

      <Text style={styles.saudacao2}>Realize seu cadastro.</Text>

      <TextInput
      placeholder='Seu nome'
      style={styles.inputNome}
      value={nome}
      onChangeText={setNome}
      />


      <TextInput
      placeholder='Seu e-mail'
      style={styles.inputEmail}
      value={email}
      onChangeText={setEmail}
      />


      <TextInput
      secureTextEntry={true}
      placeholder='Sua senha'
      style={styles.inputSenha}
      value={senha}
      onChangeText={setSenha}
      />


      <View style={styles.forgot}>
        <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
          <Text style={styles.textRegister}>Registrar-se</Text>
        </TouchableOpacity>

        <TouchableOpacity >
          <Text style={styles.textForgot}>Já possui conta?</Text>
        </TouchableOpacity>

      </View>

    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex:2,
    backgroundColor: "#FFF",
    alignItems: 'center',
    justifyContent:'center',
  },
  saudacao:{
    justifyContent: 'center',
    marginTop:2,
    fontSize:40,
    fontWeight: 'bold',
    color:'#1E1E1E'
  },
  saudacao2:{
    justifyContent: 'center',
    marginTop:2,
    fontSize:15,
    fontWeight: 'bold',
    color:'#1E1E1E',
    marginBottom:10
  },
  inputNome:{
    marginTop:25,
    width: '90%',
    height:45,
    backgroundColor:'#fff',
    marginBottom: 20,
    padding:10,
    borderRadius:16,
    borderWidth:1,
    borderColor:'#1E1E1E'
  },
  inputEmail:{
    marginTop:2,
    width: '90%',
    height:45,
    backgroundColor:'#fff',
    marginBottom: 20,
    padding:10,
    borderRadius:16,
    borderWidth:1,
    borderColor:'#1E1E1E'
  },
  inputSenha:{
    marginTop:2,
    width: '90%',
    height:45,
    backgroundColor:'#fff',
    marginBottom: 20,
    padding:10,
    borderRadius:16,
    borderWidth:1,
    borderColor:'#1E1E1E'
    
  },
  forgot:{
    width:'90%',
    alignItems:'center'
  },
  textForgot:{
    marginTop:18,
    color:'#1E1E1E',
    fontWeight: 'bold',
    fontSize:15

  },
  buttonRegister:{
   marginTop:'2%',
   backgroundColor:'#1E1E1E',
   width:'80%',
   height:45,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:15
  },
  textRegister:{
    color:'#fff',
    fontWeight: 'bold',
    fontSize:18
  }
});
