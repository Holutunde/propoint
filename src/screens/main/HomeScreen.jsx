import React, {useState, useEffect} from 'react';
//import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const HomeScreen = () => {
//   const [location, setLocation] = useState({
//     latitude: 0,
//     longitude: 0,
//   });

//   useEffect(() => {
//     Geolocation.getCurrentPosition(
//       position => {
//         setLocation({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       },
//       error => console.log(error),
//       {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
//     );
//   }, []);

  return (
    // <MapView
    //   style={{flex: 1}}
    //   region={{
    //     latitude: location.latitude,
    //     longitude: location.longitude,
    //     latitudeDelta: 0.0922,
    //     longitudeDelta: 0.0421,
    //   }}
    // />
    <></>
  )
};

export default HomeScreen;