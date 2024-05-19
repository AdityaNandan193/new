import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StripeProvider } from '@stripe/stripe-react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PaymentScreen from './src/PaymentScreen';
import {SP_KEY} from "@env";

export default function App() {
  return (
    <SafeAreaProvider>
      <StripeProvider
        publishableKey={SP_KEY}
        merchantIdentifier="merchant.identifier" // required for Apple Pay
        urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      >
        <View style={styles.container}>
          <PaymentScreen />
        </View>
      </StripeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
