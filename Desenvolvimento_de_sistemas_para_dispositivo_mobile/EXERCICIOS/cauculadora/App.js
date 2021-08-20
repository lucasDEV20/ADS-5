import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 



export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '+/-', '=']  

  const [currentNumber, setCurrentNumber] = useState("")
  const [lastNumber, setLastNumber] = useState("")

  //essa funçao que da o comando  para a realizaçao da operçoes
  function calculator(){
    const splitNumbers = currentNumber.split(' ')
    const fistNumber = parseFloat(splitNumbers[0])
    const lastNumber = parseFloat(splitNumbers[2])
    const operator = splitNumbers[1]
   

    //operadores  das operaçoes exercidas pela funçao caucular 
    switch(operator){
      case '+'://adiçao 
        setCurrentNumber((fistNumber + lastNumber).toString())
        return
      case '-'://subritaçao  
        setCurrentNumber((fistNumber - lastNumber).toString())
        return
      case '*'://multiplicaçao 
        setCurrentNumber((fistNumber * lastNumber).toString())
        return
      case '/': //divisao 
        setCurrentNumber((fistNumber / lastNumber).toString())
        return
    }
  }
   //se o usuario clicar no botao para realizar o cauculo, vai depender do que
   // o proprio usario decidiu como operaçao
  function handleInput(buttonPressed){
    console.log(buttonPressed)
    if(buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "*" | buttonPressed === "/" ){
      setCurrentNumber(currentNumber + " " + buttonPressed + " ")
      return
    }

     //cada a caso a baixo  referece as operaçpes de :
     //DEU - limpa o campo para imput de dados de
     //AC -   limpa toda a operação que foi realizada o fazer o  imput de dados
     // = -  exibe o  resultado direcionado pelo imput
     // +/- operaçoes variaeis pelo imput 
    switch(buttonPressed){
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length -1)))
        return
      case 'AC':
        setLastNumber("")
        setCurrentNumber("")
        return
      case '=':
        setLastNumber(currentNumber + " = ")
        calculator()
        return
      case '+/-':
        return
    }
         //determina pela operção selecionada acima botão 
    setCurrentNumber(currentNumber + buttonPressed)
  }
//--------------------------CSS-----------------------------------------
  const styles = StyleSheet.create({
  
    //Edita diretamente os resultados e tamanho de texto  
    results: {
      backgroundColor: darkMode ? "#282f3b" : "#f5f5f5",
      width: '100%',
      minHeight: 280,
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
    //agrupa e muda a fonte do numero digitado pelo usuario 
    resultText: {
      color: darkMode ? "#f5f5f5" : "#282F38",
      margin: 10,
      fontSize: 40
    },

    //edita os cauculos anteriores e define tbm aspectos do darkmod
    historyText:{
      color: darkMode ? "#B5B7BB" : "#7c7c7c",
      fontSize: 20,
      marginRight: 10,
      alignSelf: 'flex-end',
    },
     
     //edita a animação da mudança de tema (relacionado ao darkmode)
    themeButton: {
      alignSelf: 'flex-start',
      bottom: 120,
      margin: 10,
      backgroundColor: darkMode ? "#7b8084" :"#e5e5e5",
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
      
    },

    //edita o tamanho dos buttoes e alinha pelo parametro
    //ja descrito la em cima  => const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '+/-', '=']  
    buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    //emprega as operaçoes e cor e tamanho de font 
    // e estilo de texto 
    button: {
      borderColor: darkMode ? '#3f4d5b' : "#e5e5e5",
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 90, 
      minHeight: 90,
      flex: 2,
    },
    textButton: {
      color: darkMode ? "#b5b7bb" : "#7c7c7c",
      fontSize: 20,
    }, 
  });

  return (
    <View>
      <View style={styles.results}>
        <TouchableOpacity style={styles.themeButton}>
          <Entypo name={darkMode ? "light-up" : 'moon'} size={24} color={darkMode ? "white" : 'black'} onPress={() => darkMode ? setDarkMode(false) : setDarkMode(true)} />
        </TouchableOpacity>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => 
          button === '=' ?
        <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, {backgroundColor: '#9DBC7B'}]}>
          <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>{button}</Text>
        </TouchableOpacity>
          :
          <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, 
          {backgroundColor: typeof(button) === 'number' ? darkMode === true ? '#303946' : '#fff': darkMode === true ? '#414853' : '#ededed'}]}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}