import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');
import { lightTheme } from "../../config/colors";


const slides = [
  {
    id: '1',
    image: require('../../assets/images/onboarding/pana.png'),
    title: 'Stay Connected',
    subtitle: "We're here to help you stay connected no matter your location.",
  },
  {
    id: '2',
    image: require('../../assets/images/onboarding/Illustration.png'),
    title: 'Network Recommendations',
    subtitle: "With our app, you'll have access to real-time network recommendations, so you can always choose the best option for your location.",
  },

];

const Slide = ({item}) => {
  return (
    <View style={{alignItems: 'center', width, height:'75%', marginTop: 100}}>
      <Image
        source={item?.image}
        style={{height: 300, width: 310, resizeMode: 'contain'}}
      />
      <View style={{width: 390, alignItems:'center'}}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const WelcomeScreen = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
	else{
		navigation.navigate("Tab")
	}
  };

  const skip = () => {
    // const lastSlideIndex = slides.length - 1;
    // const offset = lastSlideIndex * width;
    // ref?.current.scrollToOffset({offset});
    // setCurrentSlideIndex(lastSlideIndex);
     navigation.replace('Tab')
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
		<View>
	    <View>

		</View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 25,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: lightTheme.primaryColor,
                  width: 24,
			
                },
              ]}
            />
          ))}
        </View>
		</View>

        {/* Render buttons */}
        <View style={{marginBottom: 20}}>
          {/* {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.replace('HomeScreen')}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : ( */}
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
		
                style={[
                  styles.btn,
                  {
                    borderWidth: 0,
                    backgroundColor: 'transparent',
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 15,
                    color:'#474747',
                  }}>
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontWeight:'400',
                    fontSize: 15,
					color:lightTheme.buttonTextColor
                  }}>
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: lightTheme.generalBackground}}>
      <StatusBar backgroundColor="#FFFFFF" />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
         contentContainerStyle={{height: height * 2}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
  	color: lightTheme.textColor,
    fontSize: 16,
    marginTop: 16,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
  },
  title: {
    color: lightTheme.textColor,
    fontSize: 22,
    fontWeight: '400',
    marginTop: 40,
    textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 4,
    width: 12,
    backgroundColor: lightTheme.secondaryColor,
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 40,
	width: 88,
    borderRadius: 5,
    backgroundColor: lightTheme.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default WelcomeScreen;