import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const timeSlots = [
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM',
  '05:00 PM',
  '05:30 PM',
];

const CalendarScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Daily');

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
       <View style={styles.logoRow}>
  <Text style={styles.logo}>💎</Text>
  <Text style={styles.title}>Stylista</Text>
</View>

        <View style={styles.statusRow}>
          <View style={styles.statusItem}>
            <View style={[styles.dot, { backgroundColor: 'red' }]} />
            <Text style={styles.statusText}>New</Text>
          </View>
          <View style={styles.statusItem}>
            <View style={[styles.dot, { backgroundColor: 'green' }]} />
            <Text style={styles.statusText}>Completed</Text>
          </View>
        </View>
        <View style={styles.dateNav}>
          <Text style={styles.navArrow}>{'<'}</Text>
          <Text style={styles.dateText}>September 19, 2025</Text>
          <Text style={styles.navArrow}>{'>'}</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {['Daily', 'Weekly', 'Monthly'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabButton,
              selectedTab === tab && styles.tabButtonActive,
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.tabTextActive,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Time Slots */}
      <ScrollView contentContainerStyle={styles.slotContainer}>
        {timeSlots.map((slot, index) => (
          <View key={index} style={styles.slotRow}>
            <Text style={styles.slotText}>{slot}</Text>
            <View style={styles.slotBox} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 10,
    alignItems: 'center',
    marginTop:20
  },
 logoRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 4,
},
logo: {
  fontSize: 28,
  marginRight: 6,
},
title: {
  fontSize: 24,
  fontFamily: 'Cochin',
  color: '#d81b60',
},

  statusRow: {
    flexDirection: 'row',
    marginTop: 5,
    gap: 10,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 4,
  },
  statusText: {
    fontSize: 12,
  },
  dateNav: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  navArrow: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  dateText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#f8bbd0',
    marginTop: 10,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: 'transparent',
  },
  tabButtonActive: {
    borderColor: '#d81b60',
  },
  tabText: {
    fontSize: 14,
    color: '#999',
  },
  tabTextActive: {
    color: '#d81b60',
    fontWeight: 'bold',
  },
  slotContainer: {
    padding: 10,
  },
  slotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  slotText: {
    width: 80,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  slotBox: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: '#fff',
  },
});

export default CalendarScreen;
