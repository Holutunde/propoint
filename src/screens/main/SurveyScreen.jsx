import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import Constants from 'expo-constants';
import NormalText from '../../components/Text';
import DropDownPicker from 'react-native-dropdown-picker';
import Residence from '../../components/Residence';
import Zone from '../../components/Zone';


const SurveyScreen = () => {
    const [selectedValue, setSelectedValue] = useState(null);
  return (
    <View style={styles.container}>
       <View style={styles.headerContainer}>
         <NormalText style={styles.headerText} >Inoder to improve the application efficiency, we would like you to fill the form and input the quality of network at your present location. Thank you</NormalText>
       </View>
       <View style={styles.formContainer}>
       
        <View style={{flexDirection:'row',width:300, marginTop:15, alignItems:'center'}}>
            <NormalText style={styles.formText}>
               State of Residence
            </NormalText>
            <Residence/>
          <View>

            <Residence/>
          </View>
        </View>
        <View style={{flexDirection:'row',width:300, marginTop:15, alignItems:'center'}}>
            <NormalText  style={styles.formText}>
            Geo-Pol Zone
            </NormalText>
            <Zone/>
        </View>
        <View style={{flexDirection:'row', marginTop:15}}>
            <NormalText style={styles.formText}>
            What SIM Do You Use
            </NormalText>
            <DropDownPicker
          items={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
        defaultValue={selectedValue}
        placeholder="Select an option"
        containerStyle={{ height: 20, width: 100}}
        onChangeItem={(item) => setSelectedValue(item.value)}
      />
        </View>
        <View style={{flexDirection:'row', marginTop:15}}>
            <NormalText>
            What Network Type is Your Sim?
*
            </NormalText>
            <DropDownPicker
          items={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
        defaultValue={selectedValue}
        placeholder="Select an option"
        containerStyle={{margingLeft:40, height: 20, width: 100}}
        onChangeItem={(item) => setSelectedValue(item.value)}
      />
        </View>
        <View style={{flexDirection:'row', marginTop:15}}>
            <NormalText>
            Do You Make Calls?

            </NormalText>
            <DropDownPicker
          items={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
        defaultValue={selectedValue}
        placeholder="Select an option"
        containerStyle={{ height: 20, width: 100}}
        onChangeItem={(item) => setSelectedValue(item.value)}
      />
        </View>
        <View style={{flexDirection:'row',marginTop:15}}>
            <NormalText>
            Do You Send Text Messages?
            </NormalText>
            <DropDownPicker
          items={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
        defaultValue={selectedValue}
        placeholder="Select an option"
        containerStyle={{ height: 20, width: 100}}
        onChangeItem={(item) => setSelectedValue(item.value)}
      />
        </View>
        <View style={{flexDirection:'row',marginTop:15}}>
            <NormalText>
            Do You Browse The Internet?

            </NormalText>
            <DropDownPicker
          items={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
        defaultValue={selectedValue}
        placeholder="Select an option"
        containerStyle={{ height: 20, width: 100}}
        onChangeItem={(item) => setSelectedValue(item.value)}
      />
        </View>
       </View>
    </View>
  )
}

export default SurveyScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
    headerContainer:{
        justifyContent:'center',
        maxWidth: '77%',
    },
    headerText:{
        alignItems:'center',
        fontSize: 15,
        fontWeight:'300'
    }, formContainer:{
        maxWidth: '77%'
    },
     formText:{
        fontSize: 14,
        marginRight: 20
     }
})