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
import { useNavigation } from "@react-navigation/native";
import { Divider } from "@rneui/themed";

const images = [
  "https://jecrcconference.in/icetcesd2020/images/JECRC-Foundation.jpg",
  "https://lh3.googleusercontent.com/5bYQz1HxIpj-YQXeH69VDFBja9lWH5QGJSPb5yhZ4i1VchiVNYFSHpfbxEl2fXU0Iu7a75LfntkoLDZGG_5g0-a9AcJjOq_ZrsApDYjX-BSqQbVVtdzGmOzd0Wh59Fa2-SlGt4RTzcpk6uYWIQ",
];

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function About() {
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
              marginHorizontal: "13%",
            }}
          >
            About JECRC
          </Text>
        </View>
        <Divider
          orientation="horizontal"
          color="black"
          style={{ marginBottom: "5%" }}
        />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          <View>
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
              JECRC FOUNDATION
            </Text>
            <Text style={{ margin: "5%" }}>
              A journey of Two decades for JECRC, having more than 4000 students
              on campus under 7 UG programs, has earned laurels to their
              students, faculty members and for the institute in many ways. More
              than 10000 alumni’s spread over the globe has climbed the ladder
              to leadership positions and providing mentorship to their juniors
              by way of skill development, incubation, startup, research and
              angel funding. Faith by government agencies for providing grant of
              more than 2 crores for setting up centre of excellence, state of
              art facilities for startup & incubation and providing platform to
              the students to develop their technical and managerial skills that
              is helping students to get placement in a reputed organization.
              Contribution towards International publications, technical
              activities, co-curricular activities by faculty members, students
              and delivery of Outcome based education is recognized by National
              Board of Accreditation and AICTE.
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
              VISION
            </Text>
            <Text style={{ margin: "5%" }}>
              Vision To become a renowned centre of outcome based learning, and
              work towards academic, professional, cultural and social
              enrichment of the lives of individuals and communities.
            </Text>
          </View>
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: "5%" }}
          />
          <View style={{ margin: "5%" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                textAlign: "center",
                marginTop: 5,
              }}
            >
              MISSION
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "black", fontSize: 11, marginRight: "2%" }}>
                ⬤
              </Text>
              <Text>
                Focus on evaluation of learning outcomes and motivate students
                to inculcate research aptitude by project based learning.
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "black", fontSize: 11, marginRight: "2%" }}>
                ⬤
              </Text>
              <Text>
                Identify, based on informed perception of Indian, regional and
                global needs, areas of focus and provide platform to gain
                knowledge and solutions.
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "black", fontSize: 11, marginRight: "2%" }}>
                ⬤
              </Text>
              <Text>
                Offer opportunities for interaction between academia and
                industry.
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "black", fontSize: 11, marginRight: "2%" }}>
                ⬤
              </Text>
              <Text>
                Develop human potential to its fullest extent so that
                intellectually capable and imaginatively gifted leaders can
                emerge in a range of professions.
              </Text>
            </View>
            <Divider
              orientation="horizontal"
              color="black"
              style={{ marginVertical: "5%" }}
            />
          </View>
          {/* <View style={{backgroundColor: 'grey'}} >
                    <Text>Contact Us</Text>
                    <Text>Email</Text>
                    <Text>Address</Text>
                </View> */}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.27,
    borderRadius: 25,
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
