import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "@rneui/themed";

export default function Day3() {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView>
        <View style={styles.box1}>
          <TouchableOpacity
            style={{
              borderColor: "white",
              marginLeft: "2%",
              marginTop: "8%",
              borderRadius: 100,
            }}
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon style={{ color: "black", marginLeft: "5%" }} />
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 28,
              marginVertical: "5%",
              marginHorizontal: "25%",
            }}
          >
            DAY 3
          </Text>
        </View>
        <Divider orientation="horizontal" color="black" style={{}} />
        <View style={styles.box1}>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 28,
              marginVertical: "5%",
              marginHorizontal: "38%",
            }}
          >
            BAND
          </Text>
        </View>
        <Divider
          orientation="horizontal"
          color="black"
          style={{ marginBottom: "5%" }}
        />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              marginVertical: "2%",
              marginHorizontal: "3%",
            }}
          >
            Description:{" "}
          </Text>
          <Text style={{ padding: "1%", marginHorizontal: "3%" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginBottom: "5%" }}
          />
          <View
            style={{
              flexDirection: "row",
              marginVertical: 5,
              marginHorizontal: "3%",
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Timing: </Text>
            <Text style={{ marginLeft: "17%" }}>8:00 - 10:00 </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginVertical: 5,
              marginHorizontal: "3%",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Venue: </Text>
            <Text style={{ marginLeft: "18%" }}>B-block Lawn </Text>
          </View>
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: "5%" }}
          />
          <Image
            style={{
              height: 220,
              width: "100%",
              marginVertical: "1%",
              borderRadius: 30,
            }}
            source={require("./assets/jecrc.png")}
          />
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: "5%" }}
          />
          <Image
            style={{
              height: 220,
              width: "100%",
              marginVertical: "1%",
              borderRadius: 30,
            }}
            source={require("./assets/jecrc.png")}
          />
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: "5%" }}
          />
          <Image
            style={{
              height: 220,
              width: "100%",
              marginVertical: "1%",
              borderRadius: 30,
            }}
            source={require("./assets/jecrc.png")}
          />
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: "5%" }}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  box1: {
    flexDirection: "row",
  },
  scroll: {
    marginBottom: "95%",
  },
});
