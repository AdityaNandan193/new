
// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   Image
// } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import React ,{useEffect, useState} from 'react'
// import { ChevronLeftIcon } from 'react-native-heroicons/solid'
// import { useNavigation } from '@react-navigation/native'
// import { Divider } from '@rneui/themed'
// import { get, ref, getDatabase, set } from 'firebase/database'
// import { FIREBASE_AUTH , FIREBASE_DB } from './FirebaseConfig'
// import { Alert } from 'react-native'


// export default function Games(props) {

//   const navigation = useNavigation()
//   const { eventName } = props.route.params;
//   const [eventData, setEventData] = useState([]);
//   const db = FIREBASE_DB;
//   const auth = FIREBASE_AUTH;
//   const [user, setUser] = useState(null);
//  const [selectedEvent, setSelectedEvent] = useState(null);
//  const [slotsLeft, setSlotsLeft] = useState(0); // Initialize with a default value
//  const [eventDataDay2, setEventDataDay2] = useState([]);
//  const [eventDataDay3, setEventDataDay3] = useState([]);
// // const [eventDescription, setEventDescription] = useState ();
//   const [selectedDay, setSelectedDay] = useState(null);
  
// useEffect(() => {
//   // Check the authentication state when the component mounts
//    // Use your Firebase auth instance
//   const unsubscribe = auth.onAuthStateChanged((authUser) => {
//     setUser(authUser);
//   });

//   return () => {
//     // Unsubscribe the listener when the component unmounts
//     unsubscribe();
//   };
// }, []);

//   useEffect(() => {
//     const fetchEventData = async () => {
//       try {
//         const db = getDatabase();
//            // Update selectedDay based on the day extracted from the event name
//       const day = eventName.split('_')[0];
//       const selectedEventName = eventName.split('_')[1]; // Extract the event name
//       console.log('day:', day);
//       console.log('selectedEventName:', selectedEventName);
      
//       setSelectedDay(day);
      

//         const eventsSnapshot = await get(
//           ref(db, `events/Splash Events/${day}/${selectedEventName}`)
//         );
//         const event = eventsSnapshot.val();

//         if (event) {
//           setEventData([
//             { eventName: selectedEventName, slotsLeft: event.slotCounter }
//           ]);
//           setSelectedEvent(selectedEventName);
//           setSlotsLeft(event.slotCounter); // Set the slotsLeft value
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchEventData();
//   }, [db,eventName]);

//   useEffect(() => {
//     const fetchEventDataDay2 = async () => {
//       try {
//         const db = getDatabase();
//         // const eventsSnapshot = await get(
//         //   ref(db, `events/Technical Events/Day2/${eventName}`)
//         // );
//         const day = eventName.split('_')[0];
//         const selectedEventName = eventName.split('_')[1]; // Extract the event name

//         setSelectedDay(day);
//         console.log('day:', day);
//       console.log('selectedEventName:', selectedEventName);
      
//           const eventsSnapshot = await get(
//             ref(db, `events/Splash Events/${day}/${eventName}`)
//           );
//         const event = eventsSnapshot.val();

//         if (event) {
//           const eventDataArray = [
//             { eventName, slotsLeft: event.slotCounter }
//           ];
//           setEventDataDay2(eventDataArray);
//           setSelectedEvent(eventName);
//           setSlotsLeft(event.slotCounter);
//         }
//       } catch (error) {
//         console.error('Error fetching Day 2 data:', error);
//       }
//     };

//     fetchEventDataDay2();
//   }, [ db,eventName]);

  
//   useEffect(() => {
//     const fetchEventDataDay3 = async () => {
//       try {
//         const db = getDatabase();
//         // const eventsSnapshot = await get(
//         //   ref(db, `events/Technical Events/Day3/${eventName}`)
//         // );
//         const day = eventName.split('_')[0];
//         setSelectedDay(day);
  
//           const eventsSnapshot = await get(
//             ref(db, `events/Splash Events/${day}/${eventName}`)
//           );

//         const event = eventsSnapshot.val();

//         if (event) {
//           const eventDataArray = [
//             { eventName, slotsLeft: event.slotCounter }
//           ];
//           setEventDataDay3(eventDataArray);
//           setSelectedEvent(eventName);
//           setSlotsLeft(event.slotCounter);
//         }
//       } catch (error) {
//         console.error('Error fetching Day 3 data:', error);
//       }
//     };

//     fetchEventDataDay3();
//   }, [db, eventName]);

  
//   const handleRegistration = async () => {
//     try {
//       if (user) {
//         const userPath = `users/${user.email.replace(/[^a-zA-Z0-9]/g, '_')}`;
//         const userSnapshot = await get(ref(db, userPath));
//         const userName = userSnapshot.val().FirstName;
//  // Check if the user has already registered for this event
//  const registrationSnapshot = await get(ref(db, `eventRegistrations/${selectedEvent}/${user.uid}`));
//  if (registrationSnapshot.exists()) {
//    // User has already registered
//    alert("You have already registered for this event.");
//    return; // Do not proceed with registration
//  }


//         const registrationData = {
          
//           eventName: selectedEvent,
//           userEmail: user.email,
//           userName: userName,
//           // Add other relevant registration details
//         };

//         await set(
//           ref(db, `eventRegistrations/${selectedEvent}/${user.uid}`),
//           registrationData
//         );
            
//         await set(
//           ref(db, `events/Splash Events/${selectedDay}/${selectedEvent}/slotCounter`),
//           slotsLeft - 1
//         );
  
//         // Update the local state
//         setSlotsLeft(slotsLeft - 1);
//         }
      
