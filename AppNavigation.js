import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import OnboardingScreen from "./OnboardingScreen";
import { getItem } from "./utils/asyncStorage";
import SignUp from "./SignUp";
import Login from "./Login";
import RenMain from "./RenMain";
import Technical from  "./Technical";
import About from "./About";
import Pay from "./Pay";
import Gallery from "./Gallery";
import Games from "./Games";
import GamesD from "./GamesD";
import GamesG from "./GamesG";
import GamesH from "./GamesH";
import GamesI from "./GamesI";
import Splash from "./Splash";
import Cultural from "./Cultural";
import AboutRen from "./AboutRen";
import Sponsors from "./Sponsers";
import Guidelines from "./Guidelines";
import Team from "./Team";
import Day1 from "./Day1";
import Day2 from "./Day2";
import Day3 from "./Day3";
import ContactUs from "./ContactUs";
import Support from "./Support";
import TermsAndConditions from "./TermsAndConditions";
// import Tabs from './tabs';
import RegisteredEventsScreen from "./RegisteredEventsScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const [showOnboarding, setShowOnboarding] = useState(null);

  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, []);

  const checkIfAlreadyOnboarded = async () => {
    let onboarded = await getItem("onboarded");
    if (onboarded == 1) {
      setShowOnboarding(false);
    } else {
      setShowOnboarding(true);
    }
  };

  if (showOnboarding == null) {
    return null;
  }

  if (showOnboarding) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen
            name="Onboarding"
            options={{ headerShown: false }}
            component={OnboardingScreen}
          />
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={HomeScreen}
          />
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={Login}
          />
          <Stack.Screen
            name="SignUp"
            options={{ headerShown: false }}
            component={SignUp}
          />
          <Stack.Screen
            name="RenMain"
            options={{ headerShown: false }}
            component={RenMain}
          />
          <Stack.Screen
            name="About"
            options={{ headerShown: false }}
            component={About}
          />
          <Stack.Screen
            name="Technical"
            options={{ headerShown: false }}
            component={Technical}
          />
          <Stack.Screen
            name="Splash"
            options={{ headerShown: false }}
            component={Splash}
          />
          <Stack.Screen
            name="Cultural"
            options={{ headerShown: false }}
            component={Cultural}
          />
          <Stack.Screen
            name="Pay"
            options={{ headerShown: false }}
            component={Pay}
          />
           <Stack.Screen
            name="Gallery"
            options={{ headerShown: false }}
            component={Gallery}
          />
          <Stack.Screen
            name="Games"
            options={{ headerShown: false }}
            component={Games}
          />
           <Stack.Screen
            name="GamesD"
            options={{ headerShown: false }}
            component={GamesD}
          />
           <Stack.Screen
            name="GamesG"
            options={{ headerShown: false }}
            component={GamesG}
          />
           <Stack.Screen
            name="GamesH"
            options={{ headerShown: false }}
            component={GamesH}
          />
           <Stack.Screen
            name="GamesI"
            options={{ headerShown: false }}
            component={GamesI}
          />
           <Stack.Screen
            name="AboutRen"
            options={{ headerShown: false }}
            component={AboutRen}
          />
           <Stack.Screen
            name="Sponsers"
            options={{ headerShown: false }}
            component={Sponsors}
          />
           <Stack.Screen
            name="Guidelines"
            options={{ headerShown: false }}
            component={Guidelines}
          />
            <Stack.Screen
            name="Team"
            options={{ headerShown: false }}
            component={Team}
          />
            <Stack.Screen
            name="Day1"
            options={{ headerShown: false }}
            component={Day1}
          />
           <Stack.Screen
            name="Day2"
            options={{ headerShown: false }}
            component={Day2}
          />
           <Stack.Screen
            name="Day3"
            options={{ headerShown: false }}
            component={Day3}
          />
           <Stack.Screen
            name="ContactUs"
            options={{ headerShown: false }}
            component={ContactUs}
          />
        <Stack.Screen
          name="RegisteredEvents"
          options={{ headerShown: false }}
          component={RegisteredEventsScreen}
        />
         <Stack.Screen
          name="Support"
          options={{ headerShown: false }}
          component={Support}
        />
         <Stack.Screen
          name="TermsAndConditions"
          options={{ headerShown: false }}
          component={TermsAndConditions}
        />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Onboarding"
          options={{ headerShown: false }}
          component={OnboardingScreen}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name="SignUp"
          options={{ headerShown: false }}
          component={SignUp}
        />
        <Stack.Screen
          name="RenMain"
          options={{ headerShown: false }}
          component={RenMain}
        />
        <Stack.Screen
          name="About"
          options={{ headerShown: false }}
          component={About}
        />
        <Stack.Screen
          name="Technical"
          options={{ headerShown: false }}
          component={Technical}
        />
        <Stack.Screen
          name="Splash"
          options={{ headerShown: false }}
          component={Splash}
        />
        <Stack.Screen
          name="Cultural"
          options={{ headerShown: false }}
          component={Cultural}
        />
        <Stack.Screen
          name="Pay"
          options={{ headerShown: false }}
          component={Pay}
        />
         <Stack.Screen
          name="Gallery"
          options={{ headerShown: false }}
          component={Gallery}
        />
        <Stack.Screen
          name="Games"
          options={{ headerShown: false }}
          component={Games}
        />
         <Stack.Screen
          name="GamesD"
          options={{ headerShown: false }}
          component={GamesD}
        />
         <Stack.Screen
          name="GamesG"
          options={{ headerShown: false }}
          component={GamesG}
        />
         <Stack.Screen
          name="GamesH"
          options={{ headerShown: false }}
          component={GamesH}
        />
         <Stack.Screen
          name="GamesI"
          options={{ headerShown: false }}
          component={GamesI}
        />
         <Stack.Screen
          name="AboutRen"
          options={{ headerShown: false }}
          component={AboutRen}
        />
         <Stack.Screen
          name="Sponsers"
          options={{ headerShown: false }}
          component={Sponsors}
        />
         <Stack.Screen
          name="Guidelines"
          options={{ headerShown: false }}
          component={Guidelines}
        />
          <Stack.Screen
          name="Team"
          options={{ headerShown: false }}
          component={Team}
        />
          <Stack.Screen
          name="Day1"
          options={{ headerShown: false }}
          component={Day1}
        />
         <Stack.Screen
          name="Day2"
          options={{ headerShown: false }}
          component={Day2}
        />
         <Stack.Screen
          name="Day3"
          options={{ headerShown: false }}
          component={Day3}
        />
         <Stack.Screen
          name="ContactUs"
          options={{ headerShown: false }}
          component={ContactUs}
        />
      <Stack.Screen
        name="RegisteredEvents"
        options={{ headerShown: false }}
        component={RegisteredEventsScreen}
      />
      <Stack.Screen
          name="Support"
          options={{ headerShown: false }}
          component={Support}
        />
        <Stack.Screen
          name="TermsAndConditions"
          options={{ headerShown: false }}
          component={TermsAndConditions}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}
