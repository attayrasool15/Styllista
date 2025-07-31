import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { CustomButton, CustomInput } from '../../../components';
import Colors from '../../../constants/colors/colors';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleReset = () => {
    setEmailError('');
    setSubmitted(false);

    if (!email.trim()) {
      setEmailError('Email is required.');
      return;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Enter a valid email address.');
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/bg.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <View style={styles.formContainer}>
            <View style={styles.box}>
              <Text style={styles.title}>Forgot Password</Text>
              <Text style={styles.subtitle}>Enter your email to reset your password</Text>

              <CustomInput
                placeholder="Email"
                value={email}
                onChangeText={text => {
                  setEmail(text);
                  if (emailError) setEmailError('');
                }}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {emailError !== '' && <Text style={styles.errorText}>{emailError}</Text>}

              {submitted && (
                <Text style={styles.successText}>
                  Password reset link sent to your email.
                </Text>
              )}

              <CustomButton
                title="SEND RESET LINK"
                onPress={handleReset}
                style={styles.button}
                textColor="#fff"
              />
              <CustomButton
                title="BACK TO LOGIN"
                onPress={() => navigation.goBack()}
                style={[styles.button, styles.cancelButton]}
                textColor="#fff"
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 2,
    width: 60,
    height: 60,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  box: {
    backgroundColor: Colors.background,
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.textDark,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textMedium,
    marginBottom: 20,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 4,
  },
  successText: {
    color: 'green',
    fontSize: 13,
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingVertical: 14,
  },
  cancelButton: {
    backgroundColor: Colors.textDark,
  },
});

export default ForgotPasswordScreen;
