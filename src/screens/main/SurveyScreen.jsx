import { StyleSheet, Text, View, TouchableWithoutFeedback, KeyboardAvoidingView, SafeAreaView, ScrollView , Keyboard} from 'react-native'
import React, { useState } from 'react'
import Constants from 'expo-constants';
import NormalText from '../../components/Text';
import Residence from '../../components/Residence';
import Zone from '../../components/Zone';
import Simtype from '../../components/Simtype';
import Networktype from '../../components/Networktype';
import Makecall from '../../components/Makecall';
import SendText from '../../components/SendText';
import Browse from '../../components/Browse';
import Input from '../../components/input';


const SurveyScreen = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
      <View style={styles.headerContainer}>
        <NormalText style={styles.headerText} >Kindly input the quality of network at your present location. Thank you</NormalText>
      </View>
       <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
           <ScrollView
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
      <View style={styles.formContainer}>
        <View style={styles.formSpace}>
          <NormalText style={styles.formText}>
            State of Residence
          </NormalText>
          <View>
             <Residence />
          </View>

        </View>
        <View style={styles.formSpace}>
          <NormalText style={styles.formText}>
            Geo-Pol Zone
          </NormalText>
          <Zone />
        </View>
        <View style={styles.formSpace}>
          <NormalText style={styles.formText}>
            What SIM Do You Use
          </NormalText>
          <Simtype />
        </View>
        <View style={styles.formSpace}>
          <NormalText style={styles.formText}>
            Your Network Type
          </NormalText>
          <Networktype />
        </View>
        <View style={styles.formSpace}>
          <NormalText style={styles.formText}>
            Do You Make Calls?
          </NormalText>
          <Makecall />
        </View>
        <View style={styles.formSpace}>
          <NormalText style={styles.formText}>
            Do You Send Text Messages?
          </NormalText>
         <SendText/>
        </View>
        <View style={styles.formSpace}>
          <NormalText style={styles.formText}>
            Do You Browse The Internet?
          </NormalText>
         <Browse/>
        </View>
        <View style={styles.formSpace}>
          <NormalText style={styles.formText}>
             Your network strength
          </NormalText>
         <Browse/>
        </View>
        <View style={styles.formSpace}>
          <NormalText style={styles.formText}>
            Quality of service experience
          </NormalText>
         <Browse/>
        </View>
        <View style={styles.formSpace}>
          <NormalText style={styles.formText}>
            Do You Browse The Internet?
          </NormalText>
         <Browse/>
        </View>
        <View style={styles.commentSpace}>
          <NormalText style={styles.formText}>
            Kindly Give a Quick Comment On This SIM's Quality of Service
          </NormalText>
          <Input coverStyle={{maxWidth: '100%', marginTop:5, height: 50, multiline: true, padding: 0, color:'black'}}  placeholder='Please Do Express Yourself Clearly'/>
        </View>
      </View>
       </ScrollView>
          </TouchableWithoutFeedback>
       </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SurveyScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  headerContainer: {
    justifyContent: 'center',
  },
  headerText: {
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '400',
    textAlign:'center'
  }, 
  formContainer: {
    maxWidth: '100%',
  },
  formText: {
    fontSize: 14,
  },
  formSpace: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent:'space-between',
    paddingHorizontal: 40
  },
  commentSpace:{
    flexDirection:'column',
    paddingHorizontal: 50,
    marginTop:20
  }
})