import React, {Component, useState} from 'react';
import { View, StyleSheet,Text, TouchableOpacity } from 'react-native';
import { CardField , createToken , confirmPayment } from '@stripe/stripe-react-native';
import ButtonComp from './components/ButtonComp';
import creatPaymentIntent from './apis/StripeApis';
import { FIREBASE_DB , FIREBASE_AUTH } from '../FirebaseConfig';
import { ref, update } from 'firebase/database'; // Import the update function from Firebase
import { SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context';
import { useToast } from 'react-native-toast-notifications';
import { useNavigation } from '@react-navigation/native';


const PaymentScreen = () => {
    const [cardInfo , setCardInfo] = useState(null);
    const Toast = useToast();
    const navigation = useNavigation();
    const fetchCardDetail = (cardDetail) => {
        // console.log("my card details" , cardDetail)
        if(cardDetail.complete){
            setCardInfo(cardDetail)
        }else{
            setCardInfo(null)
        }
    }

    const updatePaymentStatusInDatabase = async () => {
      const user = FIREBASE_AUTH.currentUser;
      if (user) {
        const sanitizedEmail = user.email.replace(/[^a-zA-Z0-9]/g, '_');
        const dbpath = `users/${sanitizedEmail}`;
  
        try {
          // Update the user's payment status in the database
          await update(ref(FIREBASE_DB, dbpath), {
            hasPaid: true, // Set the payment status to true if payment is successful
          });
          console.log('Payment status updated in the database.');
        } catch (error) {
          console.error('Error updating payment status in the database:', error);
        }
      }
    };

    const onDone = async () => {
      

        let apiData = {
            amount: 50000,
            currency: "INR"
        };

     


        try {
            const res = await creatPaymentIntent(apiData)
            console.log("payment intent create succesfully...!!!", res)

            if (res?.data?.paymentIntent) {
                let confirmPaymentIntent = await confirmPayment(res?.data?.paymentIntent, { paymentMethodType: 'Card' })
                console.log("confirmPaymentIntent res++++", confirmPaymentIntent)
                Toast.show("Payment Successful", {
                  type: "success",
                  placement: "top",
                  duration: 5000,
                  offset: 40,
                  animationType: "slide-in",
                })
          
              // Update the user's payment status in the database
              updatePaymentStatusInDatabase();
              }
           
        } catch (error) {
            console.log("Error rasied during payment intent", error)
        }


    //     console.log("cardInfo", cardInfo);
    //     if (!cardInfo) {
    //       try {
    //         console.log("Creating token...");
    //         const resToken = await createToken({
    //           card: {
    //             number: cardInfo.number,
    //             expMonth: cardInfo.expMonth,
    //             expYear: cardInfo.expYear,
    //             cvc: cardInfo.cvc,
    //           },
    //         });
    //         console.log("resToken", resToken);
    //       } catch (error) {
    //         alert("Error raised during create Token");
    //       }
    //     }
    };
      
return (
    <SafeAreaView style={styles.container}>
     <View style={{marginTop: "10%",marginLeft: "10%",marginBottom: "2%"}}>
        <Text style={{fontSize: 36,color: "white",fontWeight: "600"}}>Make a Secure</Text>
        <Text style={{fontSize: 42,color: "white",fontWeight: "bold"}}>Payment here</Text>
        <Text style={{fontSize: 36,color: "white",fontWeight: "bold"}}>And</Text>
        <Text style={{fontSize: 36,color: "white",fontWeight: "bold"}}>Register in </Text>
        <Text style={{fontSize: 36,color: "white",fontWeight: "bold"}}>Events</Text>
      </View>
    <View style={{ justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    }}>   
      <CardField
        postalCodeEnabled={false}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: 'white',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginTop: "20%",
          marginBottom: "10%"
        }}
        onCardChange={(cardDetails) => {
          fetchCardDetail(cardDetails)
        }}
        onFocus={(focusedField) => {
          console.log('focusField', focusedField);
        }}
      />
      <ButtonComp 
      onPress={onDone}
      disabled =  {!cardInfo}
      />
      <TouchableOpacity onPress={ () => navigation.goBack()} style={{backgroundColor: "white",width: "40%",borderRadius: 8,justifyContent: "center",alignItems: "center",marginVertical: "5%",padding: "2%"}}>
        <Text style={{color: "#006a42",fontSize: 20,fontWeight: "bold",alignSelf: "center"}}>Go to</Text>
        <Text style={{color: "#006a42",fontSize: 20,fontWeight: "bold",alignSelf: "center"}}>Home Screen</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#006a42"
  },
});

export default PaymentScreen;
