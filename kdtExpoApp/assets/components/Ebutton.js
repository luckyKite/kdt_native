import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Ebutton = ({ title, onPress }) => {

  const style = StyleSheet.create({
    myBtn:{
      backgroundColor: '#222',
      width: 200,
      height: 50,
      borderRadious: 30,
    },

    myBtnTitle: {
      padding: 10,
      color: '#fff',
      textAlign: 'center',
      fontSize: 20,
    }
  });

  return (
    <View style={style.myBtn}>
      <Text
        onPress={onPress}
        style={style.myBtnTitle}
      >{title.toUpperCase()}</Text>
    </View>
  );
}

export default Ebutton;