//       // Show success alert
//       Alert.alert(
//         'Registration Successful',
//         'Congratulations! You are successfully registered for the event.',
//         [
//           { text: 'OK', onPress: () => console.log('Alert closed') }
//         ]
//       );

//       // ... (other code)
//     }
//      catch (error) {
//       console.error('Error registering for event:', error);
//     }
//   };


//   return (
//     <SafeAreaView style={styles.conatainer}>
//       <View style={styles.box1}>
//         <TouchableOpacity
//           style={{
//             borderColor: 'white',
//             marginLeft: '2%',
//             marginTop: '8%',
//             borderRadius: 100
//           }}
//           onPress={() => navigation.goBack()}
//         >
//           <ChevronLeftIcon style={{ color: 'black', marginLeft: '5%' }} />
//         </TouchableOpacity>
//         <Text
//           style={{
//             fontWeight: 'bold',
//             textAlign: 'center',
//             fontSize: 28,
//             marginVertical: '5%',
//             marginHorizontal: '25%'
//           }}
//         >
//             {eventName.split('_')[1]} {/* Display only the event name */}

//         </Text>
//       </View>
//       <Divider
//         orientation="horizontal"
//         color="black"
//         style={{ marginBottom: '5%' }}
//       />
//         <Image
//           style={{ height: '25%', width: '100%', borderRadius: 20 }}
//           source={require('./assets/2.jpg')}
//         />
//         <ScrollView showsVerticalScrollIndicator={true} style={styles.scroll}>
//         <View style={{marginHorizontal: "2%"}}>
//         <Text
//           style={{ fontWeight: 'bold', fontSize: 20, marginVertical: '2%' }}
//         >
//           Description:{' '}
//         </Text>
//         <Text style={{ padding: '2%',marginVertical: "1%" }}>'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' </Text>
//         <Divider
//         orientation="horizontal"
//         color="black"
//         style={{ marginVertical: '5%' }}
//       />
//         <View style={{ flexDirection: 'row',marginVertical: "2%"}}>
//           <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Timing: </Text>
//           <Text style={{ marginLeft: '25%' }}>12:30 - 2:30 </Text>
//         </View>

//         <View style={{ flexDirection: 'row',marginVertical: "2%"}}>
//           <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Venue: </Text>
//           <Text style={{ marginLeft: '26%' }}>A-block </Text>
//         </View>

//         <View style={{ flexDirection: 'row',marginVertical: "2%"}}>
//           <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Slots Left:</Text>
//           <Text style={{ marginLeft: '21%' }}>{slotsLeft} </Text>
//         </View>

//         <View style={{marginBottom: "2%"}}>
//           <View style={{ flexDirection: 'row',marginTop: "2%" }}>
//             <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Prizes: </Text>
//             <Text style={{ marginLeft: '26%' }}>      1st Winner:        prize1</Text>
//           </View>
//           <Text style={{ marginLeft: '41%' }}>   2nd Winner:     prize2 </Text>
//           <Text style={{ marginLeft: '41%' }}>   3rd Winner :     prize3</Text>
//         </View>
//         <View style={{ flexDirection: 'row'}}>
//           <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
//             Co-ordinators:{' '}
//           </Text>
//           <Text style={{ marginLeft: '10%' }}>name1, name2, name3</Text>
//         </View>
//         <Divider
//         orientation="horizontal"
//         color="black"
//         style={{ marginVertical: '5%' }}
//       />
//         <View style={{marginVertical: "2%"}}>
//           <Text
//             style={{ fontWeight: 'bold', fontSize: 20, marginVertical: '1%' }}
//           >
//             Guidelines:{' '}
//           </Text>
//           <Text style={{ padding: "2%" }}>Text about 5 linesLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five</Text>
//         </View>
        
//         </View>
//         </ScrollView>
//         <Divider
//         orientation="horizontal"
//         color="black"
//         style={{ marginVertical: '5%',marginHorizontal: "2%" }}
//       />
//         {/* <Text style={{ padding: '2%', marginVertical: '1%' }}>
//         {eventDescription}
//       </Text> */}
//       {/* ... (rest of your JSX) */}
//       <View style={styles.registrationButtonContainer}>
//         {user && slotsLeft > 0 ? (
//           <TouchableOpacity
//             style={styles.registrationButton}
//             onPress={handleRegistration}
//           >
//             <Text style={styles.registrationButtonText}>Register</Text>
//           </TouchableOpacity>
//         ) : (
//           <Text style={styles.registrationFullText}>Event Full</Text>
//         )}
//       </View>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   conatainer: {
//     flex: 1
//   },
//   box1: {
//     flexDirection: 'row'
//   },
//   scroll: {
//     marginHorizontal: '2%',
//     marginBottom: "2%"
//   },
//   but: {
//     backgroundColor: '#006a42',
//     padding: '4%',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     textAlign: 'center',
//     marginHorizontal: '20%',
//     borderRadius: 100,
//     marginBottom: "5%"
//   },
//   butText: {
//     color: "white",
//     fontSize: 20,
//     fontWeight: "bold"
//   },
  
//   registrationButtonContainer: {
//     alignItems: 'center',
//     marginTop: '2%',
//   },
//   registrationButton: {
//     backgroundColor: '#006a42',
//     padding: '4%',
//     borderRadius: 100,
//     width: '60%',
//     alignItems: 'center',
//   },
//   registrationButtonText: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   registrationFullText: {
//     color: 'red',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// })


