import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity,  } from 'react-native';
import { Alert } from 'react-native-web';



export default function App() {

  const [nome, setNome] = useState('');

  const [Sede, SetSede] = useState(Boolean);

  const [ranking, Setranking] = useState(0);

  const [confederacao, Setconfederacao] = useState([]);




  function handleDescriptionChange(pnome) {

    setNome(pnome);
    
    
  }


  function handleButtonSedeTrue() {

    SetSede(true)

  }
  function handleButtonSedeFalse() {
    SetSede(false)

  }

  function handleRankingChange(pranking) {
  
    Setranking(pranking);
    
    
  }
  
  function handleRankingChange() {
  
    Setconfederacao(confederacao);
    
    
  }



  function handleButtonPress3() {
    alert(Sede)

  }

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Calculadora de IMC</Text>

      <View style={styles.inputContainer}>


      <Text style={styles.Texto}>Nome do Participante</Text>
                <TextInput

          style={styles.input}

          placeholder="Digite o nome do Participante"

          onChangeText={handleDescriptionChange}

        />
      <Text style={styles.Texto}>Sede:</Text>
      <TouchableOpacity>

      <Text ><input type="radio" value={handleButtonSedeTrue}  name="sede" />Sim</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text ><input type="radio" value={handleButtonSedeFalse} name="sede" />Não</Text>
        </TouchableOpacity>

    
          <Text style={styles.Texto}>Ranking</Text>
                <TextInput

          style={styles.input}

          placeholder="Digite o ranking"

          onChangeText={handleRankingChange}

        />

        

        

        <TouchableOpacity

          style={styles.button}

          onPress={handleButtonPress3}

        >

          <Text style={styles.buttonText}>Enviar</Text>

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

  },

  Texto: {

    color: 'Black',

    fontSize: 15,

    fontWeight: 'bold',


  },

  title:  {

    color: 'blue',

    fontSize: 40,

    fontWeight: 'bold',

    marginTop: 50,

  },
  inputContainer: {

    flex: 1,

    marginTop: 30,

    width: '90%',

    padding: 20,

    borderTopLeftRadius: 10,

    borderTopRightRadius: 10,

    alignItems: 'stretch',

    backgroundColor: '#fff'

  },

  input: {

    marginTop: 10,

    height: 60,

    backgroundColor: '#fff',

    borderRadius: 10,

    paddingHorizontal: 24,

    fontSize: 16,

    alignItems: 'stretch'

  },

  button: {

    marginTop: 10,

    height: 60,

    backgroundColor: '#ADFDD9',

    borderRadius: 10,

    paddingHorizontal: 24,

    fontSize: 16,

    alignItems: 'center',

    justifyContent: 'center',

    elevation: 20,

    shadowOpacity: 20,

    shadowColor: '#ccc',

  },

  buttonText: {

    color: '#fff',

    fontWeight: 'bold',

  }
 });