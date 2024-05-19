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

export default function Guidelines() {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView style={{ margin: 6 }}>
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
            GUIDELINES
          </Text>
        </View>
        <Divider
          orientation="horizontal"
          color="black"
          style={{ marginBottom: "5%" }}
        />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          <View style={{ marginBottom: "5%" }}>
            <Text style={{ fontWeight: "bold", backgroundColor: "#b2bea4" }}>
              {" "}
              1. Research the Event:
            </Text>
            <Text>
              Understand the details of the event you're participating in. Know
              the theme, rules, schedule, and any specific requirements. This
              will help you prepare appropriately.
            </Text>
          </View>
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: "5%" }}
          />
          <View style={{ marginBottom: "5%" }}>
            <Text style={{ fontWeight: "bold", backgroundColor: "#b2bea4" }}>
              {" "}
              2. Plan Ahead:{" "}
            </Text>
            <Text>
              Start your preparations early to avoid last-minute stress. Create
              a schedule that allows you to balance your academic commitments
              with event preparations.
            </Text>
          </View>
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: "5%" }}
          />
          <View style={{ marginBottom: "5%" }}>
            <Text style={{ fontWeight: "bold", backgroundColor: "#b2bea4" }}>
              {" "}
              3. Team Collaboration:{" "}
            </Text>
            <Text>
              If you're participating as a part of a team, ensure clear
              communication and cooperation. Define roles and responsibilities,
              set deadlines, and regularly update each other on progress.
            </Text>
          </View>
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: "5%" }}
          />
          <View style={{ marginBottom: "5%" }}>
            <Text style={{ fontWeight: "bold", backgroundColor: "#b2bea4" }}>
              {" "}
              4. Practice and Rehearsals:{" "}
            </Text>
            <Text>
              If your event involves a performance, presentation, or
              competition, practice is key. Rehearse multiple times to build
              confidence and refine your performance.
            </Text>
          </View>
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: "5%" }}
          />
          <View style={{ marginBottom: "5%" }}>
            <Text style={{ fontWeight: "bold", backgroundColor: "#b2bea4" }}>
              {" "}
              5. Creativity and Originality:
            </Text>
            <Text>
              Showcase your creativity and uniqueness in your approach to the
              event. Judges and audiences often appreciate fresh and innovative
              ideas.
            </Text>
          </View>
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: "5%" }}
          />
          <View style={{ marginBottom: "5%" }}>
            <Text style={{ fontWeight: "bold", backgroundColor: "#b2bea4" }}>
              {" "}
              6. Respect the Rules:{" "}
            </Text>
            <Text>
              Adhere to the rules of the event. This includes any guidelines
              about props, time limits, dress codes, and conduct.
              Disqualification due to rule violations can be disappointing.
            </Text>
          </View>
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: "5%" }}
          />
          <View style={{ marginBottom: "5%" }}>
            <Text style={{ fontWeight: "bold", backgroundColor: "#b2bea4" }}>
              {" "}
              7. Time Management:
            </Text>
            <Text>
              On the day of the event, manage your time effectively. Arrive
              early to familiarize yourself with the venue and ensure you're
              well-prepared before your turn.
            </Text>
          </View>
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: "5%" }}
          />
          <View style={{ marginBottom: "5%" }}>
            <Text style={{ fontWeight: "bold", backgroundColor: "#b2bea4" }}>
              {" "}
              8. Presentation Skills:{" "}
            </Text>
            <Text>
              If your event involves a presentation or speech, work on your
              presentation skills. Maintain eye contact, speak clearly, and
              engage the audience.
            </Text>
          </View>
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: "5%" }}
          />
          <View style={{ marginBottom: "5%" }}>
            <Text style={{ fontWeight: "bold", backgroundColor: "#b2bea4" }}>
              {" "}
              9. Dress Appropriately:
            </Text>
            <Text>
              Follow any dress code specified for the event. Dressing
              appropriately shows respect for the occasion and adds to your
              overall presentation.
            </Text>
          </View>
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: "5%" }}
          />
          <View style={{ marginBottom: "5%" }}>
            <Text style={{ fontWeight: "bold", backgroundColor: "#b2bea4" }}>
              {" "}
              10. Engage with the Audience:{" "}
            </Text>
            <Text>
              Interact with the audience during or after your performance. This
              can help you connect, receive feedback, and create a memorable
              experience for everyone.
            </Text>
          </View>
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: "5%" }}
          />
          <View style={{ marginBottom: "5%" }}>
            <Text style={{ fontWeight: "bold", backgroundColor: "#b2bea4" }}>
              {" "}
              11. Be a Good Sport:{" "}
            </Text>
            <Text>
              Whether you win or not, maintain a positive attitude. Congratulate
              winners and be gracious in defeat. Remember that participation
              itself is an achievement.
            </Text>
          </View>
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: "5%" }}
          />
          <View style={{ marginBottom: "5%" }}>
            <Text style={{ fontWeight: "bold", backgroundColor: "#b2bea4" }}>
              {" "}
              12. Networking:{" "}
            </Text>
            <Text>
              Use the event as an opportunity to network. Interact with other
              participants, judges, and organizers. Building connections can be
              valuable for your personal and professional growth.
            </Text>
          </View>
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: "5%" }}
          />
          <View style={{ marginBottom: "5%" }}>
            <Text style={{ fontWeight: "bold", backgroundColor: "#b2bea4" }}>
              {" "}
              13. Capture Memories:{" "}
            </Text>
            <Text>
              Take photos and videos to remember the event. Documenting your
              experience can be a great way to relive the moment and showcase
              your achievements.
            </Text>
          </View>
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: "5%" }}
          />
          <View style={{ marginBottom: "5%" }}>
            <Text style={{ fontWeight: "bold", backgroundColor: "#b2bea4" }}>
              {" "}
              14. Follow Up:
            </Text>
            <Text>
              After the event, express gratitude to the organizers, your team
              members, and anyone who supported you. A simple thank-you note can
              go a long way.
            </Text>
          </View>
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: "5%" }}
          />
          <View style={{ marginBottom: "5%" }}>
            <Text style={{ fontWeight: "bold", backgroundColor: "#b2bea4" }}>
              {" "}
              15. Reflect and Learn:
            </Text>
            <Text>
              Take time to reflect on your performance. Identify what went well
              and areas for improvement. Learning from your experiences can help
              you perform even better in the future.
            </Text>
          </View>
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: "5%" }}
          />
          <View style={{ marginBottom: "5%" }}>
            <Text style={{ fontWeight: "bold", backgroundColor: "#b2bea4" }}>
              {" "}
              16. Stay Balanced:
            </Text>
            <Text>
              While participating in the event is important, don't let it
              overwhelm your academic responsibilities. Maintain a balance
              between your event preparations and your studies.
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
    marginBottom: "50%",
    marginLeft: "2%",
  },
});
