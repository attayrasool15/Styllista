// CustomInput.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Colors from '../constants/colors/colors';
const CustomInput = ({  ...props }) => {
  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        placeholderTextColor={Colors.secondary}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.accent,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.lightGray,
  },
 
  input: {
    flex: 1,
    color: Colors.textPrimary,
    fontSize: 16,
    paddingVertical: 0, // Fix for Android
  },
});

export default CustomInput;