// // import {
// //   View,
// //   Text,
// //   ScrollView,
// //   StyleSheet,
// //   TouchableOpacity,
// //   Image
// // } from 'react-native'
// // import { SafeAreaView } from 'react-native-safe-area-context'
// // import React ,{useEffect, useState} from 'react'
// // import { ChevronLeftIcon } from 'react-native-heroicons/solid'
// // import { useNavigation } from '@react-navigation/native'
// // import { Divider } from '@rneui/themed'
// // import { get, ref, getDatabase } from 'firebase/database'
// // import { FIREBASE_AUTH , FIREBASE_DB } from './FirebaseConfig'
// // import { Alert } from 'react-native'

// // export default function GamesD(props) {

// //   const navigation = useNavigation()
// //   const { eventName } = props.route.params;
// //   const [eventData, setEventData] = useState([]);

// //  const [selectedEvent, setSelectedEvent] = useState(null);
// //  const [slotsLeft, setSlotsLeft] = useState(0); // Initialize with a default value
// //  const [eventDataDay2, setEventDataDay2] = useState([]);
// //  const [eventDataDay3, setEventDataDay3] = useState([]);

  
// //   useEffect(() => {
// //     const fetchEventData = async () => {
// //       try {
// //         const db = getDatabase();
// //         const eventsSnapshot = await get(
// //           ref(db, `events/Splash Events/Day1/${eventName}`)
// //         );
// //         const event = eventsSnapshot.val();

// //         if (event) {
// //           setEventData([
// //             { eventName, slotsLeft: event.slotCounter }
// //           ]);
// //           setSelectedEvent(eventName);
// //           setSlotsLeft(event.slotCounter); // Set the slotsLeft value
// //         }
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchEventData();
// //   }, [eventName]);

// //   useEffect(() => {
// //     const fetchEventDataDay2 = async () => {
// //       try {
// //         const db = getDatabase();
// //         const eventsSnapshot = await get(
// //           ref(db, `events/Splash Events/Day2/${eventName}`)
// //         );
// //         const event = eventsSnapshot.val();

// //         if (event) {
// //           const eventDataArray = [
// //             { eventName, slotsLeft: event.slotCounter }
// //           ];
// //           setEventDataDay2(eventDataArray);
// //           setSelectedEvent(eventName);
// //           setSlotsLeft(event.slotCounter);
// //         }
// //       } catch (error) {
// //         console.error('Error fetching Day 2 data:', error);
// //       }
// //     };

// //     fetchEventDataDay2();
// //   }, [eventName]);

  
// //   useEffect(() => {
// //     const fetchEventDataDay3 = async () => {
// //       try {
// //         const db = getDatabase();
// //         const eventsSnapshot = await get(
// //           ref(db, `events/Splash Events/Day3/${eventName}`)
// //         );
// //         const event = eventsSnapshot.val();

// //         if (event) {
// //           const eventDataArray = [
// //             { eventName, slotsLeft: event.slotCounter }
// //           ];
// //           setEventDataDay3(eventDataArray);
// //           setSelectedEvent(eventName);
// //           setSlotsLeft(event.slotCounter);
// //         }
// //       } catch (error) {
// //         console.error('Error fetching Day 3 data:', error);
// //       }
// //     };

// //     fetchEventDataDay3();
// //   }, [eventName]);

// //   return (
// //     <SafeAreaView style={styles.conatainer}>
// //       <View style={styles.box1}>
// //         <TouchableOpacity
// //           style={{
// //             borderColor: 'white',
// //             marginLeft: '2%',
// //             marginTop: '8%',
// //             borderRadius: 100
// //           }}
// //           onPress={() => navigation.goBack()}
// //         >
// //           <ChevronLeftIcon style={{ color: 'black', marginLeft: '5%' }} />
// //         </TouchableOpacity>
// //         <Text
// //           style={{
// //             fontWeight: 'bold',
// //             textAlign: 'center',
// //             fontSize: 28,
// //             marginVertical: '5%',
// //             marginHorizontal: '25%'
// //           }}
// //         >
// //           {selectedEvent}
// //         </Text>
// //       </View>
// //       <Divider
// //         orientation="horizontal"
// //         color="black"
// //         style={{ marginBottom: '5%' }}
// //       />
// //         <Image
// //           style={{ height: '25%', width: '100%', borderRadius: 20 }}
// //           source={require('./assets/2.jpg')}
// //         />
// //         <ScrollView showsVerticalScrollIndicator={true} style={styles.scroll}>
// //         <View style={{marginHorizontal: "2%"}}>
// //         <Text
// //           style={{ fontWeight: 'bold', fontSize: 20, marginVertical: '2%' }}
// //         >
// //           Description:{' '}
// //         </Text>
// //         <Text style={{ padding: '2%',marginVertical: "1%" }}>'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' </Text>
// //         <Divider
// //         orientation="horizontal"
// //         color="black"
// //         style={{ marginVertical: '5%' }}
// //       />
// //         <View style={{ flexDirection: 'row',marginVertical: "2%"}}>
// //           <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Timing: </Text>
// //           <Text style={{ marginLeft: '25%' }}>12:30 - 2:30 </Text>
// //         </View>

// //         <View style={{ flexDirection: 'row',marginVertical: "2%"}}>
// //           <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Venue: </Text>
// //           <Text style={{ marginLeft: '26%' }}>A-block </Text>
// //         </View>

// //         <View style={{ flexDirection: 'row',marginVertical: "2%"}}>
// //           <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Slots Left:</Text>
// //           <Text style={{ marginLeft: '21%' }}>{slotsLeft} </Text>
// //         </View>

