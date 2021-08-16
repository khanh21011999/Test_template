import { Dialog, View, Text } from "react-native-ui-lib";
import React, { useState } from 'react'
import { Button, ColorPropType, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";
import Svg, { Path } from "react-native-svg";
import Icon from "react-native-vector-icons/Ionicons"
import { spacing } from "./spacing";
function Check() {
    return (
        <Svg
            height={50}
            viewBox="0 -46 417.813 417"
            width={70}
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M159.988 318.582c-3.988 4.012-9.43 6.25-15.082 6.25s-11.094-2.238-15.082-6.25L9.375 198.113c-12.5-12.5-12.5-32.77 0-45.246l15.082-15.086c12.504-12.5 32.75-12.5 45.25 0l75.2 75.203L348.104 9.781c12.504-12.5 32.77-12.5 45.25 0l15.082 15.086c12.5 12.5 12.5 32.766 0 45.246zm0 0"
                fill="#0053ab"
            />
        </Svg>
    )
}

const DIALOG: ViewStyle = {
    height: 300,
    width: 350,
    borderRadius: 7,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadiurs: 8.30,
    elevation: 13,
}

const TEXTSTYLE: ViewStyle = {
    marginBottom: spacing[1],
    fontWeight: 'bold',
    marginTop: spacing[8],
    top: -20
}
const SVGSTYLE: ViewStyle = {
    width: 50,
    height: 50,
}
const BUTTONSTYLE: ViewStyle = {
    backgroundColor: '#0053ab',
    width: 150,
    height: 30,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center'

}
const ICONSTYLE: ViewStyle = {
    left: 140
}
const VIEW: ViewStyle={
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
}

function DialogTesting() {
    const [showDialog, setShowDialog] = useState(false)
    const HeaderDialog = () => {
        return (
            <View style={VIEW}>
                <View style={ICONSTYLE}>

                    <Icon name="close-outline" size={30} onPress={() => {
                        setShowDialog(false)
                    }} />
                </View>
                <Text
                    style={{

                        fontWeight: 'bold',
                        fontSize: 40,
                        top: -20,
                        color: Colors.black
                    }}
                >Success!</Text>
                <Check
                style={SVGSTYLE}
                />
            </View>
        )
    }

    const ChildrenDialog = () => {
        return (
            <View style={VIEW}>
                <Text style={TEXTSTYLE}>Your Request Has Been Sent</Text>
                <Text style={{ top: -20, fontSize:11 }}>Additional instructions about appointment can go here</Text>
                <TouchableOpacity
                    onPress={() => {
                        setShowDialog(false)
                    }}
                    style={BUTTONSTYLE}
                >
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>My appointments</Text>
                </TouchableOpacity>

            </View>
        )
    }
    function DialogShow(showDialog) {
        return (
            <View flex style={VIEW}>

                <Dialog
                    containerStyle={DIALOG}
                    visible={showDialog}
                    overlayBackgroundColor='#f0f0f0'
                    onDismiss={() => { setShowDialog(false) }}
                >
                    {HeaderDialog()}
                    {ChildrenDialog()}
                </Dialog>
            </View>

        )
    }
    return (
        <View>
            <Button
                title='Click me to show dialog'
                onPress={() => { setShowDialog(true) }}
            >
            </Button>

            {DialogShow(showDialog)}

        </View>
    )
}
export default DialogTesting