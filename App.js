import React, { useState } from "react";
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heartRateTitleWrapper}>
        {connectedDevice ? (
          <>
            <PulseIndicator />

<<<<<<< HEAD
            <Text style={styles.heartRateTitleText}>Your Heart Rate Is:</Text>
            <Text style={styles.heartRateText}>{heartRate} bpm</Text>
=======
            <Text style={styles.heartRateTitleText}>Your Measurement Is:</Text>
            <Text style={styles.heartRateText}>{heartRate} </Text>
>>>>>>> 8a0ab99ab21ebb478e9cfe6731c9582adee58cda
            <Text style={styles.heartRateText}>
              {connectedDevice.name}
            </Text>
            <Pressable
            onPress={hideModal}
            >
            <Text>Close Modal</Text>
            </Pressable>
          </>
        ) : (
          <>
          {/*<Text style={styles.heartRateTitleText}>
            Please Connect to a Heart Rate Monitor
        </Text>*/}
          <Text style={styles.heartRateTitleText}>
<<<<<<< HEAD
            Scan Available Devi
=======
            Scan Available Devices
>>>>>>> 8a0ab99ab21ebb478e9cfe6731c9582adee58cda
          </Text>
          </>
          
        )}
      </View>
      <TouchableOpacity
        onPress={connectedDevice ? disconnectFromDevice : openModal}
        style={styles.ctaButton}
      >
        <Text style={styles.ctaButtonText}>
          {connectedDevice ? "Disconnect" : "Connect"}
        </Text>
      </TouchableOpacity>
      <DeviceModal
        closeModal={hideModal}
        visible={isModalVisible}
        connectToPeripheral={connectToDevice}
        devices={allDevices}
      />
    </SafeAreaView>
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
    fontSize: 25,
    marginTop: 15,
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
<<<<<<< HEAD
=======

export default App;
>>>>>>> 8a0ab99ab21ebb478e9cfe6731c9582adee58cda

export default App;





<<<<<<< HEAD
=======
// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';
// import BluetoothService from './bluetoothservice';
>>>>>>> 8a0ab99ab21ebb478e9cfe6731c9582adee58cda

// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';
// import BluetoothService from './BluetoothService';

<<<<<<< HEAD
=======
// function App() {
//   const [weightData, setWeightData] = useState(null);
>>>>>>> 8a0ab99ab21ebb478e9cfe6731c9582adee58cda

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