// //         <View style={{marginBottom: "2%"}}>
// //           <View style={{ flexDirection: 'row',marginTop: "2%" }}>
// //             <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Prizes: </Text>
// //             <Text style={{ marginLeft: '26%' }}>      1st Winner:        prize1</Text>
// //           </View>
// //           <Text style={{ marginLeft: '41%' }}>   2nd Winner:     prize2 </Text>
// //           <Text style={{ marginLeft: '41%' }}>   3rd Winner :     prize3</Text>
// //         </View>
// //         <View style={{ flexDirection: 'row'}}>
// //           <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
// //             Co-ordinators:{' '}
// //           </Text>
// //           <Text style={{ marginLeft: '10%' }}>name1, name2, name3</Text>
// //         </View>
// //         <Divider
// //         orientation="horizontal"
// //         color="black"
// //         style={{ marginVertical: '5%' }}
// //       />
// //         <View style={{marginVertical: "2%"}}>
// //           <Text
// //             style={{ fontWeight: 'bold', fontSize: 20, marginVertical: '1%' }}
// //           >
// //             Guidelines:{' '}
// //           </Text>
// //           <Text style={{ padding: "2%" }}>Text about 5 linesLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five</Text>
// //         </View>
        
// //         </View>
// //         </ScrollView>
// //         <Divider
// //         orientation="horizontal"
// //         color="black"
// //         style={{ marginVertical: '5%',marginHorizontal: "2%" }}
// //       />
// //       <TouchableOpacity style={styles.but}>
// //         <Text style={styles.butText}>Register</Text>
// //       </TouchableOpacity>
// //     </SafeAreaView>
// //   )
// // }

// // const styles = StyleSheet.create({
// //   conatainer: {
// //     flex: 1
// //   },
// //   box1: {
// //     flexDirection: 'row'
// //   },
// //   scroll: {
// //     marginHorizontal: '2%',
// //     marginBottom: "2%"
// //   },
// //   but: {
// //     backgroundColor: '#006a42',
// //     padding: '4%',
// //     flexDirection: 'row',
// //     justifyContent: 'center',
// //     textAlign: 'center',
// //     marginHorizontal: '20%',
// //     borderRadius: 100,
// //     marginBottom: "5%"
// //   },
// //   butText: {
// //     color: "white",
// //     fontSize: 20,
// //     fontWeight: "bold"
// //   }
// // })


// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   Image
// } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import React ,{useEffect, useState} from 'react'
// import { ChevronLeftIcon } from 'react-native-heroicons/solid'
// import { useNavigation } from '@react-navigation/native'
// import { Divider } from '@rneui/themed'
// import { get, ref, getDatabase, set } from 'firebase/database'
// import { FIREBASE_AUTH , FIREBASE_DB } from './FirebaseConfig'
// import { Alert } from 'react-native'


// export default function GamesD(props) {

//   const navigation = useNavigation()
//   const { eventName } = props.route.params;
//   // const eventName = props.route.params.eventName[0]; // Assuming eventName is an array

//   const [eventData, setEventData] = useState([]);
//   const db = FIREBASE_DB;
//   const auth = FIREBASE_AUTH;
//   const [user, setUser] = useState(null);
//  const [selectedEvent, setSelectedEvent] = useState(null);
//  const [slotsLeft, setSlotsLeft] = useState(0); // Initialize with a default value
//  const [eventDataDay2, setEventDataDay2] = useState([]);
//  const [eventDataDay3, setEventDataDay3] = useState([]);
//  const [eventDescription, setEventDescription] = useState ();
//   const [selectedDay, setSelectedDay] = useState(null);
//   const [isRegistered, setIsRegistered] = useState(false);

// useEffect(() => {
//   // Check the authentication state when the component mounts
//    // Use your Firebase auth instance
//   const unsubscribe = auth.onAuthStateChanged((authUser) => {
//     setUser(authUser);
//   });

//   return () => {
//     // Unsubscribe the listener when the component unmounts
//     unsubscribe();
//   };
// }, []);

//   useEffect(() => {
//     const fetchEventData = async () => {
//       try {
//         const db = getDatabase();
//            // Update selectedDay based on the day extracted from the event name
//       const day = eventName.split('_')[0];
//       const selectedEventName = eventName.split('_')[1]; // Extract the event name
//       console.log('day:', day);
//       console.log('selectedEventName:', selectedEventName);
      
//       setSelectedDay(day);
      

//         const eventsSnapshot = await get(
//           ref(db, `events/Splash Events/${day}/${selectedEventName}`)
//         );
//         const event = eventsSnapshot.val();

//         if (event) {
//           setEventData([
//             { eventName: selectedEventName, slotsLeft: event.slotCounter }
//           ]);
//           setSelectedEvent(selectedEventName);
//           setSlotsLeft(event.slotCounter); // Set the slotsLeft value
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchEventData();
//   }, [db,eventName]);

//   useEffect(() => {
//     const fetchEventDataDay2 = async () => {
//       try {
//         const db = getDatabase();
//         // const eventsSnapshot = await get(
//         //   ref(db, `events/Technical Events/Day2/${eventName}`)
//         // );
//         const day = eventName.split('_')[0];
//         const selectedEventName = eventName.split('_')[1]; // Extract the event name

//         setSelectedDay(day);
//         console.log('day:', day);
//       console.log('selectedEventName:', selectedEventName);
      
//           const eventsSnapshot = await get(
//             ref(db, `events/Splash Events/${day}/${selectedEventName}`)
//           );
//         const event = eventsSnapshot.val();

//         if (event) {
//           const eventDataArray = [
//             { eventName, slotsLeft: event.slotCounter }
//           ];
//           setEventDataDay2(eventDataArray);
//           setSelectedEvent(eventName);
//           setSlotsLeft(event.slotCounter);
//         }
//       } catch (error) {
//         console.error('Error fetching Day 2 data:', error);
//       }
//     };

