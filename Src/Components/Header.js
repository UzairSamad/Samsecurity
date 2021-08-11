import React, {Component} from 'react';
import {View, Image, Text, ImageBackground, StyleSheet} from 'react-native';
import Theme from '../Utils/Theme';

const Header = ({
  leftIcon,
  errorIcon,
  mailIcon,
  filter,
  errorNotifications,
  mailNotifications,
}) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/Images/back.png')}
        style={styles.backImage}
        imageStyle={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <View style={styles.backView}>
          <Image source={leftIcon} style={styles.menuIcon} />
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: '30%',
              }}>
              <Image source={errorIcon} style={styles.errorIcon} />
              <Text style={styles.noti}>{errorNotifications}</Text>
              <Image source={mailIcon} style={styles.mailIcon} />
              <Text style={styles.notify}>{mailNotifications}</Text>
            </View>
            <Image source={filter} style={styles.filter} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backImage: {
    height: 100,
  },
  backView: {
    backgroundColor: Theme.primary,
    height: 100,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
    opacity: 0.9,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  filter: {
    height: 25,
    width: 25,
    alignSelf: 'flex-end',
    top: 9,
  },
  menuIcon: {
    height: 20,
    width: 30,
  },
  errorIcon: {
    height: 17,
    width: 20,
    right: 10,
  },
  mailIcon: {
    height: 14,
    width: 18,
    right: 5,
  },
  noti: {
    color: Theme.white,
    right: 10,
  },
  notify: {
    color: Theme.white,
  },
});

export default Header;
