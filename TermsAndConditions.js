import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity
  } from 'react-native'
  import { SafeAreaView } from 'react-native-safe-area-context'
  import React from 'react'
  import { ChevronLeftIcon } from 'react-native-heroicons/solid'
  import { useNavigation } from '@react-navigation/native'
  import { Divider } from '@rneui/themed'
  
  export default function TermsAndConditions() {
    const navigation = useNavigation()
    return (
      <View>
        <SafeAreaView style={{ margin: 6 }}>
          <View style={styles.box1}>
            <TouchableOpacity
              style={{
                borderColor: 'white',
                marginLeft: '2%',
                marginTop: '8%',
                borderRadius: 100
              }}
              onPress={() => navigation.goBack()}
            >
              <ChevronLeftIcon style={{ color: 'black', marginLeft: '5%' }} />
            </TouchableOpacity>
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 28,
                marginVertical: '5%',
                marginHorizontal: '0%'
              }}
            >
              Terms And Conditions
            </Text>
          </View>
          <Divider
            orientation="horizontal"
            color="black"
            style={{ marginBottom: '5%' }}
          />
          <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
            <View style={{ marginBottom: '2%' }}>
              <Text style={{ fontWeight: 'bold', backgroundColor: '#b2bea4' }}>
                {' '}
                1.  Acceptance of Terms and Conditions:
              </Text>
              <Text>
              By downloading, installing, or using RenConnect, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please do not use the app.
              </Text>
            </View>
            <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: '5%' }}
          />
            <View style={{ marginBottom: '2%' }}>
              <Text style={{ fontWeight: 'bold', backgroundColor: '#b2bea4' }}>
                {' '}
                2.  Use of the App:{' '}
              </Text>
              <Text>
              2.1. The RenConnect is intended for use during the Renaissance event. {'\n'}
              2.2. You must be a registered participant or attendee of the Renaissance event to use this app.
              </Text>
            </View>
            <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: '5%' }}
          />
            <View style={{ marginBottom: '2%' }}>
              <Text style={{ fontWeight: 'bold', backgroundColor: '#b2bea4' }}>
                {' '}
                3.  Privacy Policy:{' '}
              </Text>
              <Text>
                Your Personal data is our responsibility,It will only be used for smooth conduction of Renaissance.
              </Text>
            </View>
            <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: '5%' }}
          />
            <View style={{ marginBottom: '2%' }}>
              <Text style={{ fontWeight: 'bold', backgroundColor: '#b2bea4' }}>
                {' '}
                4.  Account Registration:{' '}
              </Text>
              <Text>
              4.1. To use certain features of the app, you may be required to register for an account.  {'\n'}
              4.2. You agree to provide accurate and complete information during the registration process.  {'\n'} 
              4.3. You are responsible for maintaining the confidentiality of your account login credentials
              </Text>
            </View>
            <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: '5%' }}
          />
            <View style={{ marginBottom: '2%' }}>
              <Text style={{ fontWeight: 'bold', backgroundColor: '#b2bea4' }}>
                {' '}
                5. User Conduct:
              </Text>
              <Text>
                5.1. You agree to use the app in compliance with all applicable local, state, and federal laws.  {'\n'}
                5.2. You will not use the app to engage in any unlawful, harmful, or disruptive activities
              </Text>
            </View>
            <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: '5%' }}
          />
            <View style={{ marginBottom: '2%' }}>
              <Text style={{ fontWeight: 'bold', backgroundColor: '#b2bea4' }}>
                {' '}
                6. Content and Information:{' '}
              </Text>
              <Text>
                6.1. The app may display content and information related to the [College Fest Name] event, including schedules, maps, and announcements.  {'\n'}
                6.2. While we strive to provide accurate information, we are not responsible for any inaccuracies or changes in the event schedule or content.
              </Text>
            </View>
            <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: '5%' }}
          />
            <View style={{ marginBottom: '2%' }}>
              <Text style={{ fontWeight: 'bold', backgroundColor: '#b2bea4' }}>
                {' '}
                7. Updates and Changes:
              </Text>
              <Text>
                7.1. We may update or change the app, including its features and content, at any time without notice.
              </Text>
            </View>
            <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: '5%' }}
          />
            <View style={{ marginBottom: '2%' }}>
              <Text style={{ fontWeight: 'bold', backgroundColor: '#b2bea4' }}>
                {' '}
                8. Termination of Use:{' '}
              </Text>
              <Text>
                8.1. We reserve the right to terminate or suspend your access to the app at our discretion, without prior notice, for any reason, including if you violate these terms and conditions.
              </Text>
            </View>
            <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: '5%' }}
          />
            <View style={{ marginBottom: '2%' }}>
              <Text style={{ fontWeight: 'bold', backgroundColor: '#b2bea4' }}>
                {' '}
                9. Intellectual Property:
              </Text>
              <Text>
               9.1. All content and materials provided through the app are protected by copyright and other intellectual property laws.  {'\n'}
               9.2. You may not reproduce, distribute, or modify any content from the app without our written permission
              </Text>
            </View>
            <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: '5%' }}
          />
            <View style={{ marginBottom: '2%' }}>
              <Text style={{ fontWeight: 'bold', backgroundColor: '#b2bea4' }}>
                {' '}
                10. Disclaimers:{' '}
              </Text>
              <Text>
                10.1. The app is provided "as is" without warranties of any kind, express or implied.  {'\n'}
                10.2. We do not guarantee that the app will be error-free or uninterrupted.
              </Text>
            </View>
            <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: '5%' }}
          />
            <View style={{ marginBottom: '2%' }}>
              <Text style={{ fontWeight: 'bold', backgroundColor: '#b2bea4' }}>
                {' '}
                11. Limitation of Liability:{' '}
              </Text>
              <Text>
                11.1. We shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of the app
              </Text>
            </View>
            <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: '5%' }}
          />
            <View style={{ marginBottom: '2%' }}>
              <Text style={{ fontWeight: 'bold', backgroundColor: '#b2bea4' }}>
                {' '}
                12. Governing Law:{' '}
              </Text>
              <Text>
                12.1. These terms and conditions shall be governed by and construed in accordance with the laws of JECRC Foundation Management.
              </Text>
            </View>
            <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: '5%' }}
          />
            <View style={{ marginBottom: '2%' }}>
              <Text style={{ fontWeight: 'bold', backgroundColor: '#b2bea4' }}>
                {' '}
                13. Changes to Terms and Conditions:{' '}
              </Text>
              <Text>
                13.1. We reserve the right to modify or update these terms and conditions at any time. Any changes will be posted within the app, and it is your responsibility to review them periodically.
              </Text>
            </View>
            <Divider
            orientation="horizontal"
            color="black"
            style={{ marginVertical: '5%' }}
          />
          </ScrollView>
        </SafeAreaView>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    box1: {
      flexDirection: 'row'
    },
    scroll: {
      marginBottom: '50%',
      marginLeft: '2%'
    }
  })
  