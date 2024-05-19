import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
import { darkGreen } from "./Constants";
import Btn from "./btn";
import RenMain from "./RenMain";
import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";
import { FIREBASE_AUTH, FIREBASE_DB } from "./FirebaseConfig";
import { User,signInWithEmailAndPassword,onAuthStateChanged,sendPasswordResetEmail } from "firebase/auth";
import { useToast } from "react-native-toast-notifications";

const Login = (props) => {
  const [ loading,setLoading ] = useState(false);
  const [ email,setEmail ] = useState("");
  const [ password,setPassword ] = useState("")
  const db = FIREBASE_DB;
  const auth = FIREBASE_AUTH;
  const Toast = useToast();
  const LoginNow = async() => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      Toast.show("Logged in successfully", {
        type: "success",
        placement: "top",
        duration: 2000,
        offset: 40,
        animationType: "slide-in",
      });
      props.navigation.navigate("RenMain");
    } catch (error) {
      console.log(error);
      Toast.show("Error:" + error.message, {
        type: "warning",
        placement: "top",
        duration: 2000,
        offset: 40,
        animationType: "slide-in",
      });
    } finally {
      setLoading(false);
    }
  }
  const resetPassword = () => {
    if (email != null) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          // Password reset email sent!
          // ..
          Toast.show("Password reset mail has been sent", {
            type: "success",
            placement: "top",
            duration: 2000,
            offset: 40,
            animationType: "slide-in",
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Toast.show("Error:" + errorMessage, {
            type: "warning",
            placement: "top",
            duration: 2000,
            offset: 40,
            animationType: "slide-in",
          });
          // ..
        });
    } else {
      alert("please enter a valid email");
    }
  };
  
  return (
    <SafeAreaView>
    <ImageBackground
      style={styles.container}
      source={require("./assets/email.jpg")}
    >
      <View style={{ alignItems: "center", width: "125%", marginTop: '5%' }}>
        <Text
          style={{
            fontSize: 54,
            color: "white",
            fontWeight: "bold",
            marginBottom: '5%',
          }}
        >
          Login
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: "100%",
            width: "100%",
            borderTopLeftRadius: 100,
            paddingTop: "25%",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 40,
              color: { darkGreen },
              fontWeight: "bold",
              marginRight: '20%',
            }}
          >
            Welcome Back
          </Text>

          <Text
            style={{
              color: "grey",
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: "5%",
              marginRight: "10%"
            }}
          >
            Login to your account
          </Text>
          <TextInput style={styles.info} placeholder="Email" keyboardType={"email-address"} value={email} placeholderTextColor={darkGreen} autoCapitalize="none" onChangeText={(text) => setEmail(text)}/>
          <TextInput style={styles.info} placeholder="Password" secureTextEntry={true} value={password} placeholderTextColor={darkGreen} autoCapitalize="none" onChangeText={(text) => setPassword(text)}/>
          <View
            style={{ alignItems: "flex-end", paddingRight: "20%"}}
          >
            <TouchableOpacity onPress={() => resetPassword()}>
              <Text
                style={{
                  color: darkGreen,
                  fontWeight: "bold",
                  fontSize: 16,
                  marginBottom: "7%",
                }}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.but}>
          <Btn
            style={{ marginRight: "10%" }}
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Login"
            Press={ () => LoginNow()}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Don't have an account?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SignUp")}
            >
              <Text
                style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
              >
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
      </View>
    </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
     but: {
        width: "90%",
        marginRight: "20%"    
    },
    info: {
      borderRadius: 100,
      color: darkGreen,
      paddingHorizontal: "5%",
      backgroundColor: "rgb(220,220,220)",
      marginVertical: "1%",
      marginRight: "18%",
      paddingVertical: "2%",
      width: "70%"
     }
});

export default Login;
