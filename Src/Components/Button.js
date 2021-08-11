import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Theme from '../Utils/Theme';

const ButtonComponent = ({onPress, text, source}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btn}>
        <Text numberOfLines={1} style={styles.btnText}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: Theme.hp('4%'),
    alignItems: 'center',
    backgroundColor: Theme.primary,
    paddingVertical: 12,
    paddingHorizontal: 4,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  btnText: {
    color: Theme.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ButtonComponent;
