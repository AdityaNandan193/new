import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  ActivityIndicator
} from "react-native";
import React,{useEffect,useState} from "react";
import { Divider } from "@rneui/themed";
import {
  Events,
  coffee1,
  coffee2,
  coffee3,
  coffeeItems7,
  coffeeItems8,
  coffeeItems9
} from "./index1";
import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import Carousel from "react-native-snap-carousel";
import CoffeeCardG from "./CoffeeCardG";
import CoffeeCardH from "./CoffeeCardH";
import CoffeeCardI from "./CoffeeCardI";
import { darkGreen } from "./Constants";
export default function Cultural(props) {
  let Event = props.route.params;
  const navigation = useNavigation();
  const [animate,setAnimate] = useState(true);
  useEffect(() => {
    closeActivityIndicator();
  }, []);
  const closeActivityIndicator = () => {
    setTimeout(() => {
      setAnimate(false);
    },3000);
  };
  while(animate)
  {
    return(
      <SafeAreaView style={{flex: 1, backgroundColor: '#006a42' }}>
      <View
      style={{  flex: 1,justifyContent:'center',alignItems: "center"}}
    >
   <ActivityIndicator animating={animate} size="large" color="#ffd700" />
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
              fontSize: 26,
              marginTop: "2.5%",
              marginLeft: "18%",
              color: "white"
            }}
          >
            Cultural Events
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
              data={coffeeItems7}
              renderItem={({ item }) => <CoffeeCardG item={item} />}
              firstItem={1}
              inactiveSlideOpacity={0.75}
              inactiveSlideScale={0.77}
              sliderWidth={370}
              itemWidth={250}
              slideStyle={{ display: "flex", alignItems: "center" }}
            /> 
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", marginVertical: "4%",color: "white",fontSize: 20 }}>Day 2</Text>
          </View>

          <View style={{}}>
            <Carousel
              containerCustomStyle={{ overflow: "visible" }}
              data={coffeeItems8}
              renderItem={({ item }) => <CoffeeCardH item={item} />}
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
              data={coffeeItems9}
              renderItem={({ item }) => <CoffeeCardI item={item} />}
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
