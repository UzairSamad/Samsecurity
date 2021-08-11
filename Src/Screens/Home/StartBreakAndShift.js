import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Header from '../../Components/Header';
import Theme from '../../Utils/Theme';

export default function StartBreakAndShift(props) {
  return (
    <View style={styles.mainContainer}>
      <Header leftIcon={require('../../assets/Images/menu.png')} />
      <View style={styles.profileView}>
        <Image
          source={require('../../assets/Images/profile.png')}
          style={styles.profile}
        />
      </View>
      <View style={styles.onlineView}>
        <Text style={styles.name}>Edythe Flatley</Text>
      </View>
      <View style={styles.timeView}>
        <Text style={styles.time}>10:55 AM</Text>
      </View>
      <View style={styles.blueRow1}>
        <View style={styles.blueBack}>
          <Image
            source={require('../../assets/Images/timer.png')}
            style={styles.icon}
          />
          <Text style={styles.iconText}>Start Shift</Text>
        </View>
        <View style={styles.blueBack}>
          <Image
            source={require('../../assets/Images/timer.png')}
            style={styles.icon}
          />
          <Text style={styles.iconText}>Start Break</Text>
        </View>
      </View>
      <Text style={styles.date}>Mon 8th November</Text>

      <View style={styles.mainBorderView}>
        <View style={styles.dateView}>
          <Text style={styles.dateText}>Started at 9:00am</Text>
          <Image
            source={require('../../assets/Images/greyTimer.png')}
            style={styles.timer}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.leftBorderView}>
            <Text style={styles.mealBreak}>Meal Break</Text>
            <Text style={{color: Theme.primary}}>Unpaid</Text>
          </View>
          <View style={styles.rightBorder}>
            <Text style={styles.mealBreak}>DURATION</Text>
            <Text style={{color: Theme.primary}}>30 min</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.leftBorderView}>
            <Text style={styles.mealBreak}>REST Break</Text>
            <Text style={{color: Theme.primary}}>Paid</Text>
          </View>
          <View style={styles.rightBorder}>
            <Text style={styles.mealBreak}>DURATION</Text>
            <Text style={{color: Theme.primary}}>15 min</Text>
          </View>
        </View>
      </View>
      <View style={styles.blueRow1}>
        <TouchableOpacity
          style={styles.blueBack}
          onPress={() => props.navigation.navigate('EventSchedule')}>
          <Image
            source={require('../../assets/Images/tick.png')}
            style={styles.logouticon}
          />
          <Text style={styles.iconText}>Request leave</Text>
        </TouchableOpacity>
        <View style={styles.blueBack}>
          <Image
            source={require('../../assets/Images/Date.png')}
            style={styles.icon}
          />
          <Text style={styles.iconText}>Timesheet</Text>
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
  timer: {
    height: 20,
    width: 20,
  },
  leftBorderView: {
    padding: 10,
    borderBottomColor: Theme.textColorLight,
    borderRightColor: Theme.textColorLight,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    width: '40%',
  },
  rightBorder: {
    padding: 10,
    borderBottomColor: Theme.textColorLight,
    alignItems: 'center',
    borderBottomWidth: 1,
    width: '60%',
  },
  mealBreak: {
    color: Theme.textColorLight,
    textTransform: 'uppercase',
    fontWeight: 'bold',
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
  blueRow1: {
    flexDirection: 'row',
    paddingLeft: 20,
    marginTop: Theme.hp('3%'),
    paddingRight: 20,
    paddingBottom: 20,
    justifyContent: 'space-between',
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
  logouticon: {
    height: 17,
    width: 19,
    right: 10,
  },
  iconText: {
    color: Theme.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  icon: {
    height: 16,
    width: 16,
    right: 10,
  },
  date: {
    color: Theme.primary,
    marginLeft: Theme.wp('9%'),
    fontWeight: 'bold',
  },
  mainBorderView: {
    borderColor: Theme.textColorLight,
    borderWidth: 1,
    width: Theme.wp('86%'),
    alignSelf: 'center',
    height: 167,
    marginTop: '3%',
    borderRadius: 7,
  },
  dateView: {
    padding: 14,

    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: Theme.textColorLight,
    borderBottomWidth: 1,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Theme.textColorLight,
  },
});
