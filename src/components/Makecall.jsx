import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

const makeCall = () => {
  const [value, setValue] = useState(null);

  const items = [
    { label: 'Yes', value: 1 },
    { label: 'No', value: 0 },
  ];

  console.log(value)
  return (
    <View>
      <RadioForm formHorizontal={true} animation={true}>
        {items.map((obj, index) => (
          <RadioButton labelHorizontal={true} key={index}>
            <RadioButtonInput
              obj={obj}
              index={index}
              isSelected={value === obj.value}
              onPress={() => setValue(obj.value)}
              borderWidth={2}
              buttonInnerColor={'#01AB92'}
              buttonOuterColor={'#01AB92'}
              buttonSize={13}
              buttonOuterSize={20}
              buttonStyle={{}}
              buttonWrapStyle={{ marginLeft: 10 }}
            />
            <RadioButtonLabel
              obj={obj}
              index={index}
              labelHorizontal={true}
              onPress={() => setValue(obj.value)}
              labelStyle={{ fontSize: 14 }}
            />
          </RadioButton>
        ))}
      </RadioForm>
    </View>
  );
};

export default makeCall;

const styles = StyleSheet.create({})