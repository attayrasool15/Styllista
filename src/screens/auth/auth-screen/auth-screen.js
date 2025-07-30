import React from 'react';
import { View, Text, ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { CustomButton } from '../../../components';
import Colors from '../../../constants/colors/colors';

const AuthScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require('../../../assets/images/bg.png')} // Your background image
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        {/* Branding in top right corner */}
        <View style={styles.brandingContainer}>
          <Text style={styles.brandingText}>Stylista</Text>
        </View>

        {/* Buttons at the bottom */}
        <View style={styles.buttonContainer}>
          <CustomButton
            title="LOG IN"
            onPress={() => navigation.navigate('LogIn')}
            buttonStyle={styles.loginButton}
            textStyle={styles.buttonText}
          />
          <CustomButton
            title="SIGN UP"
            onPress={() => navigation.navigate('SignUp')}
            buttonStyle={styles.signupButton}
            textStyle={[styles.buttonText, { color: Colors.primary }]}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
  },
  brandingContainer: {
    position: 'absolute',
    top: 30,
    right: 20,
    alignItems: 'flex-end',
    height:60,
    width:100,
    backgroundColor:Colors.primary
  },
  brandingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.textLight,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  versionText: {
    fontSize: 12,
    color: Colors.textLight,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    paddingHorizontal: 30,
  },
  loginButton: {
    backgroundColor: Colors.primary,
    marginBottom: 15,
    width: '100%',
  },
  signupButton: {
    backgroundColor: Colors.background + 'AA', // Slightly transparent
    borderWidth: 2,
    borderColor: Colors.primary,
    width: '100%',
  },
  buttonText: {
    color: Colors.textLight,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AuthScreen;