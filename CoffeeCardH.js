import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BookmarkIcon } from "react-native-heroicons/solid";
import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";

export default function CoffeeCardH({ item }) {
  const navigation = useNavigation();
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <SafeAreaView>
    <View
      style={{
        borderRadius: 40,
        backgroundColor: "#ffd700",
        height: 250,
        width: 250,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <TouchableOpacity
          onPress={() => setIsFavourite(!isFavourite)}
          style={{ backgroundColor: "#ffd700", marginTop: 13, marginRight: 10 }}
        >
          <BookmarkIcon size="25" color={isFavourite ? "#8b8000" : "white"} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("GamesH",{ ...item, color: item.color(1)})}>
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
            <Text style={{ fontWeight: "bold",color: "#006a42",fontSize: 20,marginTop: "4%" }}>{item.listname}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}
