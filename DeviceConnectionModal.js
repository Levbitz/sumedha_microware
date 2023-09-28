import React, { FC, useCallback } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  Modal,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  View
} from "react-native";
import { Device } from "react-native-ble-plx";
import { useNavigation } from "@react-navigation/native";




const DeviceModalListItem = (props) => {
  const { item, connectToPeripheral, closeModal } = props;

  const navigation = useNavigation()


//console.log(item.item);





  const connectAndCloseModal = useCallback(() => {
    connectToPeripheral(item.item);
    closeModal();
  }, [closeModal, connectToPeripheral, item.item]);






  return (
    <TouchableOpacity
    onPress={()=> navigation.navigate("DeviceDetails", {device:item.item})}
    // onPress={()=> Alert.alert(item.item.manufacturerData)}
     // onPress={connectAndCloseModal}
      style={modalStyle.ctaButton}
    >
    {/*<Text style={modalStyle.ctaButtonText}>
      {item.item.manufacturerData}
      
      
  </Text>*/}
      <Text style={modalStyle.ctaButtonText}>
        {/*item.item.id*/}
      Device Id is :  {item.item.id}
      </Text>
      <Text style={modalStyle.ctaButtonText}>
        {/*item.item.id*/}
      Manufacture Name :  {item.item.manufacturerData}
      </Text>
      <Text style={modalStyle.ctaButtonText}>
        {/*item.item.id*/}
      Brand Name :  {item.item.name ?item.item.name : 'No brand Name'}
      </Text>
      <Text style={modalStyle.ctaButtonText}>
        {/*item.item.id*/}
      Brand Name :  {item.item.mtu}
      </Text>
    </TouchableOpacity>
  );
};

const DeviceModal = (props) => {
  const { devices, visible, connectToPeripheral, closeModal } = props;



  const renderDeviceModalListItem = useCallback(
    (item) => {
   
      return (
        <DeviceModalListItem
          item={item}
          connectToPeripheral={connectToPeripheral}
        
        />
      );
    },
    [ connectToPeripheral]
  );


  const connectAndCloseModal = useCallback(() => {
   // connectToPeripheral(item.item);
    closeModal();
  }, [closeModal, connectToPeripheral]);
  return (
    
      <View style={{
        //backgroundColor:"red",
      
     
      }}>
        
        <FlatList
        ListHeaderComponent={<>
          <Text style={modalStyle.modalTitleText}>
          Tap on a device to connect
        </Text>
          </>}
          contentContainerStyle={modalStyle.modalFlatlistContiner}
          data={devices}
          renderItem={renderDeviceModalListItem}

          ListFooterComponent={
            <>
         {/*   <TouchableOpacity
      onPress={connectAndCloseModal}
      style={modalStyle.ctaButton}
    >
   
      <Text style={modalStyle.ctaButtonText}>
        00:22:04:01:07:C1
      </Text>
    </TouchableOpacity>*/}
            </>
          }
        />


      </View>
  
  );
};





{/*<Modal
      // style={modalStyle.modalContainer}
      // animationType="slide"
      // transparent={false}
      // visible={visible}
  >*/}
 {/* </Modal>*/}
const modalStyle = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  modalFlatlistContiner: {
    // flex: 1,
    // justifyContent: "center",
    marginTop:10,
    
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
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
    textAlign: "center",
  },
  ctaButton: {
    backgroundColor: "#FF6060",
    justifyContent: "center",
    alignItems: "center",
    // height: 50,
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    marginBottom:20
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
