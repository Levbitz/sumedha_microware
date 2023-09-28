import 'react-native-gesture-handler';

import React, { useState ,useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs();

import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DeviceModal from "./DeviceConnectionModal";
import { PulseIndicator } from "./PulseIndicator";
import useBLE from "./useBLE";


import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  const {
    requestPermissions,
    scanForPeripherals,
    allDevices,
    connectToDevice,
    connectedDevice,
    heartRate,
    disconnectFromDevice,
  } = useBLE();


  //alert(JSON.stringify(connectedDevice));
  console.log(connectedDevice);
  const [isModalVisible, setIsModalVisible] = useState(false);


  

  const scanForDevices = async () => {
    const isPermissionsEnabled = await requestPermissions();
    if (isPermissionsEnabled) {
      console.log('enabled');
      scanForPeripherals();
    }else{
      console.log('disabled');
    
    }
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const openModal = async () => {
    scanForDevices();
    setIsModalVisible(true);
  };

  //console.log(allDevices);


  // useEffect(() => {
  //   scanForDevices();
  //   setIsModalVisible(true);
  // }, []);
alert(JSON.stringify(connectedDevice))
  return (

    <NavigationContainer>
  
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  
  </Stack.Navigator>

      </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  heartRateTitleWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heartRateTitleText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 20,
    color: "black",
  },
  heartRateText: {
    fontSize: 20,
    marginTop: 15,
    paddingHorizontal:10
  },
  ctaButton: {
    backgroundColor: "#FF6060",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default App;






// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';
// import BluetoothService from './bluetoothservice';


// function App() {
//   const [weightData, setWeightData] = useState(null);


//   const handleReadWeight = async () => {
//     const deviceId = 'YOUR_DEVICE_ID'; // Replace with your device ID
//     const serviceUUID = 'YOUR_SERVICE_UUID'; // Replace with your service UUID
//     const characteristicUUID = 'YOUR_CHARACTERISTIC_UUID'; // Replace with your characteristic UUID

//     try {
//       const data = await BluetoothService.readCharacteristic(deviceId, serviceUUID, characteristicUUID);
//       setWeightData(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       {weightData && <Text>Weight: {weightData}</Text>}
//       <Button title="Read Weight" onPress={handleReadWeight} />
//     </View>
//   );
// }

// export default App;








//  {/* <SafeAreaView style={styles.container}>
//       <View style={styles.heartRateTitleWrapper}>
//         {connectedDevice ? (
//           <>
//             <PulseIndicator />

//             <Text style={styles.heartRateTitleText}>Your Measurement Is:</Text>
//             <Text style={styles.heartRateText}>{/*heartRate*/} </Text>
//             <Text style={styles.heartRateText}>
//               {connectedDevice.name}
//             </Text>
//             <Pressable
//             onPress={hideModal}
//             >
//             <Text>Close Modal</Text>
//             </Pressable>
//           </>
//         ) : (
//           <>
//           {/*<Text style={styles.heartRateTitleText}>
//             Please Connect to a Heart Rate Monitor
//         </Text>*/}
//           <Text style={styles.heartRateTitleText}>
//             Scan Available Devices 
//           </Text>
//           <Text style={styles.heartRateText}>
//             Please make Sure the bluetooth device is powered on
//           </Text>
//           </>
          
//         )}
//       </View>
//       <TouchableOpacity
//         onPress={connectedDevice ? disconnectFromDevice : openModal}
//         style={styles.ctaButton}
//       >
//         <Text style={styles.ctaButtonText}>
//           {connectedDevice ? "Disconnect" : "Scan"}
//         </Text>
//       </TouchableOpacity>
//       <DeviceModal
//         closeModal={hideModal}
//         visible={isModalVisible}
//         connectToPeripheral={connectToDevice}
//         devices={allDevices}
//       />
//       </SafeAreaView>*/}
