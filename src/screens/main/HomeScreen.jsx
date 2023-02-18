import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView,{ Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import Input from '../../components/input';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons'; 
import NormalText from '../../components/Text'


const Homescreen =()=> {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [map, setMap]= useState(null)

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);

      let address = await Location.reverseGeocodeAsync({
        latitude: coords.latitude,
        longitude: coords.longitude
      });
      setAddress(address[0]);
    })();
  }, []);

  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = `Latitude: ${location.latitude}, Longitude: ${location.longitude}`;
  // }
 console.log(address)
  return (
    <View style={styles.container}>
      <View  style={styles.input}>
        <Input
         placeholder="
         Search a location"
        />
      </View>
      <View style={styles.currentLocation}>
         <View style={styles.iconspace}>
         <Ionicons name="location-outline" size={22} color="black" />
         </View>
         <View style={styles.location}>
          <NormalText  style={{ fontSize: 14, paddingTop: 5, paddingBottom: 10 }}>
             Your location
          </NormalText>
          {address && (
         <NormalText style={styles.address}>
         {address.streetNumber} {address.street}, {address.city}, {address.region}, {address.country}
        </NormalText>
        )}
    
         </View>
      </View>
  
   
      <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 5.14804,
            longitude:  7.29546,
            latitudeDelta: 10.5,
            longitudeDelta: 12.4
          }}
        >
        <Marker coordinate={location} title={address} />
        </MapView>

      </View>
  
  );
}

export default Homescreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
      
  },
  
  address: {
    fontSize: 14,
    textAlign: 'center',
    color: "#6C6C6C",
  },
  map: {
    width: '100%',
    height: '60%',
  },
  currentLocation:{
    flexDirection:'row',
    width: 358,
    height: 63,
    backgroundColor:'#F6F8F2',
    alignItems:'center',
    paddingLeft:10,
    marginVertical:10
  },
  location:{
    paddingLeft:10
  }
});