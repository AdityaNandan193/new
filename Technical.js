import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  ActivityIndicator
} from "react-native";
import React , {useState , useEffect} from "react";
import {
  Events,
  coffee1,
  coffee2,
  coffee3,
  coffeeItems1,
  coffeeItems2,
  coffeeItems3,
} from "./index1";
import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import Carousel from "react-native-snap-carousel";
import CoffeeCard from "./CoffeeCard";
import { FIREBASE_DB } from "./FirebaseConfig";
import { getDatabase, ref ,get } from "firebase/database";
import { Divider } from "@rneui/themed";

export default function Technical() {
  const navigation = useNavigation();
  const [eventData, setEventData] = useState([]);
  const [eventDataDay2, setEventDataDay2] = useState([]);
  const [eventDataDay3, setEventDataDay3] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  
  useEffect(() => {
    const fetchDataforDay1 = async () => {
      setIsLoading(true);
      try {
        const db = getDatabase();
        const eventsSnapshot = await get(ref(db,"events/Technical Events/Day1" ));
        const events = eventsSnapshot.val();

        if (events) {
          const eventDataArray = [];
          for (const key in events) {
            const event = events[key];
          //   const eventNameWithoutPrefix = key.substring(5); // Remove "Day1_" prefix
          //   eventDataArray.push({ eventName: eventNameWithoutPrefix, slotsLeft: event.slotCounter });
          // }
  
            eventDataArray.push({ eventName: key, slotsLeft: event.slotCounter });
          }
         

          setEventData(eventDataArray);
        }
      

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataforDay1();
  }, []);

  const fetchDataForDay2 = async () => {
    try {
      const db = getDatabase();
      const eventsSnapshot = await get(ref(db, "events/Technical Events/Day2"));
      const events = eventsSnapshot.val();

      if (events) {
        const eventDataArray = [];
        for (const key in events) {
          const event = events[key];
          // const eventNameWithoutPrefix = key.substring(5); // Remove "Day1_" prefix
          //   eventDataArray.push({ eventName: eventNameWithoutPrefix, slotsLeft: event.slotCounter });
          // }
        
            eventDataArray.push({ eventName: key, slotsLeft: event.slotCounter });
        }
        setEventDataDay2(eventDataArray);
      }
    } catch (error) {
      console.error('Error fetching Day 2 data:', error);
    }
  };

  const fetchDataForDay3 = async () => {
    try {
      const db = getDatabase();
      const eventsSnapshot = await get(ref(db, "events/Technical Events/Day3"));
      const events = eventsSnapshot.val();

      if (events) {
        const eventDataArray = [];
        for (const key in events) {
          const event = events[key];
        //   const eventNameWithoutPrefix = key.substring(5); // Remove "Day1_" prefix
        //   eventDataArray.push({ eventName: eventNameWithoutPrefix, slotsLeft: event.slotCounter });
        // }
     
            eventDataArray.push({ eventName: key, slotsLeft: event.slotCounter });
        }
        setEventDataDay3(eventDataArray);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error fetching Day 3 data:', error);
    }
  };
useEffect(() => {
  fetchDataForDay2();
  fetchDataForDay3();
}, []);

  while(isLoading)
  {
    return(
      <SafeAreaView style={{backgroundColor: "#006a42",flex: 1}}>
      <View style={{justifyContent: "center",alignItems: "center",flex: 1}}>
      <ActivityIndicator size="large" color="#cccccc"/>
      </View>
      </SafeAreaView>
    )
  }
  return (
      <SafeAreaView>
        <View style={{ backgroundColor: '#006a42'}}>
        <View
          style={{
            flexDirection: "row",
            marginTop: "1%",
            marginBottom: "1%",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#006a42",
              borderColor: "white",
              marginLeft: "2%",
              marginTop: "3%",
              borderRadius: 100
            }}
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon style={{ color: "white", marginLeft: "1%" }} />
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: 26,
              marginTop: "2.5%",
              marginLeft: "15%"
            }}
          >
            Technical Events
          </Text>        
        </View>
        <Divider orientation="horizontal" color="white" style={{marginVertical: "2%"}}/>
        {/* text day1 and swipper for events */}
        <ScrollView vertical showsVerticalScrollIndicator={false} style={{marginBottom: "40%"}}>
         <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", marginVertical: "4%",color: "white",fontSize: 20 }}>Day 1</Text>
          </View>

          <View style={{}}>
            <Carousel
              containerCustomStyle={{ overflow: "visible" }}
              data={eventData}
              renderItem={({ item }) => <CoffeeCard eventName={item.eventName} slotsLeft={item.slotsLeft} />}
              firstItem={1}
              inactiveSlideOpacity={0.75}
              inactiveSlideScale={0.77}
              sliderWidth={370}
              itemWidth={250}
              slideStyle={{ display: "flex", alignItems: "center" }}
           /> 
          </View>

          
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", marginVertical: "4%",color:"white",fontSize: 20 }}>Day 2</Text>
          </View>

          <View style={{}}>
            <Carousel
              containerCustomStyle={{ overflow: "visible" }}
              data={eventDataDay2}
              renderItem={({ item }) => (
                <CoffeeCard eventName={item.eventName} slotsLeft={item.slotsLeft} />
              )}
              firstItem={1}
              inactiveSlideOpacity={0.75}
              inactiveSlideScale={0.77}
              sliderWidth={370}
              itemWidth={250}
              slideStyle={{ display: "flex", alignItems: "center" }}
              
           />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", marginVertical: "4%",color: "white",fontSize: 20 }}>Day 3</Text>
          </View>

          <View style={{}}>
            <Carousel
              containerCustomStyle={{ overflow: "visible" }}
              data={eventDataDay3}
              renderItem={({ item }) => (
                <CoffeeCard eventName={item.eventName} slotsLeft={item.slotsLeft} />
              )}
              firstItem={1}
              inactiveSlideOpacity={0.75}
              inactiveSlideScale={0.77}
              sliderWidth={370}
              itemWidth={250}
              slideStyle={{ display: "flex", alignItems: "center" }}
              
           />
          </View>
        </ScrollView>
        </View>
      </SafeAreaView>
  );
              }
              


