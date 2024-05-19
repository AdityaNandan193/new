import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { removeItem } from "./utils/asyncStorage";
import LottieView from "lottie-react-native";
import Btn from "./btn";
import { darkGreen } from "./Constants";
import Login from "./Login";
import SignUp from "./SignUp";

const { width, height } = Dimensions.get("window");

export default function HomeScreen(props) {
  const navigation = useNavigation();

  const handleReset = async () => {
    await removeItem("onboarded");
    navigation.push("Onboarding");
  };
  // const Press = (props) => {
  //     if(Press = 'Login') {
  //         props.navigation.navigate("Login");

  //     }
  //     if(Press = 'SignUp') {
  //         props.navigation.navigate("SignUp");
  //     }
  // }

  return (
    <SafeAreaView>
      {/* <ImageBackground source={require('../assets/home1.jpg')}> */}
      <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
        <Text style={styles.reset}>Reset</Text>
      </TouchableOpacity>
      <View style={styles.lottie}>
        <LottieView
          source={require("./assets/icons/animation_lmjff2xj.json")}
          autoPlay
          loop
        />
      </View>
      {/* <Text style={StyleSheet.text}>Login</Text> */}
      <View>
        <Text style={{ width: "auto", marginLeft: '5%', fontSize: 46}}>to</Text>
        <Text style={{ width: "auto", marginLeft: '5%', fontSize: 46, fontWeight: "bold",marginBottom: '18%',fontFamily: "monospace"}}>RenConnect</Text>
      </View>
        <Btn
          bgColor={darkGreen}
          textColor="white"
          btnLabel="Login"
          Press={() => props.navigation.navigate("Login")}
        />
        <Btn
          bgColor="white"
          textColor={darkGreen}
          btnLabel="SignUp"
          borderColor="#006a42"
          borderWidth={2}
          Press={() => props.navigation.navigate("SignUp")}
        />
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cccccc",
    flex: 1,
    alignItems: "center",
  },
  reset: {
     color: 'white',
     fontWeight: 'bold',
     fontSize: 15
  },
  lottie: {
    marginTop: '5%',
    alignItems: "center",
    height: "30%",
    width: "auto",
    marginRight: "40%",
    marginBottom: "-15%"
  },
  resetButton: {
    backgroundColor: "#006a42",
    padding: "3%",
    // paddingLeft:20,
    // paddingRight: 20,
    // margin: 150,
    marginVertical: '5%',
    // marginLeft: 10,
    marginRight: "70%",
    marginLeft: "3%",
    alignItems: "center",
    borderRadius: 10,
    width: 'auto'
  },
  button: {
    // justifyContent: 'center',
    // alignContent: 'center',
    // backgroundColor: '#34d399',
    // borderColor: 'black',
    // borderRadius: 100,
    //  alignItems: 'center',
    //  width: 350,
    //  paddingVertical: 5
  },
});
