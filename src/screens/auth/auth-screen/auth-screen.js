import React from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
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
          <Image
            source={require('../../../assets/images/logo.png')} // ← your logo path
            style={styles.brandingImage}
            resizeMode="contain"
          />
        </View>

        {/* Buttons at the bottom */}
        <View style={styles.buttonContainer}>
          <CustomButton
            title="LOG IN"
            backgroundColor="#ccc"
            textColor="#fff"
            onPress={() => navigation.navigate('LogIn')}
          />

          <CustomButton
            title="SIGN UP"
            onPress={() => navigation.navigate('SignUp')}
            buttonStyle={styles.signupButton}
            textColor="#fff"
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
    top: 40,
    right: 20,
    zIndex: 2,
    width: 60,
    height: 60,
  },
  brandingImage: {
    width: '100%',
    height: '100%',
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
    marginBottom: 15,
    width: '100%',
  },
  signupButton: {
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