//     fetchEventDataDay2();
//   }, [ db,eventName]);

  
//   useEffect(() => {
//     const fetchEventDataDay3 = async () => {
//       try {
//         const db = getDatabase();
//         // const eventsSnapshot = await get(
//         //   ref(db, `events/Technical Events/Day3/${eventName}`)
//         // );
//         const day = eventName.split('_')[0];
//         setSelectedDay(day);
  
//           const eventsSnapshot = await get(
//             ref(db, `events/Splash Events/${day}/${eventName}`)
//           );

//         const event = eventsSnapshot.val();

//         if (event) {
//           const eventDataArray = [
//             { eventName, slotsLeft: event.slotCounter }
//           ];
//           setEventDataDay3(eventDataArray);
//           setSelectedEvent(eventName);
//           setSlotsLeft(event.slotCounter);
//         }
//       } catch (error) {
//         console.error('Error fetching Day 3 data:', error);
//       }
//     };

//     fetchEventDataDay3();
//   }, [db, eventName]);

//   useEffect(() => {
//     // Fetch user's registration status
//     const fetchUserRegistrationStatus = async () => {
//       try {
//         if (user) {
//           const userPath = `users/${user.email.replace(/[^a-zA-Z0-9]/g, '_')}`;
//           const userSnapshot = await get(ref(db, userPath));
//           const userRegistrationStatus = userSnapshot.val().isRegistered;
//           setIsRegistered(userRegistrationStatus);
//         }
//       } catch (error) {
//         console.error('Error fetching user registration status:', error);
//       }
//     };
//     fetchUserRegistrationStatus();
//   }, [db, user]);


  
//   const handleRegistration = async (selectedDay, selectedEvent , category) => {
//     try {
//       if (user && !isRegistered) {
//         const userPath = `users/${user.email.replace(/[^a-zA-Z0-9]/g, '_')}`;
//         const userSnapshot = await get(ref(db, userPath));
//         const userName = userSnapshot.val().FirstName;

//         const confirmation = await new Promise((resolve) => {
//           Alert.alert(
//             'Confirm Registration',
//             'Are you sure you want to register for this event? This decision is irreversible!',
//             [
//               {
//                 text: 'No',
//                 style: 'cancel',
//                 onPress: () => resolve(false),
//               },
//               {
//                 text: 'Yes',
//                 onPress: () => resolve(true),
//               },
//             ]
//           );
//         });
  
//         if (!confirmation) {
//           return; // User chose not to proceed with registration
//         }
//  // Check if the user has already registered for this event
//  const registrationSnapshot = await get(ref(db, `eventRegistrations/${selectedEvent}/${user.uid}`));
//  if (registrationSnapshot.exists()) {
//    // User has already registered
//   Alert. alert("You have already registered for this event.");
//    return; // Do not proceed with registration
//  }
//     // Check if the user has already registered for an event on this day
//     const userRegistrationsSnapshot = await get(ref(db, `eventRegistrations/${selectedDay}`));
//     if (userRegistrationsSnapshot.exists()) {
//       const userRegistrations = userRegistrationsSnapshot.val();
//       const hasRegisteredOnThisDay = Object.values(userRegistrations).some(
//         (event) => event.userEmail === user.email
//       );

//       if (hasRegisteredOnThisDay) {
//         Alert.alert(
//           'Already Registered',
//           'You are already registered for an event on this day. You cannot register for another event.'
//         );
//         return;
//       }
//     }


//         const registrationData = {
          
//           eventName: selectedEvent,
//           userEmail: user.email,
//           userName: userName,
//           // Add other relevant registration details
//         };

//         await set(
//           ref(db, `eventRegistrations/${selectedEvent}/${user.uid}`), 
//           registrationData
//         );
            
//         await set(
//           ref(db, `events/Splash Events/${selectedDay}/${selectedEvent}/slotCounter`),
//           slotsLeft - 1
//         );
  
//         // Update the local state
//         setSlotsLeft(slotsLeft - 1);
//         // setIsRegistered(true);

//         await set(ref(db, `users/${user.email.replace(/[^a-zA-Z0-9]/g, '_')}/isRegistered${category}`), true);
        
      
//       // Show success alert
//       Alert.alert(
//         'Registration Successful',
//         'Congratulations! You are successfully registered for the event.',
//         [
//           { text: 'OK', onPress: () => console.log('Alert closed') }]
        
//       );
//       }
//          else {
//         Alert.alert(
//           'Already Registered',
//           'You are already registered for an event. You cannot register for multiple events.'
//         );
//       }

    
//     }
//      catch (error) {
//       console.error('Error registering for event:', error);
//     }
//   };


//   return (
//     <SafeAreaView style={styles.conatainer}>
//       <View style={styles.box1}>
//         <TouchableOpacity
//           style={{
//             borderColor: 'white',
//             marginLeft: '2%',
//             marginTop: '8%',
//             borderRadius: 100
//           }}
//           onPress={() => navigation.goBack()}
//         >
//           <ChevronLeftIcon style={{ color: 'black', marginLeft: '5%' }} />
//         </TouchableOpacity>
//         <Text
//           style={{
//             fontWeight: 'bold',
//             textAlign: 'center',
//             fontSize: 28,
//             marginVertical: '5%',
//             marginHorizontal: '25%'
//           }}
//         >
//           {eventName.split('_')[1]}
//         </Text>
//       </View>
//       <Divider
//         orientation="horizontal"
//         color="black"
//         style={{ marginBottom: '5%' }}
//       />
//         <Image
//           style={{ height: '25%', width: '100%', borderRadius: 20 }}
//           source={require('./assets/2.jpg')}
//         />
//         <ScrollView showsVerticalScrollIndicator={true} style={styles.scroll}>
//         <View style={{marginHorizontal: "2%"}}>
//         <Text
//           style={{ fontWeight: 'bold', fontSize: 20, marginVertical: '2%' }}
//         >
//           Description:{' '}
//         </Text>
//         <Text style={{ padding: '2%',marginVertical: "1%" }}>'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' </Text>
//         <Divider
//         orientation="horizontal"
//         color="black"
//         style={{ marginVertical: '5%' }}
//       />
//         <View style={{ flexDirection: 'row',marginVertical: "2%"}}>
//           <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Timing: </Text>
//           <Text style={{ marginLeft: '25%' }}>12:30 - 2:30 </Text>
//         </View>

