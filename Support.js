import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "@rneui/themed";
export default function Support() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", marginBottom: "4%" }}>
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
            fontSize: 28,
            marginTop: "6.5%",
            marginHorizontal: "18%",
          }}
        >
          SUPPORT
        </Text>
      </View>
      <Divider
        orientation="horizontal"
        color="black"
        style={{ marginBottom: "5%" }}
      />
      <ScrollView style={{ marginBottom: "5%" }}>
        <View></View>
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 23,
            marginBottom: "2%",
            marginTop: "1%",
          }}
        >
          GUIDED BY
        </Text>
        <Divider
        orientation="horizontal"
        color="black"
        style={{ marginVertical: "5%" }}
      />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginVertical: "4%",
          }}
        >
          <Image
            style={{
              height: 150,
              width: 150,
              borderRadius: 100,
              marginBottom: "2%",
            }}
            source={require("./assets/arpit.jpg")}
          />
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            MR. ARPIT AGRAWAL
          </Text>
        </View>
        <Divider
        orientation="horizontal"
        color="black"
        style={{ marginVertical: "5%" }}
      />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginVertical: "4%",
          }}
        >
          <Image
            style={{
              height: 150,
              width: 150,
              borderRadius: 100,
              marginBottom: "2%",
            }}
            source={require("./assets/chandana.jpg")}
          />
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            DR. V.K. CHANDANA
          </Text>
        </View>
        <Divider
        orientation="horizontal"
        color="black"
        style={{ marginVertical: "5%" }}
      />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginVertical: "4%",
          }}
        >
          <Image
            style={{
              height: 150,
              width: 150,
              borderRadius: 100,
              marginBottom: "2%",
            }}
            source={require("./assets/sanjay.jpg")}
          />
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            DR. SANJAY GAUR
          </Text>
        </View>
        <Divider
        orientation="horizontal"
        color="black"
        style={{ marginVertical: "5%" }}
      />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginVertical: "4%",
          }}
        >
          <Image
            style={{
              height: 150,
              width: 150,
              borderRadius: 100,
              marginBottom: "2%",
            }}
            source={require("./assets/vijeta.jpg")}
          />
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            DR. VIJETA KUMAWAT
          </Text>
        </View>
        <Divider
        orientation="horizontal"
        color="black"
        style={{ marginVertical: "5%" }}
      />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginVertical: "4%",
          }}
        >
          <Image
            style={{
              height: 150,
              width: 150,
              borderRadius: 100,
              marginBottom: "2%",
            }}
            source={require("./assets/madhu.jpg")}
          />
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            MISS MADHU CHOUDHARY
          </Text>
        </View>
        <Divider
        orientation="horizontal"
        color="black"
        style={{ marginVertical: "5%" }}
      />
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 23,
            marginBottom: "2%",
            marginTop: "6%",
          }}
        >
          DEVELOPED BY
        </Text>

        <Divider
        orientation="horizontal"
        color="black"
        style={{ marginVertical: "5%" }}
      />

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginVertical: "4%",
          }}
        >
          <Image
            style={{
              height: 150,
              width: 150,
              borderRadius: 100,
              marginBottom: "2%",
            }}
            source={require("./assets/aarushi1.jpg")}
          />
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            AARUSHI AGARWAL
          </Text>
        </View>
        <Divider
        orientation="horizontal"
        color="black"
        style={{ marginVertical: "5%" }}
      />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginVertical: "4%",
          }}
        >
          <Image
            style={{
              height: 150,
              width: 150,
              borderRadius: 100,
              marginBottom: "2%",
            }}
            source={require("./assets/joshi.jpg")}
          />
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            ABHISHEK JOSHI
          </Text>
        </View>
        <Divider
        orientation="horizontal"
        color="black"
        style={{ marginVertical: "5%" }}
      />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginVertical: "4%",
          }}
        >
          <Image
            style={{
              height: 150,
              width: 150,
              borderRadius: 100,
              marginBottom: "2%",
            }}
            source={require("./assets/agarwal.jpg")}
          />
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            ADITYA AGARWAL
          </Text>
        </View>
        <Divider
        orientation="horizontal"
        color="black"
        style={{ marginVertical: "5%" }}
      />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginVertical: "4%",
          }}
        >
          <Image
            style={{
              height: 150,
              width: 150,
              borderRadius: 100,
              marginBottom: "2%",
            }}
            source={require("./assets/nandan.jpg")}
          />
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            ADITYA NANDAN
          </Text>
        </View>
        <Divider
        orientation="horizontal"
        color="black"
        style={{ marginVertical: "5%" }}
      />
      </ScrollView>
    </SafeAreaView>
  );
}
