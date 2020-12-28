import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import logo from './assets/logo.png'

export default function App() {

  const [ip, useIp] = useState('')

  const findMyIp = async() => {
    useIp('Descobrindo IP...')
    const value = await fetch('http://httpbin.org/ip') 
    const data =  await value.json()
    useIp(data.origin)

  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image source={logo}/>
        <Text style={styles.ip}>{ip}</Text>
        <Button title='Descobrir meu IP' onPress={findMyIp}></Button>
      </View>
      <View style={styles.footer}>
        <Text style={styles.made}>
          Feito com ❤ por Vinicius Beletate
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F2336',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ip: {
    color: 'white',
    paddingTop: 20,
    paddingBottom: 20
  },
  footer: {
    paddingTop: 10,
    paddingBottom: 10
  },
  made: {
    color: 'white',
    textAlign: 'center'
  }
});