//         <View style={{ flexDirection: 'row',marginVertical: "2%"}}>
//           <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Venue: </Text>
//           <Text style={{ marginLeft: '26%' }}>A-block </Text>
//         </View>

//         <View style={{ flexDirection: 'row',marginVertical: "2%"}}>
//           <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Slots Left:</Text>
//           <Text style={{ marginLeft: '21%' }}>{slotsLeft} </Text>
//         </View>

//         <View style={{marginBottom: "2%"}}>
//           <View style={{ flexDirection: 'row',marginTop: "2%" }}>
//             <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Prizes: </Text>
//             <Text style={{ marginLeft: '26%' }}>      1st Winner:        prize1</Text>
//           </View>
//           <Text style={{ marginLeft: '41%' }}>   2nd Winner:     prize2 </Text>
//           <Text style={{ marginLeft: '41%' }}>   3rd Winner :     prize3</Text>
//         </View>
//         <View style={{ flexDirection: 'row'}}>
//           <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
//             Co-ordinators:{' '}
//           </Text>
//           <Text style={{ marginLeft: '10%' }}>name1, name2, name3</Text>
//         </View>
//         <Divider
//         orientation="horizontal"
//         color="black"
//         style={{ marginVertical: '5%' }}
//       />
//         <View style={{marginVertical: "2%"}}>
//           <Text
//             style={{ fontWeight: 'bold', fontSize: 20, marginVertical: '1%' }}
//           >
//             Guidelines:{' '}
//           </Text>
//           <Text style={{ padding: "2%" }}>Text about 5 linesLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five</Text>
//         </View>
        
//         </View>
//         </ScrollView>
//         <Divider
//         orientation="horizontal"
//         color="black"
//         style={{ marginVertical: '5%',marginHorizontal: "2%" }}
//       />
//         {/* <Text style={{ padding: '2%', marginVertical: '1%' }}>
//         {eventDescription}
//       </Text> */}
//       {/* ... (rest of your JSX) */}
//       <View style={styles.registrationButtonContainer}>
//         {user && slotsLeft > 0 ? (
//           <TouchableOpacity
//             style={styles.registrationButton}
//             onPress={() => handleRegistration(selectedDay, selectedEvent, 'Splash')}

