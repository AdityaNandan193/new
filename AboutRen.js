import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { Divider } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
const images = [
  "https://i.ytimg.com/vi/lONlqdGEjnY/hqdefault.jpg",
  "https://firstindia.co.in/public/news/April2023/1681963734Photo%20by%20%20-%202023-04-20T093759.355.png",
  "https://firstindia.co.in/public/images/Photo%20by%20%20-%202023-04-20T093612.331_1681963610.png",
];

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function AboutRen() {
  const [imgActive, setimgActive] = useState(0);
  const navigation = useNavigation();
  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };
  return (
    <View>
      <SafeAreaView>
        <View style={styles.box1}>
          <TouchableOpacity
            style={{
              borderColor: "white",
              marginLeft: "2%",
              marginTop: "7.5%",
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
              marginHorizontal: "1%",
            }}
          >
            About RENAISSANCE
          </Text>
        </View>
        <Divider
          orientation="horizontal"
          color="black"
          style={{ marginBottom: "5%" }}
        />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          <View style={styles.wrap}>
            <ScrollView
              onScroll={({ nativeEvent }) => onchange(nativeEvent)}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
              style={styles.wrap}
            >
              {images.map((e, index) => (
                <Image
                  key={e}
                  resizeMode="stretch"
                  style={styles.wrap}
                  source={{ uri: e }}
                />
              ))}
            </ScrollView>
            <View style={styles.wrapDot}>
              {images.map((e, index) => (
                <Text
                  key={e}
                  style={imgActive == index ? styles.dotActive : styles.dot}
                >
                  ⬤
                </Text>
              ))}
            </View>
          </View>
          <View>
            <Divider
              orientation="horizontal"
              color="black"
              style={{ marginVertical: "5%" }}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                textAlign: "center",
                marginTop: "5%",
              }}
            >
              RENAISSANCE
            </Text>
            <Text style={{ margin: "5%" }}>
              The foundation is proud to announce that it will be partnering
              with the Cultural Indian Foundation Pin Up Bet alexinwonderland.in
              for the upcoming event "Renaissance '24." The Cultural Indian
              Foundation Pin Up Bet is a not-for-profit organization that aims
              to promote and preserve the rich cultural heritage of India
              through various events and programs. The organization is dedicated
              to promoting the arts, literature, and culture of India, and has
              been a strong supporter of the education sector. The partnership
              between JECRC Foundation and the Cultural Indian Foundation Pin Up
              Bet is a natural fit, as both organizations share a common goal of
              promoting education and cultural preservation. The Cultural Indian
              Foundation Pin Up Bet will be investing in the event and providing
              financial support to ensure that it is a success. With their
              support, JECRC Foundation will be able to provide an even greater
              level of education and cultural enrichment to its students
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
                fontSize: 18,
                textAlign: "center",
                marginTop: "5%",
              }}
            >
              EVENTS
            </Text>
          </View>
          <View style={{ margin: "3%" }}>
            <View style={{ flexDirection: "row", margin: "2%" }}>
              <Text style={{ color: "black", fontSize: 11, marginRight: "2%" }}>
                ⬤
              </Text>
              <Text>TECHNICAL EVENTS</Text>
            </View>
            <View style={{ flexDirection: "row", margin: "2%" }}>
              <Text style={{ color: "black", fontSize: 11, marginRight: "2%" }}>
                ⬤
              </Text>
              <Text>CULTURAL EVENTS</Text>
            </View>
            <View style={{ flexDirection: "row", margin: "2%" }}>
              <Text style={{ color: "black", fontSize: 11, marginRight: "2%" }}>
                ⬤
              </Text>
              <Text>SPLASH EVENTS</Text>
            </View>
            <Divider
              orientation="horizontal"
              color="black"
              style={{ marginVertical: "5%" }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
    borderRadius: 20,
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    color: "black",
  },
  dot: {
    margin: 3,
    color: "white",
  },
  box1: {
    flexDirection: "row",
  },
  scroll: {
    marginBottom: "50%",
  },
});
