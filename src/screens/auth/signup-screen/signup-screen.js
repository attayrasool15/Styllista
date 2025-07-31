import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { CustomButton, CustomInput } from '../../../components';
import Colors from '../../../constants/colors/colors';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState({});

  const handleSignUp = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = 'Name is required.';
    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!password) newErrors.password = 'Password is required.';
    if (!confirmPassword) newErrors.confirmPassword = 'Confirm your password.';
    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('User signed up:', { name, email, password });
    navigation.navigate('MainApp');
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/bg.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.brandingContainer}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.brandingImage}
            resizeMode="contain"
          />
        </View>

        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.formBox}>
            <CustomInput
              placeholder="Full Name"
              value={name}
              onChangeText={text => {
                setName(text);
                if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
              }}
            />
            {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

            <CustomInput
              placeholder="Email"
              value={email}
              onChangeText={text => {
                setEmail(text);
                if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
              }}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <CustomInput
              placeholder="Password"
              value={password}
              onChangeText={text => {
                setPassword(text);
                if (errors.password)
                  setErrors(prev => ({ ...prev, password: '' }));
              }}
              secureTextEntry
            />
            {errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <CustomInput
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={text => {
                setConfirmPassword(text);
                if (errors.confirmPassword)
                  setErrors(prev => ({ ...prev, confirmPassword: '' }));
              }}
              secureTextEntry
            />
            {errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}

            <View style={styles.buttonRow}>
              <CustomButton
                title="SIGN UP"
                onPress={handleSignUp}
                backgroundColor={Colors.primary}
                textColor="#fff"
                style={styles.button}
              />
              <CustomButton
                title="CANCEL"
                onPress={() => navigation.goBack()}
                backgroundColor={Colors.textDark}
                textColor="#fff"
                style={styles.button}
              />
            </View>
          </View>
        </ScrollView>
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
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  formBox: {
    backgroundColor: Colors.background,
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 8,
    marginLeft: 4,
  },
  buttonRow: {
    marginTop: 15,
  },
  button: {
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default SignUpScreen;
