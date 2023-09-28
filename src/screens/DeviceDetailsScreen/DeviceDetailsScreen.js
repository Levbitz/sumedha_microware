import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DeviceDetailsScreen = ({route}) => {

  const {device} = route.params;

  console.log(device);
  alert(JSON.stringify(device));

  return (
    <View>
      <Text style={{
        textAlign:"center",
        marginVertical:20
      }}>DeviceDetailsScreen</Text>
    </View>
  )
}

export default DeviceDetailsScreen

const styles = StyleSheet.create({})
