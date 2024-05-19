import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { Divider } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function Sponsors() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ margin: 7 }}>
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
            marginHorizontal: "15%",
          }}
        >
          SPONSERS
        </Text>
      </View>
      <Divider
        orientation="horizontal"
        color="black"
        style={{ marginBottom: "3%" }}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ height: 100, width: 100, borderRadius: 100, margin: "2%" }}
            source={require("./assets/redbull.png")}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: "10%",
              marginLeft: "10%",
            }}
          >
            REDBULL INDIA
          </Text>
        </View>
        <Text style={{ margin: "5%" }}>
          Red Bull is a brand of energy drinks created and owned by the Austrian
          company Red Bull GmbH. With a market share of 43%, it is the most
          popular energy drink brand as of 2020,[8] and the third most valuable
          soft drink brand behind Coca-Cola and Pepsi.[9] Sinсe its launch in
          1987, more than 100 billion cans of Red Bull have been sold
          worldwide,[10] including over 11.5 billion in 2022
        </Text>
        <Divider
          orientation="horizontal"
          color="black"
          style={{ marginVertical: "5%" }}
        />
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ height: 100, width: 100, borderRadius: 100, margin: "2%" }}
            source={require("./assets/redbull.png")}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: "10%",
              marginLeft: "10%",
            }}
          >
            REDBULL INDIA
          </Text>
        </View>
        <Text style={{ margin: "5%" }}>
          Red Bull is a brand of energy drinks created and owned by the Austrian
          company Red Bull GmbH. With a market share of 43%, it is the most
          popular energy drink brand as of 2020,[8] and the third most valuable
          soft drink brand behind Coca-Cola and Pepsi.[9] Sinсe its launch in
          1987, more than 100 billion cans of Red Bull have been sold
          worldwide,[10] including over 11.5 billion in 2022
        </Text>
        <Divider
          orientation="horizontal"
          color="black"
          style={{ marginVertical: "5%" }}
        />
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ height: 100, width: 100, borderRadius: 100, margin: "2%" }}
            source={require("./assets/redbull.png")}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: "10%",
              marginLeft: "10%",
            }}
          >
            REDBULL INDIA
          </Text>
        </View>
        <Text style={{ margin: "5%" }}>
          Red Bull is a brand of energy drinks created and owned by the Austrian
          company Red Bull GmbH. With a market share of 43%, it is the most
          popular energy drink brand as of 2020,[8] and the third most valuable
          soft drink brand behind Coca-Cola and Pepsi.[9] Sinсe its launch in
          1987, more than 100 billion cans of Red Bull have been sold
          worldwide,[10] including over 11.5 billion in 2022
        </Text>
        <Divider
          orientation="horizontal"
          color="black"
          style={{ marginVertical: "5%" }}
        />
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ height: 100, width: 100, borderRadius: 100, margin: "2%" }}
            source={require("./assets/redbull.png")}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: "10%",
              marginLeft: "10%",
            }}
          >
            REDBULL INDIA
          </Text>
        </View>
        <Text style={{ margin: "5%" }}>
          Red Bull is a brand of energy drinks created and owned by the Austrian
          company Red Bull GmbH. With a market share of 43%, it is the most
          popular energy drink brand as of 2020,[8] and the third most valuable
          soft drink brand behind Coca-Cola and Pepsi.[9] Sinсe its launch in
          1987, more than 100 billion cans of Red Bull have been sold
          worldwide,[10] including over 11.5 billion in 2022
        </Text>
        <Divider
          orientation="horizontal"
          color="black"
          style={{ marginVertical: "5%" }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box1: {
    flexDirection: "row",
  },
  scroll: {
    marginBottom: "20%",
  },
});
