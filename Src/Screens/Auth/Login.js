import { ThemeProvider } from '@react-navigation/native';
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import ButtonComponent from '../../Components/Button';
import TextComponent from '../../Components/textComponent';
import Theme from '../../Utils/Theme';
import axios from "axios";

export default function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    let apiPath = `http://g6ca9akmpg3fs7mg.dyn-o-saur.com:8078/event/request/token ?db=elite_event_management_v1&login=${email}&password=${password}`
    // axios
    //   .get(`${apiPath}`, { headers: { "Token": 'd55c8bcd8860de9cda4b66812badabaf4cbfc02a' } })
    //   .then((response) => {
    //     alert('success')
    //   })
    //   .catch((error) => {
    //     alert('error')
    //     console.log(error, 'errr')

    //   });

    fetch(apiPath, {
      method: "GET",
      headers: {
        "Token": 'd55c8bcd8860de9cda4b66812badabaf4cbfc02a'
      },
      credentials: "same-origin"
    }).then((response) => {


    }).catch((error) => {
      alert('error')
      console.log(error, 'errr')

    });

  }
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../../assets/Images/back.png')}
        style={styles.backImage}
        imageStyle={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <View style={styles.backView}>
          <Image
            source={require('../../assets/Images/logo.png')}
            style={styles.logo}
          />
          <View style={styles.images}>
            <TouchableOpacity>

              <Image
                source={require('../../assets/Images/client.png')}
                style={styles.smallImage}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/Images/staff.png')}
                style={styles.staff}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/Images/supervisior.png')}
                style={styles.supervisior}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/Images/manager.png')}
                style={styles.manager}
              /></TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.paddingView}>
        <TextComponent placeholder="Enter Your Email" leftIcon="mail" onChangeText={val => setEmail(val)}
        />
        <View style={{ marginTop: '8%' }}>
          <TextComponent
            placeholder="Enter Your Password"
            leftIcon="lock-closed"
            source={require('../../assets/Images/eye.png')}
            onChangeText={val => setPassword(val)}
          />
        </View>
        <Text style={styles.forgot}>Forgot Password</Text>
        <View>
          <ButtonComponent
            text="LOGIN"
            onPress={() => handleLogin()}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  backImage: {
    height: 400,
  },
  backView: {
    backgroundColor: Theme.primary,
    height: 400,
    width: '100%',
    opacity: 0.9,
    justifyContent: 'center',
    alignSelf: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  forgot: {
    color: Theme.primary,
    fontSize: 14,
    top: 5,
    textAlign: 'right',
  },
  paddingView: {
    padding: 22,
    marginTop: '6%',
  },
  logo: {
    height: 120,
    width: 123,
    marginTop: Theme.hp('8%'),
    alignSelf: 'center',
  },
  smallImage: {
    height: 65,
    width: 40,
  },
  staff: {
    height: 70,
    width: 60,
    marginTop: -10,
  },
  images: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: Theme.hp('8%'),
    justifyContent: 'space-evenly',
  },
  supervisior: {
    height: 65,
    width: 67,
  },
  manager: {
    height: 65,
    width: 52,
  },
});
