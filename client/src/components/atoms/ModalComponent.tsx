import { View, Text, Modal } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const ModalComponent = ({openModal}:any) => {
  return (
    <Modal visible={openModal} animationType="slide" transparent={true}>
            <View
              style={{
                flex: 1,
                backgroundColor: "rgba(0,0,0,0.1)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#fff",
                  width: "90%",
                  padding: moderateScale(15),
                  borderRadius: moderateScale(10),
                  elevation: 10
                }}
              >
               
              </View>
            </View>
          </Modal>
  )
}

export default ModalComponent