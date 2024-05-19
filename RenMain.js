import React, { useState,useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated, 
  Dimensions
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { Events, categories } from "./index1";
import { useNavigation } from "@react-navigation/native";
import UserProfile from "./UserProfile";
import UserProfileModal from "./UserProfileModal";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { darkGreen } from "./Constants";

const { width: screenWidth } = Dimensions.get('window');

const RenMain = () => {
  const [activeCategory, setActiveCategory] = useState("About");
  const navigation = useNavigation();
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const toggleProfileModal = () => {
    setIsProfileVisible(!isProfileVisible);
  };


  const [menuVisible, setMenuVisible] = useState(false);
  const menuAnimation = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    const toValue = menuVisible ? 0 : 1;
    Animated.timing(menuAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    Animated.timing(menuAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setMenuVisible(false);
  };

  const translateX = menuAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-screenWidth, 0],
  });

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ marginRight: "" }}
          onPress={toggleMenu}
        >
          <AntDesign name={"menuunfold"} size={30} color={"white"} />
        </TouchableOpacity>
        <Animated.View
        style={{
          position: 'absolute',
          left: -10,
          top: 40,
          width: '60%',
          height: "1680%",
          backgroundColor: 'lightgrey',
          transform: [{ translateX }],
          zIndex: 1,
          borderTopRightRadius: 40,
          borderBottomRightRadius: 40,
        }}
      >
        <Text style={{alignSelf: "center",fontSize: 25,fontWeight: "bold",color:"#006a42",marginRight: "30%",fontFamily: "sans-serif-condensed"}}>Hello!!</Text>
        <Text style={{alignSelf: "center",fontSize: 25,fontWeight: "bold",color:"#006a42",fontFamily: "sans-serif-condensed"}}>Let's Explore</Text>
         <TouchableOpacity style={styles.barButton} onPress={ () => navigation.navigate("About")}>
           <Text style={styles.barText}>About JECRC</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.barButton} onPress={ () => navigation.navigate("AboutRen")}>
           <Text style={styles.barText}>About Renaissance</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.barButton} onPress={ () => navigation.navigate("Team")}>
           <Text style={styles.barText}>Team</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.barButton} onPress={ () => navigation.navigate("Sponsers")}>
           <Text style={styles.barText}>Sponsers</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.barButton} onPress={ () => navigation.navigate("Support")}>
           <Text style={styles.barText}>Support</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.barButton} onPress={ () => navigation.navigate("Guidelines")}>
           <Text style={styles.barText}>Guidelines</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.barButton} onPress={ () => navigation.navigate("Gallery")}>
           <Text style={styles.barText}>Gallary</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.barButton} onPress={ () => navigation.navigate("ContactUs")}>
           <Text style={styles.barText}>Contact Us</Text>
         </TouchableOpacity>
         <View>
          <Text style={{alignSelf: "flex-start",marginLeft: "8%",color: "#006a42",fontFamily: "sans-serif-condensed",fontSize: 30}}>Events:</Text>
          <TouchableOpacity style={styles.barButton} onPress={ () => navigation.navigate("Technical")}>
           <Text style={styles.barText}>Technical</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.barButton} onPress={ () => navigation.navigate("Splash")}>
           <Text style={styles.barText}>Splash</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.barButton} onPress={ () => navigation.navigate("Cultural")}>
           <Text style={styles.barText}>Cultural</Text>
         </TouchableOpacity>
         </View>
         <View>
          <Text style={{alignSelf: "flex-start",marginLeft: "8%",color: "#006a42",fontFamily: "sans-serif-condensed",fontSize: 30}}>Attractions:</Text>
          <TouchableOpacity style={styles.barButton} onPress={ () => navigation.navigate("Day1")}>
           <Text style={styles.barText}>Day 1</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.barButton} onPress={ () => navigation.navigate("Day2")}>
           <Text style={styles.barText}>Day 2</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.barButton} onPress={ () => navigation.navigate("Day3")}>
           <Text style={styles.barText}>Day 3</Text>
         </TouchableOpacity>
         </View>
      </Animated.View>
      {menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}
        <Text style={styles.text}>RENAISSANCE</Text>
        <TouchableOpacity onPress={toggleProfileModal} style = {styles.avatar}>
        <MaterialCommunityIcons name="account" size={40} color="white" />
        {isProfileVisible && (
        <UserProfileModal onClose={toggleProfileModal} />
      )}
        </TouchableOpacity>
      </View>

      <View style={styles.lottie}>
        <LottieView
          source={require("./assets/icons/animation_ll1zqibi.json")}
          autoPlay
          loop
        />
        {menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}
      </View>

      <View>
        <Text
          style={styles.heading}
        >
          National
        </Text>
        <Text style={styles.heading1}>
          Techno-Cultural
        </Text>
        <Text style={styles.heading1}>
          Fest Of JECRC
        </Text>
        {menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}
      </View>

      {/* <ScrollView
        horizontal
        style={styles.scroll}
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((category, index1) => {
          let isActive = category == activeCategory;
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("About"), setActiveCategory(category);
              }}
              key={index1}
            >
              <Text style={styles.categ}>
                {category}
              </Text>
              {isActive ? (
                <Text
                  style={styles.catego}
                >
                  __ _
                </Text>
              ) : null}
            </TouchableOpacity>
          );
        })}
      </ScrollView> */}

      <View>
        <ScrollView style={styles.contain} horizontal showsHorizontalScrollIndicator={false}>
         <TouchableOpacity style={[styles.but,{backgroundColor: '#cccccc'}]}
                            onPress={() => navigation.navigate('Technical')}
                        >
                    <Image source={ require("./assets/RenBack.png")} style={styles.comp}/>
                    <Text style={styles.butText}>Technical</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.but,{backgroundColor: '#eedd82'}]}
                        onPress={() => navigation.navigate('Splash')}
                    >
                      <Image source={ require("./assets/TechnicalImage.jpg")} style={styles.comp}/>
                    <Text style={styles.butText}>Splash</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.but,{backgroundColor: '#ffd700'}]}
                        onPress={() => navigation.navigate('Cultural')}
                    >
                      <Image source={ require("./assets/email.jpg")} style={styles.comp}/>
                     <Text style={styles.butText}>Cultural</Text>
                     </TouchableOpacity>
        </ScrollView>
        {menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}
      </View>
      {/* <View style={{marginTop:6, paddingLeft:5}} >
                        <Text  style={{fontWeight:'bold'}}>Mostly Liked</Text>
                    </View> */}
       <View style={{}} >
       <TouchableOpacity style={styles.pay} onPress={() => navigation.navigate("Pay")}>
         <Text style={styles.payText}>Pay Now for Passes</Text>
       </TouchableOpacity>
       {menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}      
       </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "2%",
    marginTop: "1%"
  },
  bar: {
    // marginLeft: 8,
    height: 25,
    width: 25
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white"
  },
  lottie: {
    height: "30%",
    width: "100%",
  },
  safe: {
    backgroundColor: "#006a42",
    flex: 1,
  },
  heading: {
    fontSize: 30,
    marginLeft: "5%",
    color: "white",
    fontWeight: 'bold'
  },
  heading1: {
    fontSize: 26,
    marginBottom: "0.5%",
    marginLeft: "5%",
    color: "white",
    fontWeight: "bold"
  },
  // categ: {
  //   margin: 9,
  //   padding: 5,
  //   marginBottom: 0,
  //   paddingBottom: 0,
  //   fontWeight: "bold",
  // },
  // catego: {
  //   margin: 9,
  //   padding: 5,
  //   marginTop: 0,
  //   paddingTop: 0,
  //   fontWeight: "bold",
  // },
  scroll: {},
  but: {
     justifyContent: "center",
     alignItems: 'center',
     borderRadius: 60,
     borderColor: "black",
     borderWidth: 2,
     margin: 10,
     width: 250
  },
  butText: {
    color: "#006a42",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 50
  },
  contain: {
    height: "35%",
    marginHorizontal: "5%",
    marginTop: "5%",
    marginBottom: "3%"
  },
  comp: {
    height: 120,
    width: 120,
    borderRadius: 30
  },
  barButton: {
    backgroundColor: '#006a42',
    padding: "4%",
    borderRadius: 20,
    marginHorizontal: "5%",
    marginBottom: "1%"
  },
  barText: {
     color: "white",
     fontWeight: 'bold',
     alignSelf: "center"
  },
  pay: {
    padding: "5%",
    justifyContent: "center",
    backgroundColor: "lightgrey",
    marginHorizontal: "10%",
    borderRadius: 20
  },
  payText: {
    alignSelf: "center",
    color: "#006a42",
    fontWeight: "bold",
    fontSize: 20,

  }
});
export default RenMain;
