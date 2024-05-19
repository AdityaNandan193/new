import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {  ref, get } from 'firebase/database';

import { FIREBASE_AUTH,FIREBASE_DB } from './FirebaseConfig';

const UserProfile = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const auth = FIREBASE_AUTH;
    const db = FIREBASE_DB;

    const authStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);

        if (user.email) {
          const sanitizedEmail = user.email.replace(/[^a-zA-Z0-9]/g, '_');
          const dbPath = `users/${sanitizedEmail}`;
          const userRef = ref(db, dbPath);

          get(userRef)
            .then(snapshot => {
              if (snapshot.exists()) {
                const userData = snapshot.val();
                setUserInfo(userData);
              }
            })
            .catch(error => {
              console.error('Error fetching user data:', error);
            });
        }
      }
    });

    return () => {
      authStateChanged();
    };
  }, []);

  return (
    <View style={styles.container}>
      {userEmail && (
        <Text style={styles.userInfo}>User Email: {userEmail}</Text>
      )}
      {userInfo ? (
        <Text style={styles.userInfo}>
          Additional User Data: {'\n'}
          Name: {userInfo.Name} {"\n"}
          RollNumber: {userInfo.RollNumber} {"\n"}
        </Text>
      ):null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  userInfo: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default UserProfile;
