import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [isOn, setIsOn] = useState(false);
  const togglePower = () => {
    setIsOn(!isOn);
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        onPress: () => {
          // Add any session clearing logic here
          navigation.reset({
            index: 0,
            routes: [{ name: 'LogIn' }],
          });
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={handleLogout} style={styles.iconWrapper}>
          <Icon name="logout" size={40} color={isOn ? '#00e676' : '#b0bec5'} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/300?img=15' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Ariana Bloom</Text>
        <Text style={styles.profession}>Hair Stylist / Makeup Artist</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
    marginTop: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  profession: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
});

export default HomeScreen;
