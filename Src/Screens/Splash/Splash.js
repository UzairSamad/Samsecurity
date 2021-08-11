import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Theme from '../../Utils/Theme';

export default function Splash(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('login');
    }, 3000);
  }, []);
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../../assets/Images/logo.png')}
        style={styles.logo}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 185,
    width: 191,
  },
});
