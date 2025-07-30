import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Colors from '../../constants/colors/colors';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Auth'); // Using replace instead of navigate to prevent going back
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground 
      source={require('../../assets/images/bg.png')}
      style={[styles.container, { backgroundColor: Colors.background }]}
    >
      <View style={styles.content}>
        <Text style={[styles.title, { color: Colors.primary }]}>Stylista</Text>
        <Text style={[styles.version, { color: Colors.textMedium }]}>
          Stylista version 2.2.0
        </Text>
        <Text style={[styles.publisher, { color: Colors.publisherText }]}>
          from the publishers of
        </Text>
        <Text style={[styles.magazine, { color: Colors.magazineText }]}>
          Salon Confidential Magazine
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  version: {
    fontSize: 18,
    marginBottom: 40,
  },
  publisher: {
    fontSize: 16,
    marginBottom: 5,
  },
  magazine: {
    fontSize: 22,
    fontWeight: '600',
  },
});

export default SplashScreen;