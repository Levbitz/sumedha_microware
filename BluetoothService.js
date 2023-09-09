import { BleManager } from 'react-native-ble-plx';

const manager = new BleManager();

export default class BluetoothService {
  static async scan() {
    const devices = await manager.startDeviceScan(null, null, true);
    return devices;
  }

  static async connectToDevice(deviceId) {
    const device = await manager.connectToDevice({ id: deviceId });
    return device;
  }

  static async disconnectDevice(deviceId) {
    await manager.cancelDeviceConnection(deviceId);
  }

  static async readCharacteristic(deviceId, serviceUUID, characteristicUUID) {
    const device = await this.connectToDevice(deviceId);
    const service = await device.discoverAllServicesAndCharacteristics();
    const characteristic = await service.readCharacteristicForService(serviceUUID, characteristicUUID);
    const value = characteristic.value;
    await this.disconnectDevice(deviceId);
    return value;
  }
}
