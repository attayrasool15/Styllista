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
import Colors from '../../constants/colors/colors';

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
          <Icon name="logout" size={30} color={Colors.greyDark} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://cdn.shopify.com/s/files/1/1038/1798/files/32._Messy_Crop_with_Violet_Streaks_Short_Hairstyles_With_Layers.png?v=1733879854',
          }}
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
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: Colors.black,
  },
  name: {
    fontSize: 20,
    fontWeight: '400',
    color: '#333',
    marginBottom: 8,
  },
  profession: {
    fontSize: 20,
    color: '#333',
    fontFamily: '',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default HomeScreen;
