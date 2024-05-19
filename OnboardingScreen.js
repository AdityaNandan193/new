import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { setItem } from "./utils/asyncStorage";

const { width, height } = Dimensions.get("window");

export default function OnboardingScreen() {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("Home");
    setItem("onboarded", "1");
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        bottomBarHighlight={false}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#a7f3d0",
            image: (
              <View style={styles.lottie}>
                {/* <Image source={require('../assets/2.jpg')} /> */}

                <LottieView
                  source={require("./assets/icons/ani1.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#fef3c7",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("./assets/icons/animation_lkxwi3so.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#a78bfa",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("./assets/icons/animation_lkxwxp14.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottie: {
    height: width,
    width: width * 0.9,
  },
  doneButton: {
    padding: 20,
    backgroundColor: "white",
    // borderTopLeftRadius: '100%',
    // borderBottomLeftRadius: '100%'
  },
});
