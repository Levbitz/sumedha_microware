import React, { useState ,useEffect } from "react";
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


  //console.log(allDevices);
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


  useEffect(() => {
    scanForDevices();
    setIsModalVisible(true);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heartRateTitleWrapper}>
        {connectedDevice ? (
          <>
            <PulseIndicator />

            <Text style={styles.heartRateTitleText}>Your Result Is:</Text>
            <Text style={styles.heartRateText}>{heartRate}</Text>
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
            Scan Available Devices
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

export default App;






// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';
// import BluetoothService from './BluetoothService';


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
