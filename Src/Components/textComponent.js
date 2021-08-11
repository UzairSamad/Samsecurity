import React from 'react';
import {View, TextInput, Image} from 'react-native';
import Theme from '../Utils/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TextComponent = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  source,
  leftIcon,
}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flexDirection: 'row',
        shadowColor: 'grey',
        shadowOpacity: 0.4,
        shadowOffset: {width: 0, height: 5},
        shadowRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: Theme.textColorLight,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 4,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Ionicons
          name={leftIcon}
          size={20}
          color={Theme.primary}
          style={{marginLeft: '2%'}}
        />
        <TextInput
          value={value}
          keyboardType={keyboardType}
          style={{
            flex: 1,
            height: Theme.wp('12%'),
            fontSize: Theme.wp('3%'),
            backgroundColor: '#fff',
            paddingLeft: 10,
            fontSize: 15,

            borderRadius: 10,
          }}
          placeholder={placeholder}
          placeholderTextColor="#7A869A"
          onChangeText={onChangeText}
        />
        <Image
          source={source}
          style={{
            height: 18,
            width: 20,
            marginRight: Theme.wp('4%'),
          }}
        />
      </View>
    </View>
  );
};
export default TextComponent;
