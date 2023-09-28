import React, { FC, useCallback } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  Modal,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Device } from "react-native-ble-plx";




const DeviceModalListItem = (props) => {
  const { item, connectToPeripheral, closeModal } = props;


//console.log(item.item.name);





  const connectAndCloseModal = useCallback(() => {
    connectToPeripheral(item.item);
    closeModal();
  }, [closeModal, connectToPeripheral, item.item]);






  return (
    <TouchableOpacity
      onPress={connectAndCloseModal}
      style={modalStyle.ctaButton}
    >
    {/*<Text style={modalStyle.ctaButtonText}>
      {item.item.manufacturerData}
      
      
  </Text>*/}
      <Text style={modalStyle.ctaButtonText}>
        {/*item.item.id*/}
        {item.item.id}
      </Text>
    </TouchableOpacity>
  );
};

const DeviceModal = (props) => {
  const { devices, visible, connectToPeripheral, closeModal } = props;



  const renderDeviceModalListItem = useCallback(
    (item) => {
      // console.log(item.id);
      //console.log(item.item.mtu);
      // console.log(item.item.manufacturerData);
    //  console.log(item.item._manager);
      return (
        <DeviceModalListItem
          item={item}
          connectToPeripheral={connectToPeripheral}
          closeModal={closeModal}
        />
      );
    },
    [closeModal, connectToPeripheral]
  );


  const connectAndCloseModal = useCallback(() => {
   // connectToPeripheral(item.item);
    closeModal();
  }, [closeModal, connectToPeripheral]);
  return (
    <Modal
      style={modalStyle.modalContainer}
      animationType="slide"
      transparent={false}
      visible={visible}
    >
      <SafeAreaView style={modalStyle.modalTitle}>
        <Text style={modalStyle.modalTitleText}>
          Tap on a device to connect
        </Text>
        <FlatList
        ListHeaderComponent={<>
          
          </>}
          contentContainerStyle={modalStyle.modalFlatlistContiner}
          data={devices}
          renderItem={renderDeviceModalListItem}

          ListFooterComponent={
            <>
            <TouchableOpacity
      onPress={connectAndCloseModal}
      style={modalStyle.ctaButton}
    >
    {/*<Text style={modalStyle.ctaButtonText}>
      {item.item.manufacturerData}
      
      
  </Text>*/}
      <Text style={modalStyle.ctaButtonText}>
        00:22:04:01:07:C1
      </Text>
    </TouchableOpacity>
            </>
          }
        />


      </SafeAreaView>
    </Modal>
  );
};

const modalStyle = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  modalFlatlistContiner: {
    flex: 1,
    justifyContent: "center",
  },
  modalCellOutline: {
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
  },
  modalTitle: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  modalTitleText: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 20,
    textAlign: "center",
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

export default DeviceModal;









// {
//   "index": 2, 
//   "item": {
//     "_manager": {"_activePromises": [Object], 
//     "_activeSubscriptions": [Object], 
//     "_errorCodesToMessagesMapping": [Object], 
//     "_eventEmitter": [NativeEventEmitter], 
//     "_scanEventSubscription": [Object],
//      "_uniqueId": 0}, 
//      "id": "EA:AF:89:B9:75:56", 
//      "isConnectable": null, 
//      "localName": null, 
//      "manufacturerData": "TAASAgAD", 
//      "mtu": 23, "name": null, 
//      "overflowServiceUUIDs": null, 
//      "rssi": -58, "serviceData": null,
//       "serviceUUIDs": null, 
//       "solicitedServiceUUIDs": 
//       null, "txPowerLevel": null}, 
//       "separators": {
//         "highlight": [Function highlight],
//          "unhighlight": [Function unhighlight], 
//          "updateProps": [Function updateProps]}}
