import { View, Text, ScrollView,StyleSheet,TouchableOpacity,Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { Divider } from '@rneui/themed'

export default function Gallery() {
    const navigation = useNavigation();
    return(
            <SafeAreaView style={styles.container}>
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
            <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize:28, marginVertical: "6%",marginHorizontal: "20%"}}>GALLERY</Text>
            </View>
            <Divider orientation='horizontal' color='black' style={{marginBottom: "5%"}}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scroll}
            >
                <Text style={{fontWeight: 'bold', fontSize: 22, textAlign: 'center'}} >Event</Text>
                <Image style={{height: 200, width: "100%", marginVertical: "2%", borderRadius: 30}} source={require('./assets/jecrc.png')} />
                <Divider orientation='horizontal' color='black' style={{marginVertical: "5%"}}/>

                <Text style={{fontWeight: 'bold', fontSize: 22, textAlign: 'center'}} >Event</Text>   
                <Image style={{height: 200, width: "100%", marginVertical: "2%", borderRadius: 30}} source={require('./assets/jecrc.png')} />
                <Divider orientation='horizontal' color='black' style={{marginVertical: "5%"}}/>

                <Text style={{fontWeight: 'bold', fontSize: 22, textAlign: 'center'}} >Event</Text>
                <Image style={{height: 200, width: "100%", marginVertical: "2%", borderRadius: 30}} source={require('./assets/jecrc.png')} />

                <Divider orientation='horizontal' color='black' style={{marginVertical: "5%"}}/>
                <Text style={{fontWeight: 'bold', fontSize: 22, textAlign: 'center'}} >Event</Text>
                <Image style={{height: 200, width: "100%", marginVertical: "2%", borderRadius: 30}} source={require('./assets/jecrc.png')} />
                <Divider orientation='horizontal' color='black' style={{marginVertical: "5%"}}/>

                <Text style={{fontWeight: 'bold', fontSize: 22, textAlign: 'center'}} >Event</Text>
                <Image style={{height: 200, width: "100%", marginVertical: "2%", borderRadius: 30}} source={require('./assets/jecrc.png')} />
                <Divider orientation='horizontal' color='black' style={{marginVertical: "5%"}}/>
                
                <Text style={{fontWeight: 'bold', fontSize: 22, textAlign: 'center'}} >Event</Text>
                <Image style={{height: 200, width: "100%", marginVertical: "2%", borderRadius: 30}} source={require('./assets/jecrc.png')} />

            </ScrollView>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1
    },
    box1: {
        flexDirection: "row",
    },
    scroll: {
        marginBottom: "5%",
        marginHorizontal: "2%"
    }
})
  