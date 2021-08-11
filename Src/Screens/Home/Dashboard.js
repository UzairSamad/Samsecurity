import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ButtonComponent from '../../Components/Button';
import Header from '../../Components/Header';
import Theme from '../../Utils/Theme';

export default function Dashboard(props) {
  return (
    <View style={styles.mainContainer}>
      <Header
        leftIcon={require('../../assets/Images/menu.png')}
        errorIcon={require('../../assets/Images/error.png')}
        mailIcon={require('../../assets/Images/messag.png')}
        filter={require('../../assets/Images/filter.png')}
        errorNotifications="2"
        mailNotifications="3"
      />
      <View style={styles.profileView}>
        <Image
          source={require('../../assets/Images/profile.png')}
          style={styles.profile}
        />
      </View>
      <View style={styles.onlineView}>
        <Text style={styles.name}>Edythe Flatley</Text>
        <Image
          source={require('../../assets/Images/online.png')}
          style={styles.online}
        />
      </View>
      <View style={styles.timeView}>
        <Text style={styles.time}>10:55 AM</Text>
      </View>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={styles.mainView}>
              <Text style={styles.scrollText}>
                Today & This Week Event notifications
              </Text>
            </View>
            <View style={styles.pinkView}>
              <Text style={styles.scrollText}>
                Today & This Week Event incident
              </Text>
            </View>
            <View style={styles.blueView}>
              <Text style={styles.scrollText}>
                Today & This Week Event sites
              </Text>
            </View>
            <View style={styles.purpleView}>
              <Text style={styles.scrollText}>
                Today & This Week Event comments & features
              </Text>
            </View>
            <View style={styles.orangeView}>
              <Text style={styles.scrollText}>Today & This Week Event sos</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.blueRow}>
        <View style={styles.blueBack}>
          <Image
            source={require('../../assets/Images/timer.png')}
            style={styles.icon}
          />
          <Text style={styles.iconText}>Start Shift</Text>
        </View>
        <View style={styles.blueBack}>
          <Image
            source={require('../../assets/Images/chat.png')}
            style={styles.icon}
          />
          <Text style={styles.iconText}>Live Chat</Text>
        </View>
      </View>
      <View style={styles.blueRow1}>
        <View style={styles.blueBack}>
          <Image
            source={require('../../assets/Images/error.png')}
            style={styles.icon}
          />
          <Text style={styles.iconText}>Incident</Text>
        </View>
        <View style={styles.blueBack}>
          <Image
            source={require('../../assets/Images/logout.png')}
            style={styles.logouticon}
          />
          <Text style={styles.iconText}>LogBook</Text>
        </View>
      </View>
      <View style={styles.blueRow1}>
        <View style={styles.blueBack}>
          <Image
            source={require('../../assets/Images/ActivityList.png')}
            style={styles.logouticon}
          />
          <Text style={styles.iconText}>Event Schedule</Text>
        </View>
        <View style={styles.blueBack}>
          <Image
            source={require('../../assets/Images/timer.png')}
            style={styles.icon}
          />
          <Text style={styles.iconText}>Start Break</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.SOS}
          onPress={() => props.navigation.navigate('Signup')}>
          <Image
            source={require('../../assets/Images/alertNotification.png')}
            style={styles.logouticon}
          />
          <Text style={styles.SOSText}>SOS</Text>
        </TouchableOpacity>
        <View style={styles.SOS}>
          <Image
            source={require('../../assets/Images/cell.png')}
            style={styles.logouticon}
          />
          <Text style={styles.SOSText}>Call Supervisor</Text>
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
  profile: {
    height: 85,
    width: 85,
  },
  profileView: {
    marginTop: -30,
    alignSelf: 'center',
  },
  onlineView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  online: {
    height: 12,
    width: 12,
    marginLeft: '1%',
  },
  name: {
    fontSize: 15,
    color: Theme.textColorLight,
    fontWeight: 'bold',
  },
  timeView: {
    width: '35%',
    alignSelf: 'center',
    padding: 8,
    alignItems: 'center',
    borderColor: Theme.textColorLight,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: '2%',
  },
  time: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Theme.textColorLight,
  },
  mainView: {
    backgroundColor: Theme.yellow,
    width: 120,
    padding: 5,
    marginLeft: 5,
    borderRadius: 7,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinkView: {
    backgroundColor: Theme.pink,
    width: 120,
    padding: 5,
    marginLeft: 5,
    borderRadius: 7,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueView: {
    backgroundColor: Theme.blue,
    width: 120,
    padding: 5,
    marginLeft: 5,
    borderRadius: 7,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  purpleView: {
    backgroundColor: Theme.purple,
    width: 120,
    padding: 5,
    marginLeft: 5,
    borderRadius: 7,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orangeView: {
    backgroundColor: Theme.orange,
    width: 120,
    padding: 5,
    marginLeft: 5,
    borderRadius: 7,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollText: {
    color: Theme.white,
    fontWeight: 'bold',
    fontSize: 11,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  blueBack: {
    backgroundColor: Theme.primary,
    flexDirection: 'row',
    width: '48%',
    borderRadius: 6,
    padding: 5,
    height: 60,

    justifyContent: 'center',
    alignItems: 'center',
  },
  SOS: {
    backgroundColor: Theme.primary,
    flexDirection: 'row',
    width: '88%',
    borderRadius: 40,
    padding: 5,
    alignSelf: 'center',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    height: 16,
    width: 16,
    right: 10,
  },
  logouticon: {
    height: 20,
    width: 16,
    right: 10,
  },
  iconText: {
    color: Theme.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  SOSText: {
    color: Theme.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 20,
  },
  blueRow: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  blueRow1: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
});
