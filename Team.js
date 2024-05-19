import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "@rneui/themed";
export default function Team() {
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
              marginVertical: "6%",
              marginHorizontal: "25%",
            }}
          >
            TEAM
          </Text>
        </View>
        <Divider
          orientation="horizontal"
          color="black"
          style={{ marginBottom: "5%" }}
        />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                textAlign: "center",
                margin: "2.5%",
                backgroundColor: "#b2bea4",
              }}
            >
              PROMOTION AND MANAGMENT TEAM
            </Text>
            <Text style={{ textAlign: "center", fontSize: 18, margin: "1%" }}>
              ABHISHEK JOSHI
            </Text>
            <Text style={{ textAlign: "center", fontSize: 18, margin: "1%" }}>
              ADITYA NANDAN
            </Text>
            <Text style={{ textAlign: "center", fontSize: 18, margin: "1%" }}>
              ADITYA AGARWAL
            </Text>
            <Text style={{ textAlign: "center", fontSize: 18, margin: "1%" }}>
              AARUSHI AGARWAL
            </Text>
          </View>
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: "5%" }}
          />
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                textAlign: "center",
                margin: "2.5%",
                backgroundColor: "#b2bea4",
              }}
            >
              GRAPHICS TEAM
            </Text>
            <Text style={{ textAlign: "center", fontSize: 18, margin: "1%" }}>
              ABHISHEK JOSHI
            </Text>
            <Text style={{ textAlign: "center", fontSize: 18, margin: "1%" }}>
              ADITYA NANDAN
            </Text>
            <Text style={{ textAlign: "center", fontSize: 18, margin: "1%" }}>
              ADITYA AGARWAL
            </Text>
            <Text style={{ textAlign: "center", fontSize: 18, margin: "1%" }}>
              AARUSHI AGARWAL
            </Text>
          </View>
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: "5%" }}
          />
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                textAlign: "center",
                margin: "2.5%",
                backgroundColor: "#b2bea4",
              }}
            >
              PHOTOGRAPHY TEAM
            </Text>
            <Text style={{ textAlign: "center", fontSize: 18, margin: "1%" }}>
              ABHISHEK JOSHI
            </Text>
            <Text style={{ textAlign: "center", fontSize: 18, margin: "1%" }}>
              ADITYA NANDAN
            </Text>
            <Text style={{ textAlign: "center", fontSize: 18, margin: "1%" }}>
              ADITYA AGARWAL
            </Text>
            <Text style={{ textAlign: "center", fontSize: 18, margin: "1%" }}>
              AARUSHI AGARWAL
            </Text>
          </View>
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: "5%" }}
          />
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                textAlign: "center",
                margin: "2.5%",
                backgroundColor: "#b2bea4",
              }}
            >
              CONTENT WRITING TEAM
            </Text>
            <Text style={{ textAlign: "center", fontSize: 18, margin: "1%" }}>
              ABHISHEK JOSHI
            </Text>
            <Text style={{ textAlign: "center", fontSize: 18, margin: "1%" }}>
              ADITYA NANDAN
            </Text>
            <Text style={{ textAlign: "center", fontSize: 18, margin: "1%" }}>
              ADITYA AGARWAL
            </Text>
            <Text style={{ textAlign: "center", fontSize: 18, margin: "1%" }}>
              AARUSHI AGARWAL
            </Text>
          </View>
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
    marginBottom: "60%",
    marginHorizontal: "2%",
  },
});
