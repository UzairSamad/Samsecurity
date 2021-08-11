import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Header from '../../Components/Header';
import TextComponent from '../../Components/textComponent';
import Theme from '../../Utils/Theme';
import ModalDropdown from 'react-native-modal-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Signup(props) {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.paddingView}>
        <Text style={styles.labelN}>Full Name</Text>
        <View style={styles.inputView}>
          <TextComponent placeholder="Your name here" />
        </View>

        <Text style={styles.labelN}>Nationality</Text>
        <View style={styles.dropdown}>
          <ModalDropdown
            dropdownStyle={{marginTop: 15}}
            textStyle={{
              color: Theme.textColorLight,
              fontSize: 14,
              paddingLeft: 13,
            }}
            isFullWidth={true}
            style={styles.dropdown1}
            options={['Nationality', 'Nationality Here']}></ModalDropdown>
          <Ionicons
            name="caret-down"
            style={{right: 10}}
            color={Theme.primary}
          />
        </View>
        <Text style={styles.labelN}>Age</Text>
        <View style={styles.dropdown}>
          <ModalDropdown
            dropdownStyle={{marginTop: 15}}
            textStyle={{
              color: Theme.textColorLight,
              fontSize: 14,
              paddingLeft: 13,
            }}
            isFullWidth={true}
            style={styles.dropdown1}
            options={['Your Age Here', 'Nationality Here']}></ModalDropdown>
          <Ionicons
            name="caret-down"
            style={{right: 10}}
            color={Theme.primary}
          />
        </View>
        <Text style={styles.labelN}>Location</Text>
        <View style={styles.inputView}>
          <TextComponent placeholder="Your name here" />
        </View>
        <Text style={styles.labelN}>Position</Text>
        <View style={styles.inputView}>
          <TextComponent placeholder="Your name here" />
        </View>
        <TouchableOpacity
          style={styles.SOS}
          onPress={() => props.navigation.navigate('StartBreakAndShift')}>
          <Image
            source={require('../../assets/Images/camera.png')}
            style={styles.logouticon}
          />
          <Text style={styles.SOSText}>Upload Photo</Text>
        </TouchableOpacity>
        <View style={styles.SAVE}>
          <Text style={styles.saveText}>Save</Text>
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
  paddingView: {
    padding: 20,
  },
  SOS: {
    backgroundColor: Theme.primary,
    flexDirection: 'row',
    width: '100%',
    marginTop: '13%',
    borderRadius: 40,
    padding: 5,
    alignSelf: 'center',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  SAVE: {
    backgroundColor: Theme.white,
    flexDirection: 'row',
    width: '100%',
    borderColor: Theme.primary,
    borderWidth: 1,
    borderRadius: 40,
    padding: 5,
    alignSelf: 'center',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logouticon: {
    height: 18,
    width: 20,
    right: 10,
  },
  SOSText: {
    color: Theme.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 18,
  },
  saveText: {
    color: Theme.primary,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 20,
  },
  label: {
    fontWeight: 'bold',

    fontSize: 14,
    textTransform: 'uppercase',
    color: Theme.primary,
  },
  labelN: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: '5%',
    textTransform: 'uppercase',
    color: Theme.primary,
  },
  dropdown1: {
    width: '95%',
  },
  dropdown: {
    borderColor: Theme.textColorLight,
    borderWidth: 1,
    marginTop: 5,
    paddingVertical: 13,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 6,
    color: Theme.textColorLight,
  },
  inputView: {
    marginTop: '2%',
  },
});
