import { View, Text, ScrollView,StyleSheet,TouchableOpacity,Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { Divider } from '@rneui/themed'

export default function ContactUs() {
    const navigation = useNavigation();
    return(
        <View>
            <SafeAreaView style={{}} >
            <View style={styles.box1}>
            <TouchableOpacity
            style={{
              borderColor: "white",
              marginLeft: "2%",
              marginTop: "8%",
              borderRadius: 100
            }}
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon style={{ color: "black", marginLeft: "5%" }} />
          </TouchableOpacity>
            <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize:28, marginVertical: "6%",marginHorizontal: "15%"}}>CONTACT US</Text>
            </View>
            <Divider orientation='horizontal' color='black' style={{marginBottom: "5%"}}/>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
            <View>
                <Image style={{height: 100, width: 100, borderRadius: 100, marginLeft: "35%", marginTop: "5%"}} source={require('./assets/call.jpg')} />
                <Text style={{color: 'green',textAlign: 'center', fontWeight: 'bold', fontSize: 30, marginVertical: "5%"}} >Phone</Text>
                <Text style={{color: 'green',textAlign: 'center',  fontSize: 18}} > 0141-2770232</Text>
                <Text style={{textAlign: 'center', fontSize: 18, color: 'green'}} >9982682473</Text>
            </View>
            <Divider orientation='horizontal' color='black' style={{marginVertical: "5%"}}/>
            <View>
                <Image  style={{height: 100, width: 100, borderRadius: 100, marginLeft: "35%", marginTop: "5%"}} source={require('./assets/email11.jpg')} />
                <Text style={{color: 'green',textAlign: 'center', fontWeight: 'bold', fontSize: 23, marginVertical: "5%"}}>Email</Text>
                <Text style={{textAlign: 'center',fontSize: 18, color: 'green'}}>info@jecrcmail.com</Text>
            </View>
            <Divider orientation='horizontal' color='black' style={{marginVertical: "5%"}}/>
            <View>
                <Image  style={{height: 100, width: 100, borderRadius: 100, marginLeft: "35%", marginTop: "5%"}} source={require('./assets/add.png')} />
                <Text style={{color: 'green',textAlign: 'center', fontWeight: 'bold', fontSize: 23, marginVertical: "5%"}}>Address</Text>
                <Text style={{color: 'green',textAlign: 'center',fontSize: 18}}>JECRC Campus</Text>
                <Text style={{textAlign: 'center',fontSize: 18, color: 'green', marginBottom: 5}}>Shri Ram Ki Nangal, via Sitapura RIICO Tonk Road, </Text>
                <Text style={{textAlign: 'center',fontSize: 18, color: 'green', marginBottom: 35}}>Jaipur-302022</Text>
            </View>
            </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    box1: {
        flexDirection: "row",
    },
    scroll: {
        marginBottom: "60%",
        marginHorizontal: "2%"
    }
})