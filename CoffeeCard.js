import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BookmarkIcon } from "react-native-heroicons/solid";
import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";
import { ListItem } from "@rneui/themed";

export default function CoffeeCard({  eventName, slotsLeft  }) {
  const navigation = useNavigation();
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <SafeAreaView>
    <View
      style={{
        borderRadius: 40,
        backgroundColor: "#cccccc",
        height: 250,
        width: 250,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <TouchableOpacity
          onPress={() => setIsFavourite(!isFavourite)}
          style={{ backgroundColor: "#cccccc", marginTop: 13, marginRight: 10 }}
        >
          <BookmarkIcon size="25" color={isFavourite ? "grey" : "white"} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Games",{ eventName:  eventName})}>
        <View>
          <View style={{}}>
            <Image
              source={require("./assets/2.jpg")}
              style={{
                width: 140,
                height: 140,
                marginLeft: 50,
                marginBottom: 6,
                borderRadius: 22,
              }}
            />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold",color: "#006a42",fontSize: 16 }}>{eventName}</Text>
            <Text style={{color: "#006a42"}}>Slots Left: {slotsLeft}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}
