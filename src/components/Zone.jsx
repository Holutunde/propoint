import React, {useState} from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native'
const { width } = Dimensions.get('window')
import {AntDesign, FontAwesome} from '@expo/vector-icons'

import SelectDropdown from 'react-native-select-dropdown'

const Zone = () => {
 const [name, setName] = useState(null)
  const Zones = [
    { title: 'South West' },
    { title: 'South East'},
    { title: 'South South'},
    { title: 'North Central' },
    { title: 'North West' },
    { title: 'North East'},
  ]

//   console.log(name.title)
  return (
    <SafeAreaView style={styles.saveAreaViewContainer}>
      <View style={styles.viewContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <SelectDropdown
            search
            searchInputTxtColor="#474747"
            searchPlaceholder={'Search...'}
            searchInputStyle={styles.searchInput}
            renderSearchInputLeftIcon={() => {
                return <AntDesign name="search1" size={14} color="black"/>;
              }}
            data={Zones}
            //defaultValueByIndex={0}
            onSelect={(selectedItem, index) => {
                setName(selectedItem)
            }}
            buttonStyle={styles.dropdowncontainer}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                <View style={styles.languagecontent}>
                  <View style={styles.leftcontent}>
                    <Text style={styles.languageText}>
                      {selectedItem ? selectedItem.title : 'place of residence'}
                    </Text>
                  </View>
                  <FontAwesome name="chevron-up" color={'#01AB92'} size={12} />
                </View>
              )
            }}
            dropdownStyle={styles.dropdownStyle}
            rowStyle={styles.dropdownRowStyle}
            renderCustomizedRowChild={(item, index) => {
              return (
                <View style={styles.dropdownRowChildStyle}>
                  <Text style={styles.dropdownRowTxt}>{item.title}</Text>
                </View>
              )
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Zone

const styles = StyleSheet.create({
  saveAreaViewContainer: {},
  viewContainer: { width },
  scrollViewContainer: {
    flexGrow: 1,
  },
  searchInput: {
    backgroundColor: '#ffffff',
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#454545'
  },
  dropdowncontainer: {
    width: '40%',
    height: 30,
    borderWidth: 1,
    borderRadius: 3,
    borderColor:'#01AB92',
    backgroundColor:'#ffffff'
  },
  languagecontent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 1,
  },
  leftcontent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  languageImage: {
    width: 24,
    height: 24,
  },
  languageText: {
    color: '#474747',
    textAlign: 'center',
    fontSize: 10,
  },
  dropdownStyle: {
    borderWidth: 1,
    borderColor:'#01AB92',
    borderRadius: 3,
    backgroundColor: '#ffffff',
  },
  dropdownRowStyle: {
    backgroundColor: '#ffffff',
    height: 30,
  },
  dropdownRowChildStyle: {
    alignItems: 'center',
    justifyContent:'center',
    paddingHorizontal: 18,
    backgroundColor:'#4747474'
  },
  dropdownRowTxt: {
    color: '#474747',
    textAlign: 'center',
    fontSize: 10
  },
})