//           >
//             <Text style={styles.registrationButtonText}>Register</Text>
//           </TouchableOpacity>
//         ) : (
//           <Text style={styles.registrationFullText}>Event Full</Text>
//         )}
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   conatainer: {
//     flex: 1
//   },
//   box1: {
//     flexDirection: 'row'
//   },
//   scroll: {
//     marginHorizontal: '2%',
//     marginBottom: "2%"
//   },
//   but: {
//     backgroundColor: '#006a42',
//     padding: '4%',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     textAlign: 'center',
//     marginHorizontal: '20%',
//     borderRadius: 100,
//     marginBottom: "5%"
//   },
//   butText: {
//     color: "white",
//     fontSize: 20,
//     fontWeight: "bold"
//   },
  
//   registrationButtonContainer: {
//     alignItems: 'center',
//     marginTop: '2%',
//   },
//   registrationButton: {
//     backgroundColor: '#006a42',
//     padding: '4%',
//     borderRadius: 100,
//     width: '60%',
//     alignItems: 'center',
//   },
//   registrationButtonText: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   registrationFullText: {
//     color: 'red',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// })

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React ,{useEffect, useState} from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { Divider } from '@rneui/themed'
import { get, ref, getDatabase, set } from 'firebase/database'
import { FIREBASE_AUTH , FIREBASE_DB } from './FirebaseConfig'
import { Alert } from 'react-native'


export default function GamesD(props) {

  const navigation = useNavigation()
  const { eventName } = props.route.params;
  // const eventName = props.route.params.eventName[0]; // Assuming eventName is an array

  const [eventData, setEventData] = useState([]);
  const db = FIREBASE_DB;
  const auth = FIREBASE_AUTH;
  const [user, setUser] = useState(null);
 const [selectedEvent, setSelectedEvent] = useState(null);
 const [slotsLeft, setSlotsLeft] = useState(0); // Initialize with a default value
 const [eventDataDay2, setEventDataDay2] = useState([]);
 const [eventDataDay3, setEventDataDay3] = useState([]);
 const [eventDescription, setEventDescription] = useState ();
  const [selectedDay, setSelectedDay] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
const [selectedTechnicalEvent, setSelectedTechnicalEvent] = useState(null);

useEffect(() => {
  // Check the authentication state when the component mounts
   // Use your Firebase auth instance
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
    setUser(authUser);
  });

  return () => {
    // Unsubscribe the listener when the component unmounts
    unsubscribe();
  };
}, []);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const db = getDatabase();
           // Update selectedDay based on the day extracted from the event name
      const day = eventName.split('_')[0];
      const selectedEventName = eventName.split('_')[1]; // Extract the event name
      console.log('day:', day);
      console.log('selectedEventName:', selectedEventName);
      
      setSelectedDay(day);
      

        const eventsSnapshot = await get(
          ref(db, `events/Splash Events/${day}/${selectedEventName}`)
        );
        const event = eventsSnapshot.val();

        if (event) {
          setEventData([
            { eventName: selectedEventName, slotsLeft: event.slotCounter }
          ]);
          setSelectedEvent(selectedEventName);
          setSlotsLeft(event.slotCounter); // Set the slotsLeft value
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchEventData();
  }, [db,eventName]);

  useEffect(() => {
    const fetchEventDataDay2 = async () => {
      try {
        const db = getDatabase();
        // const eventsSnapshot = await get(
        //   ref(db, `events/Splash Events/Day2/${eventName}`)
        // );
        const day = eventName.split('_')[0];
        const selectedEventName = eventName.split('_')[1]; // Extract the event name

        setSelectedDay(day);
        console.log('day:', day);
      console.log('selectedEventName:', selectedEventName);
      
          const eventsSnapshot = await get(
            ref(db, `events/Splash Events/${day}/${selectedEventName}`)
          );
        const event = eventsSnapshot.val();

        if (event) {
          const eventDataArray = [
            { eventName, slotsLeft: event.slotCounter }
          ];
          setEventDataDay2(eventDataArray);
          setSelectedEvent(eventName);
          setSlotsLeft(event.slotCounter);
        }
      } catch (error) {
        console.error('Error fetching Day 2 data:', error);
      }
    };

    fetchEventDataDay2();
  }, [ db,eventName]);

  
  useEffect(() => {
    const fetchEventDataDay3 = async () => {
      try {
        const db = getDatabase();
        // const eventsSnapshot = await get(
        //   ref(db, `events/Splash Events/Day3/${eventName}`)
        // );
        const day = eventName.split('_')[0];
        setSelectedDay(day);
  
          const eventsSnapshot = await get(
            ref(db, `events/Splash Events/${day}/${eventName}`)
          );

        const event = eventsSnapshot.val();

        if (event) {
          const eventDataArray = [
            { eventName, slotsLeft: event.slotCounter }
          ];
          setEventDataDay3(eventDataArray);
          setSelectedEvent(eventName);
          setSlotsLeft(event.slotCounter);
        }
      } catch (error) {
        console.error('Error fetching Day 3 data:', error);
      }
    };

    fetchEventDataDay3();
  }, [db, eventName]);

  useEffect(() => {
    // Fetch user's registration status
    const fetchUserRegistrationStatus = async () => {
      try {
        if (user) {
          const userPath = `users/${user.email.replace(/[^a-zA-Z0-9]/g, '_')}`;
          const userSnapshot = await get(ref(db, userPath));
          const userPaymentStatus = userSnapshot.val().hasPaid;
          setIsRegistered(userPaymentStatus);
         
          // const userRegistrationStatus = userSnapshot.val().isRegistered;
          // setIsRegistered(userRegistrationStatus);
        }
      } catch (error) {
        console.error('Error fetching user payment status:', error);
      }
    };
    fetchUserRegistrationStatus();
  }, [db, user]);


  
  const handleRegistration = async (selectedDay, selectedEvent) => {
    try {
       
      if (user) {
        if (!isRegistered) {
          Alert.alert(
            'Payment Required',
            'Please make a payment to register for this event.'
          );
          return; // Prevent further execution of registration process

        } 

         // If the user is already registered, continue with the registration process
         
      const userPath = `users/${user.email.replace(/[^a-zA-Z0-9]/g, '_')}`;
        const userSnapshot = await get(ref(db, userPath));
        const userName = userSnapshot.val().Name;

          // Check if the user has already registered for a technical event
          const userTechnicalRegistrationSnapshot = await get(
            ref(FIREBASE_DB, `users/${user.email.replace(/[^a-zA-Z0-9]/g, '_')}/isRegisteredSplash`)
          );
  
          if (userTechnicalRegistrationSnapshot.exists()) {
            Alert.alert(
              'Already Registered',
              'You have already registered for a splash event. You cannot register for another event.'
            );
            return;
          }
  

        const confirmation = await new Promise((resolve) => {
          Alert.alert(
            'Confirm Registration',
            'Are you sure you want to register for this event? This decision is irreversible!',
            [
              {
                text: 'No',
                style: 'cancel',
                onPress: () => resolve(false),
              },
              {
                text: 'Yes',
                onPress: () => resolve(true),
              },
            ]
          );
        });
  
        if (!confirmation) {
          return; // User chose not to proceed with registration
        }
 // Check if the user has already registered for this event
 const registrationSnapshot = await get(ref(db, `users/${user.email.replace(/[^a-zA-Z0-9]/g, '_')}/eventRegistrations/${selectedEvent}/${user.uid}`));
 if (registrationSnapshot.exists()) {
   // User has already registered
  Alert. alert("You have already registered for this event.");
   return; // Do not proceed with registration
 }
    // Check if the user has already registered for an event on this day
    const userRegistrationsSnapshot = await get(ref(db, `users/${user.email.replace(/[^a-zA-Z0-9]/g, '_')}/eventRegistrations/${selectedDay}`));
    if (userRegistrationsSnapshot.exists()) {
      const userRegistrations = userRegistrationsSnapshot.val();
      const hasRegisteredOnThisDay = Object.values(userRegistrations).some(
        (event) => event.userEmail === user.email
      );

      if (hasRegisteredOnThisDay) {
        Alert.alert(
          'Already Registered',
          'You are already registered for an event on this day. You cannot register for another event.'
        );
        return;
      }
    }


        const registrationData = {
          
          eventName: selectedEvent,
          userEmail: user.email,
          userName: userName,
          Category : 'Splash Event',
          // Add other relevant registration details
        };

        await set(
          ref(db, `users/${user.email.replace(/[^a-zA-Z0-9]/g, '_')}/eventRegistrations/${selectedEvent}/${user.uid}`), 
          registrationData
        );
            
        await set(
          ref(db, `events/Splash Events/${selectedDay}/${selectedEvent}/slotCounter`),
          slotsLeft - 1
        );
  
        // Update the local state
        setSlotsLeft(slotsLeft - 1);
        setIsRegistered(true);

        await set(ref(db, `users/${user.email.replace(/[^a-zA-Z0-9]/g, '_')}/isRegisteredSplash`), true);
        
      
      // Show success alert
      Alert.alert(
        'Registration Successful',
        'Congratulations! You are successfully registered for the event.',
        [
          { text: 'OK', onPress: () => console.log('Alert closed') }]
        
      );
      }
         else {
        Alert.alert(
          'Already Registered',
          'You are already registered for an event. You cannot register for multiple events.'
        );
      }

    
    }
     catch (error) {
      console.error('Error registering for event:', error);
    }
  };


  return (
    <SafeAreaView style={styles.conatainer}>
      <View style={styles.box1}>
        <TouchableOpacity
          style={{
            borderColor: 'white',
            marginLeft: '2%',
            marginTop: '8%',
            borderRadius: 100
          }}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon style={{ color: 'black', marginLeft: '5%' }} />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 28,
            marginVertical: '5%',
            marginHorizontal: '22%'
          }}
        >
          {eventName.split('_')[1]}
        </Text>
      </View>
      <Divider
        orientation="horizontal"
        color="black"
        style={{ marginBottom: '5%' }}
      />
        <Image
          style={{ height: '25%', width: '100%', borderRadius: 20 }}
          source={require('./assets/2.jpg')}
        />
        <Divider
        orientation="horizontal"
        color="black"
        style={{ marginVertical: "5%" }}
      />
        <ScrollView showsVerticalScrollIndicator={true} style={styles.scroll}>
        <View style={{marginHorizontal: "2%"}}>
        <Text
          style={{ fontWeight: 'bold', fontSize: 20, marginVertical: '2%',marginHorizontal: "1%" }}
        >
          Description:{' '}
        </Text>
        <Text style={{ padding: '2%',marginVertical: "1%" }}>'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' </Text>
        <Divider
        orientation="horizontal"
        color="black"
        style={{ marginVertical: '5%' }}
      />
        <View style={{ flexDirection: 'row',marginVertical: "2%"}}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Timing: </Text>
          <Text style={{ marginLeft: '25%' }}>12:30 - 2:30 </Text>
        </View>

        <View style={{ flexDirection: 'row',marginVertical: "2%"}}>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Venue: </Text>
          <Text style={{ marginLeft: '27%' }}>A-block </Text>
        </View>

        <View style={{ flexDirection: 'row',marginVertical: "2%"}}>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Slots Left:</Text>
          <Text style={{ marginLeft: '22%' }}>{slotsLeft} </Text>
        </View>

        <View style={{marginBottom: "2%"}}>
          <View style={{ flexDirection: 'row',marginTop: "2%" }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Prizes: </Text>
            <Text style={{ marginLeft: '28%' }}>1st Winner:  prize1</Text>
          </View>
          <Text style={{ marginLeft: '43%' }}>2nd Winner:  prize2</Text>
          <Text style={{ marginLeft: '43%' }}>3rd Winner:  prize3</Text>
        </View>
        <View style={{ flexDirection: 'row'}}>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
            Co-ordinators:{' '}
          </Text>
          <Text style={{ marginLeft: '12.5%' }}>name1, name2, name3</Text>
        </View>
        <Divider
        orientation="horizontal"
        color="black"
        style={{ marginVertical: '5%' }}
      />
        <View style={{marginVertical: "2%"}}>
          <Text
            style={{ fontWeight: 'bold', fontSize: 20, marginVertical: '1%',marginHorizontal: "1%"}}
          >
            Guidelines:{' '}
          </Text>
          <Text style={{ padding: "2%" }}>Text about 5 linesLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five</Text>
        </View>
        
        </View>
        </ScrollView>
        <Divider
        orientation="horizontal"
        color="black"
        style={{ marginVertical: '5%',marginHorizontal: "2%" }}
      />
        {/* <Text style={{ padding: '2%', marginVertical: '1%' }}>
        {eventDescription}
      </Text> */}
      {/* ... (rest of your JSX) */}
      <View style={styles.registrationButtonContainer}>
        {user && slotsLeft > 0 ? (
          <TouchableOpacity
            style={styles.registrationButton}
            onPress={() => handleRegistration(selectedDay, selectedEvent ,'Splash')}

          >
            <Text style={styles.registrationButtonText}>Register</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.eventFullName}>
          <Text style={styles.registrationFullText}>Event Full</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conatainer: {
    flex: 1
  },
  box1: {
    flexDirection: 'row'
  },
  scroll: {
    marginHorizontal: '2%',
    marginBottom: "2%"
  },
  but: {
    backgroundColor: '#006a42',
    padding: '4%',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    marginHorizontal: '20%',
    borderRadius: 100,
    marginBottom: "5%"
  },
  butText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  
  registrationButtonContainer: {
    alignItems: 'center',
    marginTop: '2%',
  },
  registrationButton: {
    backgroundColor: '#006a42',
    padding: '4%',
    borderRadius: 100,
    width: '60%',
    alignItems: 'center',
    marginBottom: "5%"
  },
  registrationButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registrationFullText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  eventFullName: {
    marginBottom: "7%"
  }
})

