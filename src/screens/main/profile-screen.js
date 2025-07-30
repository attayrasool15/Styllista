import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const ProfileScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSave = () => {
    console.log('Saving password update...');
    // add real save logic here
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={{
            uri: 'https://instagram.flhe41-1.fna.fbcdn.net/v/t51.2885-19/416019765_1315979819079679_481619201819898329_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby42NTkuYzIifQ&_nc_ht=instagram.flhe41-1.fna.fbcdn.net&_nc_cat=1&_nc_oc=Q6cZ2QFdELiWheWAEaljfsSx87rSMMnd_UfE_EiRAtEp6hAwMFa2qxoGzKLYOJ9qle5owiY&_nc_ohc=RqKmwO9D9IgQ7kNvwFBYKfM&_nc_gid=ztFX2NX3a1w3yljFkXn5QQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfQHATrFM2iZcmi-b9MSnxsw5CNtem3u5nLOM6MuzvTBlQ&oe=689038D6&_nc_sid=7a9f4b',
          }}
          style={styles.profileImage}
        />

        <Text style={styles.name}>Nikki Chase</Text>
        <Text style={styles.profession}>Hair stylist/makeup artist</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Current Password:</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            value={currentPassword}
            onChangeText={setCurrentPassword}
          />

          <Text style={styles.label}>New Password:</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            value={newPassword}
            onChangeText={setNewPassword}
          />

          <Text style={styles.label}>Confirm New Password:</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    alignItems: 'center',
    padding: 20,
    marginTop:30
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  profession: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 20,
  },
  inputGroup: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
    marginBottom: 4,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#f8bbd0',
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowColor: '#f8bbd0',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  saveButton: {
    marginTop: 30,
    backgroundColor: '#f06292',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 6,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProfileScreen;
