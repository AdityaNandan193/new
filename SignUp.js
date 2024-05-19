import React, { useState,useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { darkGreen } from "./Constants";
import Btn from "./btn";
import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";
import { set,ref } from "firebase/database";
import {
   createUserWithEmailAndPassword
} from "firebase/auth";
import { FIREBASE_AUTH, FIREBASE_DB } from "./FirebaseConfig";
import PhoneInput from "react-native-phone-number-input";
import { useToast } from "react-native-toast-notifications";
const SignUp = (props) => {
  const [ name,setName ] = useState("");
  const [ email,setEmail ] = useState("");
  const [ contactNumber,setContactNumber ] = useState("");
  const [ rollNumber,setRollNumber ] = useState("");
  const [ section,setSection ] = useState("");
  const [ password,setPassword ] = useState("");
  const [ confirmPassword,setConfirmPassword ] = useState("");
  const [ loading,setLoading ] = useState(false);
  const [ error,setError ] = useState({field: '',message: ''})
  const auth = FIREBASE_AUTH;
  const Toast = useToast(); 
  const SignUpNow = async() => {
    setLoading(true);
    let loginError = {field: "",message: ""}
    if(name === '')
    {
      Toast.show("Name is a mandatory field.", {
        type: "warning",
        placement: "top",
        duration: 2000,
        offset: 40,
        animationType: "slide-in",
      });
    }
    else if(email === '')
    {
      Toast.show("Email is a mandatory field.", {
        type: "warning",
        placement: "top",
        duration: 2000,
        offset: 40,
        animationType: "slide-in",
      });
    }
    else if(contactNumber === '')
    {
      Toast.show("Contact Number is a mandatory field.", {
        type: "warning",
        placement: "top",
        duration: 2000,
        offset: 40,
        animationType: "slide-in",
      });
    }
    else if(rollNumber === '')
    {
      Toast.show("Roll Number is a mandatory field.", {
        type: "warning",
        placement: "top",
        duration: 2000,
        offset: 40,
        animationType: "slide-in"
      });
    } 
    else if(password === '')
    {
      Toast.show("Password is a mandatory field.", {
        type: "warning",
        placement: "top",
        duration: 2000,
        offset: 40,
        animationType: "slide-in",
      });
    }
    else if(password == confirmPassword){
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      try{
        const db = FIREBASE_DB;
        const sanitizedEmail = email.replace(/[^a-zA-Z0-9]/g,'_');
        const dbpath = `users/${sanitizedEmail}`;
              await set(ref(db,dbpath),{
              Name: name,
              Email: email,
              ContactNumber: contactNumber,
              RollNumber: rollNumber,
              Section: section
        }
      )
      Toast.show("Account Created Successfully", {
        type: "success",
        placement: "top",
        duration: 2000,
        offset: 40,
        animationType: "slide-in",
      });
      props.navigation.navigate("Login");
    }
       catch(error) {
          console.error("Error writing user data",error);
          Toast.show("Error:" + error.message, {
            type: "warning",
            placement: "top",
            duration: 2000,
            offset: 40,
            animationType: "slide-in",
          });
        }
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
  else
  {
    Toast.show("Password and Confirm Password must be same", {
      type: "warning",
      placement: "top",
      duration: 2000,
      offset: 40,
      animationType: "slide-in",
    });
  }
  }

  return (
    <SafeAreaView>
    <ImageBackground
      style={styles.container}
      source={require("./assets/email.jpg")}
    >
      <View style={{ alignItems: "center", width: "130%", marginTop: "1%"}}>
        <Text
          style={{
            fontSize: 48,
            color: "white",
            fontWeight: "bold",
            marginTop: "1%",
          }}
        >
          Register
        </Text>
        <Text
          style={{
            fontSize: 19,
            color: "white",
            fontWeight: "bold",
            marginBottom: "1%",
          }}
        >
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: "100%",
            width: "100%",
            borderTopLeftRadius: 100,
            paddingTop: "5%",
            alignItems: "center",
          }}
        >
          {/* <Text style={ {fontSize: 40, color: {darkGreen}, fontWeight: 'bold', marginRight: 60 }}>Welcome Back</Text>

                    <Text style={{ color:'grey', fontSize: 20, fontWeight: 'bold', marginBottom: 20}}>Login to your account</Text> */}

          <TextInput style={styles.info} placeholder="Name" value={name} placeholderTextColor={darkGreen} autoCapitalize="none" onChangeText={(text) => setName(text)}/>
          <TextInput style={styles.info} placeholder="Email" keyboardType={"email-address"} value={email} placeholderTextColor={darkGreen} autoCapitalize="none" onChangeText={(text) => setEmail(text)}/>
          <View style={{marginRight: "50%",width: "30%"}}>
          <PhoneInput style={{}}  textInputProps={{placeholderTextColor: '#006a42',color:"#006a42",maxLength: 10}} textContainerStyle={{borderRadius: 100,backgroundColor: "rgb(220,220,220)",paddingVertical: "4%",paddingHorizontal: "5%",marginVertical: "1%"}}countryPickerButtonStyle={{backgroundColor: "rgb(220,220,220)",borderRadius: 100,width: "25%"}}placeholder="Contact Number" keyboardType={"number"} value={contactNumber}  autoCapitalize="none" defaultCode="IN" onChangeText={(Text) => setContactNumber(Text)}/>
          </View>
          <TextInput style={styles.info} placeholder="Roll Number" value={rollNumber} placeholderTextColor={darkGreen} autoCapitalize="none" onChangeText={(text) => setRollNumber(text)}/>
          {/* <Field placeholder="Branch"  /> */}
          <TextInput style={styles.info} placeholder="Section" value={section} placeholderTextColor={darkGreen} autoCapitalize="none" onChangeText={(text) => setSection(text)}/>

          <TextInput style={styles.info} placeholder="Password" secureTextEntry={true} value={password} placeholderTextColor={darkGreen} autoCapitalize="none" onChangeText={(text) => setPassword(text)}/>
          <TextInput style={styles.info} placeholder=" Confirm Password" secureTextEntry={true} value={confirmPassword} placeholderTextColor={darkGreen} autoCapitalize="none" onChangeText={(text) => setConfirmPassword(text)}/>
          
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginRight: "20%",
              paddingRight: "3%",
            }}
          >
            <Text style={{ color: "grey", fontSize: 16 }}>
              By signing in, you agree our
            </Text>
            <Text
              style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
            >
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginRight: "20%",
              paddingRight: "3%",
            }}
          >
            <Text style={{ color: "grey", fontSize: 16 }}>and {""} </Text>
            <Text
              style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
            >
              Privacy Policy
            </Text>
          </View>
          <View style={styles.but}>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="SignUp"
            Press={() => SignUpNow()}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text
                style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
              >
                Login
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
        width: "80%",
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
      width: "60%"
     },
     phone:{
     }
});

export default SignUp;
