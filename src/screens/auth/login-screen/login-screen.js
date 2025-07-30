import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';
import Colors from '../../../constants/colors/colors';
import { CustomButton, CustomInput } from '../../../components';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

const handleLogin = () => {
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
    <View style={styles.container}>
      {/* Background image without blur */}
      <ImageBackground
        source={require('../../../assets/images/bg.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Login form */}
      <View style={styles.formContainer}>
        <View style={styles.loginBox}>
          <CustomInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <CustomInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

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

            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <CustomButton
              title="LOGIN"
              onPress={handleLogin}
              loading={loading}
              style={[styles.button, styles.loginButton]}
            />
            <CustomButton
              title="CANCEL"
              onPress={() => navigation.goBack()}
              style={[styles.button, styles.cancelButton]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  backgroundImage: {
    height: '50%',
    width: '100%',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  loginBox: {
    backgroundColor: Colors.background,
    borderRadius: 20,
    padding: 25,
    marginHorizontal: 20,
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
    color: Colors.textMedium,
    fontSize: 14,
  },
  forgotPassword: {
    color: Colors.primary,
    fontSize: 14,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    borderRadius: 10,
  },
  loginButton: {
    marginRight: 10,
    backgroundColor: Colors.primary,
  },
  cancelButton: {
    marginLeft: 10,
    backgroundColor: Colors.textDark,
  },
});

export default LoginScreen;