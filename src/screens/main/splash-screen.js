import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Animated,
} from 'react-native';
import Colors from '../../constants/colors/colors';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace('Auth');
    }, 4000);

    return () => clearTimeout(timer);
  }, [fadeAnim, navigation]);

  return (
    <ImageBackground
      source={require('../../assets/images/bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
          {/* Logo */}
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.title}>Stylista</Text>
          <Text style={styles.version}>version 2.2.0</Text>

          <Text style={styles.publisher}>from the publishers of</Text>
          <Text style={styles.magazine}>Salon Confidential Magazine</Text>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 25,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
  },
  version: {
    fontSize: 16,
    color: Colors.textMedium,
    marginBottom: 30,
  },
  publisher: {
    fontSize: 15,
    color: Colors.textDark,
    marginBottom: 4,
  },
  magazine: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.magazineText,
  },
});

export default SplashScreen;
