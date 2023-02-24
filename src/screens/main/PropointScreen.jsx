import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { SearchBar } from 'react-native-elements';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;



const PropointScreen = () => {
  const [location, setLocation] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState(null);



  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const handleSearch = async () => {
    if (!searchText) {
      return;
    }

    let result = await Location.geocodeAsync(searchText);
    if (result.length > 0) {
     setSearchResult(result[0])
     console.log(searchText)
    } else {
      setSearchResult(null);
    }
    
  };


  return (
    <View style={styles.container}>
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
          {/* <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
           
          /> */}
          {searchResult && (
            <Marker
              coordinate={{
                latitude: searchResult.latitude,
                longitude: searchResult.longitude,
              }}
              //title={searchText}
            />
          )}
        </MapView>
      )}
      <SearchBar
        placeholder="Search Address"
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        inputStyle={styles.searchBarInput}
        platform="ios"
      />
    </View>
  );
}

export default PropointScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#F5FCFF',
  },
  map: {
    width: Dimensions.get('window').width,
    height:'60%',
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    margin: 0,
  },
  searchBarInputContainer: {
    backgroundColor: '#F5FCFF',
    height: 40,
  },
  searchBarInput: {
    fontSize: 14,
  },
  searchBarCancelButton: {
    height: 40,
  },
});
