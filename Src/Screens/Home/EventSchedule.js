import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Header from '../../Components/Header';
import Theme from '../../Utils/Theme';

export default function EventSchedule() {
  return (
    <View style={styles.mainContainer}>
      <Header filter={require('../../assets/Images/filter.png')} />
      <Text style={styles.event}>Event Dashboard</Text>
      <ScrollView>
        <View style={styles.mainBorderView}>
          <View style={styles.dateView}>
            <Text style={styles.dateText}>Schedule Event</Text>
            <Image
              source={require('../../assets/Images/event.png')}
              style={styles.timer}
            />
          </View>
          <View style={styles.rowList}>
            <Text style={styles.list}>List View</Text>
            <Image
              source={require('../../assets/Images/blueArrow.png')}
              style={styles.arrow}
            />
          </View>
        </View>
        <View style={styles.mainBorderView1}>
          <View style={styles.dateView1}>
            <Text style={styles.dateText}>Upcoming Events</Text>
            <Image
              source={require('../../assets/Images/event.png')}
              style={styles.timer}
            />
          </View>
          <View style={styles.rowList}>
            <Text style={styles.list1}>List View</Text>
            <Image
              source={require('../../assets/Images/pinkArrow.png')}
              style={styles.arrow}
            />
          </View>
        </View>
        <View style={styles.mainBorderView2}>
          <View style={styles.dateView2}>
            <Text style={styles.dateText}>Ongoing Event</Text>
            <Image
              source={require('../../assets/Images/event.png')}
              style={styles.timer}
            />
          </View>
          <View style={styles.rowList}>
            <Text style={styles.list2}>List View</Text>
            <Image
              source={require('../../assets/Images/lightBlueArrow.png')}
              style={styles.arrow}
            />
          </View>
        </View>
        <View style={styles.mainBorderView3}>
          <View style={styles.dateView3}>
            <Text style={styles.dateText}>Completed</Text>
            <Image
              source={require('../../assets/Images/event.png')}
              style={styles.timer}
            />
          </View>
          <View style={styles.rowList}>
            <Text style={styles.list3}>List View</Text>
            <Image
              source={require('../../assets/Images/purpleArrow.png')}
              style={styles.arrow}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  list: {
    color: Theme.primary,
    fontWeight: 'bold',
  },
  list1: {
    color: Theme.pink,
    fontWeight: 'bold',
  },
  list2: {
    color: Theme.blue,
    fontWeight: 'bold',
  },
  list3: {
    color: Theme.purple,
    fontWeight: 'bold',
  },
  rowList: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '2%',
    justifyContent: 'space-between',
    paddingEnd: '3%',
    paddingStart: '3%',
  },
  arrow: {
    height: 20,
    width: 20,
  },
  event: {
    color: Theme.white,
    marginTop: -26,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  mainBorderView: {
    borderColor: Theme.primary,
    borderWidth: 1,
    width: Theme.wp('86%'),
    alignSelf: 'center',
    height: 127,
    marginTop: '10%',
  },
  mainBorderView1: {
    borderColor: Theme.pink,
    borderWidth: 1,
    width: Theme.wp('86%'),
    alignSelf: 'center',
    height: 127,
    marginTop: '10%',
  },
  mainBorderView2: {
    borderColor: Theme.blue,
    borderWidth: 1,
    width: Theme.wp('86%'),
    alignSelf: 'center',
    height: 127,
    marginTop: '10%',
  },
  mainBorderView3: {
    borderColor: Theme.purple,
    borderWidth: 1,
    width: Theme.wp('86%'),
    alignSelf: 'center',
    height: 127,
    marginTop: '10%',
  },
  dateView: {
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: Theme.textColorLight,
    borderBottomWidth: 1,
    paddingVertical: 30,
    backgroundColor: Theme.primary,
  },
  dateView1: {
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: Theme.textColorLight,
    borderBottomWidth: 1,
    paddingVertical: 30,
    backgroundColor: Theme.pink,
  },
  dateView2: {
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: Theme.textColorLight,
    borderBottomWidth: 1,
    paddingVertical: 30,
    backgroundColor: Theme.blue,
  },
  dateView3: {
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: Theme.textColorLight,
    borderBottomWidth: 1,
    paddingVertical: 30,
    backgroundColor: Theme.purple,
  },
  dateText: {
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: Theme.white,
  },

  timer: {
    height: 30,
    width: 25,
  },
});
