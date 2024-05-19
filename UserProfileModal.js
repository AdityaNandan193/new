import React from 'react';
import { View, Text, Modal, Button, StyleSheet, TouchableOpacity } from 'react-native';
import UserProfile from './UserProfile';
import { useNavigation } from '@react-navigation/native'
import { FIREBASE_AUTH } from './FirebaseConfig';

const UserProfileModal = ({ onClose }) => {
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();
  const signOutNow = () => {
    auth.signOut();
    navigation.navigate("Home");
  };
  const viewRegisteredEvents = () => {
    onClose(); // Close the modal
    navigation.navigate('RegisteredEvents'); // Navigate to the RegisteredEventsScreen
  };

  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <UserProfile />

          <View style={styles.spacer} />
          {/* Close Button */}
          <Button title="Close" onPress={onClose} />

          {/* Spacer */}
          <View style={styles.spacer} />

            {/* View Registered Events Button */}
            <TouchableOpacity onPress={viewRegisteredEvents} style={styles.button}>
            <Text style={styles.buttonText}>View Registered Events</Text>
          </TouchableOpacity>
          <View style={styles.spacer} />

          {/* Logout Button */}
          <TouchableOpacity onPress={() => signOutNow()} style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  spacer: {
    height: 10,
  },
  logoutButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#006a42',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default UserProfileModal;
