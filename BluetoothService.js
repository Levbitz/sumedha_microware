





import React, { useState, useEffect } from 'react';
import { BleManager } from 'react-native-ble-plx';

const BluetoothService = () => {
  const [manager, setManager] = useState(new BleManager());

  const scan = async () => {
    const devices = await manager.startDeviceScan(null, null, true);
    return devices;
  };

  const connectToDevice = async (deviceId) => {
    const device = await manager.connectToDevice({ id: deviceId });
    return device;
  };

  const disconnectDevice = async (deviceId) => {
    await manager.cancelDeviceConnection(deviceId);
  };

  const readCharacteristic = async (deviceId, serviceUUID, characteristicUUID) => {
    const device = await connectToDevice(deviceId);
    const service = await device.discoverAllServicesAndCharacteristics();
    const characteristic = await service.readCharacteristicForService(serviceUUID, characteristicUUID);
    const value = characteristic.value;
    await disconnectDevice(deviceId);
    return value;
  };

  useEffect(() => {
    // Clean up the manager when component is unmounted
    return () => {
      manager.destroy();
    };
  }, [manager]);

  return null; // You may return JSX here if needed, or leave it as null if it's just a utility component.
};

export default BluetoothService;

