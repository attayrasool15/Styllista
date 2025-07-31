/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import Colors from '../../../constants/colors/colors';
import { CustomButton, CustomInput } from '../../../components';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    let valid = true;
    setEmailError('');
    setPasswordError('');

    if (!email.trim()) {
      setEmailError('Email is required.');
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Enter a valid email address.');
      valid = false;
    }

    if (!password.trim()) {
      setPasswordError('Password is required.');
      valid = false;
    }

    if (!valid) return;

    setLoading(true);
    setTimeout(() => {
      try {
        navigation.navigate('MainApp');
      } catch (error) {
        console.error('Navigation error:', error);
      } finally {
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/bg.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      {/* Logo in top right corner */}
      <View style={styles.brandingContainer}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.brandingImage}
          resizeMode="contain"
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <View style={styles.formContainer}>
            <View style={styles.loginBox}>
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

              <CustomInput
                placeholder="Password"
                value={password}
                onChangeText={text => {
                  setPassword(text);
                  if (passwordError) setPasswordError('');
                }}
                secureTextEntry
              />
              {passwordError !== '' && <Text style={styles.errorText}>{passwordError}</Text>}

              <View style={styles.rememberRow}>
                <TouchableOpacity
                  style={styles.checkboxContainer}
                  onPress={() => setRememberMe(!rememberMe)}
                >
                  <View style={[styles.checkbox, rememberMe && styles.checkedBox]}>
                    {rememberMe && <Text style={styles.checkmark}>✓</Text>}
                  </View>
                  <Text style={styles.rememberText}>Keep me logged in</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                  <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonRow}>
                <CustomButton
                  title="LOGIN"
                  onPress={handleLogin}
                  loading={loading}
                  textColor="#fff"
                  style={[styles.button, styles.loginButton]}
                />
                <CustomButton
                  title="CANCEL"
                  textColor="#fff"
                  onPress={() => navigation.goBack()}
                  style={[styles.button, styles.cancelButton]}
                />
              </View>
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
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  loginBox: {
    backgroundColor: Colors.background,
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  rememberRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    marginTop: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: Colors.textMedium,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkedBox: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  checkmark: {
    color: Colors.textLight,
    fontSize: 12,
  },
  rememberText: {
    color: Colors.black,
    fontSize: 14,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
  },
  loginButton: {
    marginRight: 10,
    backgroundColor: Colors.primary,
  },
  cancelButton: {
    marginLeft: 10,
    backgroundColor: Colors.textDark,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 8,
    marginTop: -5,
    marginLeft: 4,
  },
});

export default LoginScreen;
