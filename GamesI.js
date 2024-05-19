import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { Divider } from '@rneui/themed'

export default function GamesI(props) {
  let item = props.route.params
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.conatainer}>
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
            marginHorizontal: '25%'
          }}
        >
          {item.listname}
        </Text>
      </View>
      <Divider
        orientation="horizontal"
        color="black"
        style={{ marginBottom: '5%' }}
      />
        <Image
          style={{ height: '25%', width: '100%', borderRadius: 20 }}
          source={require('./assets/2.jpg')}
        />
        <Divider
        orientation="horizontal"
        color="black"
        style={{ marginVertical: "5%" }}
      />
        <ScrollView showsVerticalScrollIndicator={true} style={styles.scroll}>
        <View style={{marginHorizontal: "2%"}}>
        <Text
          style={{ fontWeight: 'bold', fontSize: 20, marginVertical: '2%',marginHorizontal: "1%" }}
        >
          Description:{' '}
        </Text>
        <Text style={{ padding: '2%',marginVertical: "1%" }}>{item.description} </Text>
        <Divider
        orientation="horizontal"
        color="black"
        style={{ marginVertical: '5%' }}
      />
        <View style={{ flexDirection: 'row',marginVertical: "2%"}}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Timing: </Text>
          <Text style={{ marginLeft: '25%' }}>{item.timing} </Text>
        </View>

        <View style={{ flexDirection: 'row',marginVertical: "2%"}}>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Venue: </Text>
          <Text style={{ marginLeft: '26%' }}>{item.venue} </Text>
        </View>

        <View style={{ flexDirection: 'row',marginVertical: "2%"}}>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Slots Left:</Text>
          <Text style={{ marginLeft: '21%' }}>{item.SlotsLeft} </Text>
        </View>
        <View style={{marginBottom: "2%"}}>
          <View style={{ flexDirection: 'row',marginTop: "2%" }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Prizes: </Text>
            <Text style={{ marginLeft: '26%' }}>1st Winner: {item.prize1}</Text>
          </View>
          <Text style={{ marginLeft: '41%' }}>2nd Winner: {item.prize2} </Text>
          <Text style={{ marginLeft: '41%' }}>3rd Winner: {item.prize3}</Text>
        </View>
        <View style={{ flexDirection: 'row'}}>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
            Co-ordinators:{' '}
          </Text>
          <Text style={{ marginLeft: '10%' }}>{item.coordinators}</Text>
        </View>
        <Divider
        orientation="horizontal"
        color="black"
        style={{ marginVertical: '5%' }}
      />
        <View style={{marginVertical: "2%"}}>
          <Text
            style={{ fontWeight: 'bold', fontSize: 20, marginVertical: '1%',marginHorizontal: "1%" }}
          >
            Guidelines:{' '}
          </Text>
          <Text style={{ padding: "2%" }}>{item.Guidelines}</Text>
        </View>
        
        </View>
        </ScrollView>
        <Divider
        orientation="horizontal"
        color="black"
        style={{ marginVertical: '5%',marginHorizontal: "2%" }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  conatainer: {
    flex: 1
  },
  box1: {
    flexDirection: 'row'
  },
  scroll: {
    marginHorizontal: '2%',
    marginBottom: "2%"
  },
  but: {
    backgroundColor: '#006a42',
    padding: '4%',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    marginHorizontal: '20%',
    borderRadius: 100,
    marginBottom: "5%"
  },
  butText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }
})
