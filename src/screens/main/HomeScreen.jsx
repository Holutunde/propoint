import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView,{ Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Input from '../../components/input';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons'; 
import NormalText from '../../components/Text'

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


const HomeScreen = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);


console.log(address)
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);


      let address = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      });
      setAddress(address[0]);
    })();
  }, []);

 

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
      {location && (
        <MapView
          style={styles.map}
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
          
            />
        
        </MapView>
      )}
    
    </View>
  );
}

export default HomeScreen

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
    height: '70%',
  },
  currentLocation:{
    flexDirection:'row',
    width: 358,
    height: 63,
    backgroundColor:'#F6F8F2',
    alignItems:'center',
    paddingLeft:10,
    marginVertical:15
 },
  location:{
    paddingLeft:10
  }
});
