import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import RadioGroup from 'react-native-radio-buttons-group';
import { CustomButton, CustomInput } from '../../../components';
import Colors from '../../../constants/colors/colors';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [job, setJob] = useState();

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
  const handleImagePress = () => {
    const options = [
      {
        text: 'Take Your Photo',
        onPress: () => launchCamera({ mediaType: 'photo' }, handleImgResponse),
      },
      {
        text: 'Choose From Gallery',
        onPress: () =>
          launchImageLibrary({ mediaType: 'photo' }, handleImgResponse),
      },
    ];

    if (imageUri) {
      options.push({
        text: 'Remove Photo',
        onPress: () => setImageUri(null),
        style: 'destructive',
      });
    }
    Alert.alert('Select Option', 'Choose Image Source', options);
  };
  const handleImgResponse = response => {
    if (response.didCancel || response.errorCode) return;
    if (response.assets && response.assets.length > 0) {
      setImageUri(response.assets[0].uri);
    }
  };
  const radioButtons = useMemo(
    () => [
      {
        id: '1',
        label: 'Hairstylist',
        value: 'Hairstylist',
        labelStyle: { fontSize: 10 },
      },
      {
        id: '2',
        label: 'Makeup Artist',
        value: 'Makeup Artist',
        labelStyle: { fontSize: 10 },
      },
      {
        id: '3',
        label: 'Both',
        value: 'Both',
        labelStyle: { fontSize: 10 },
      },
    ],
    [],
  );

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
          <View style={styles.signinHeader}>
            <Text style={styles.signinText}>Sign Up</Text>
          </View>
          <View style={styles.formBox}>
            <TouchableOpacity onPress={handleImagePress}>
              <Image
                style={styles.img}
                source={
                  imageUri
                    ? { uri: imageUri }
                    : require('../../../assets/images/placeholderIMG.png')
                }
              />
              <Text style={styles.imgText}>Upload Profile Photo</Text>
            </TouchableOpacity>

            <CustomInput
              placeholder="Full Name"
              value={name}
              onChangeText={text => {
                setName(text);
                if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
              }}
            />
            {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

            <View style={styles.fullRadio}>
              <Text style={{ fontWeight:'bold' }}>I am a:</Text>
              <RadioGroup
                style={styles.radio}
                radioButtons={radioButtons}
                onPress={setJob}
                selectedId={job}
                layout="row"
              />
            </View>

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
                title="SAVE"
                onPress={handleSignUp}
                backgroundColor={Colors.primary}
                textColor="#fff"
                style={[styles.button, { marginRight: 10 }]}
              />
              <CustomButton
                title="CANCEL"
                onPress={() => navigation.goBack()}
                backgroundColor={Colors.textDark}
                textColor="#fff"
                style={[styles.button, { marginLeft: 10 }]}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 200,
    borderRadius: 160,
    marginBottom: 5,
    marginTop: -21,
    alignSelf: 'center',
    borderColor: Colors.primary,
    borderWidth:1
  },
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
    top: 19,
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
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 8,
    marginLeft: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  button: {
    flex: 1,
    marginBottom: 10,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
  },
  fullRadio: {
    alignItems: 'center',
    marginBottom:9
  },
  signinText: {
    color: Colors.greyLight,
    fontSize: 16,
    fontWeight: 'bold',
  },
  signinHeader: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  imgText:{
    textAlign:'center',
    fontWeight:'bold',
    marginBottom:3
  }
});

export default SignUpScreen;
