// CustomButton.js
import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Colors from '../constants/colors/colors';

const CustomButton = ({
  title,
  onPress,
  loading,
  style,
  backgroundColor,
  textColor,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        backgroundColor && { backgroundColor },
        style,
      ]}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color={textColor || Colors.white} />
      ) : (
        <Text style={[styles.buttonText, textColor && { color: textColor }]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
