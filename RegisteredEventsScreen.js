// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import { FIREBASE_DB, FIREBASE_AUTH } from './FirebaseConfig';
// import { ref, onValue } from 'firebase/database';

// const RegisteredEventsScreen = ({ navigation }) => {
//   const [userEventDetails, setUserEventDetails] = useState([]);

//   useEffect(() => {
//     const user = FIREBASE_AUTH.currentUser;
//     if (user) {
//       const sanitizedEmail = user.email.replace(/[^a-zA-Z0-9]/g, '_');
//       const dbPath = `users/${sanitizedEmail}/eventRegistrations`;

//       const dbRef = ref(FIREBASE_DB, dbPath);
//       onValue(dbRef, (snapshot) => {
//         const eventsData = snapshot.val();
//         if (eventsData) {
          
//           const eventsArray = Object.keys(eventsData).map((eventKey) => ({
//             eventName: eventKey,
//             Category : eventsData[eventKey].Category,
//           }));
          
//           setUserEventDetails(eventsArray);
//           console.log(eventsArray);
//         }
//       });
//     }
//   }, []);

//   return (
//     <View style={styles.container}>
//     <Text style={styles.header}>User Events</Text>
//     {userEventDetails.length > 0 ? (
//       userEventDetails.map((event, index) => (
//         <View key={index} style={styles.eventContainer}>
//           <Text style={styles.eventName}>{event.eventName}</Text>
//           <Text style={styles.eventCategory}>Category :{event.Category}</Text>
//         </View>
//       ))
//     ) : (
    
//         <Text>No events registered yet.</Text>
//       )}
//       <Button title="Go Back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   eventText: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
// });

// export default RegisteredEventsScreen;

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { FIREBASE_DB, FIREBASE_AUTH } from './FirebaseConfig';
import { ref, onValue } from 'firebase/database';
import { TouchableOpacity } from 'react-native';

const RegisteredEventsScreen = ({ navigation }) => {
  const [userEvents, setUserEvents] = useState([]);

  useEffect(() => {
    const user = FIREBASE_AUTH.currentUser;
    if (user) {
      const sanitizedEmail = user.email.replace(/[^a-zA-Z0-9]/g, '_');
      const dbPath = `users/${sanitizedEmail}/eventRegistrations`;

      const dbRef = ref(FIREBASE_DB, dbPath);
      onValue(dbRef, (snapshot) => {
        const eventsData = snapshot.val();
        if (eventsData) {
          const eventsArray = Object.keys(eventsData);
          setUserEvents(eventsArray);
        }
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Events</Text>
      {userEvents.length > 0 ? (
        userEvents.map((event, index) => (
          <Text key={index} style={styles.eventText}>
            {event}
          </Text>
        ))
      ) : (
        <Text>No events registered yet.</Text>
      )}
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#006a42"
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "white"
  },
  eventText: {
    fontSize: 18,
    marginBottom: 10,
    color: "white",
    fontSize: 20
  },
  back: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    marginTop: 15,
    width: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  backText: {
    color: "#006a42",
    fontSize: 20,
    fontWeight: "bold"
  }
});






export default RegisteredEventsScreen;
