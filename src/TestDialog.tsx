import React from "react";
import { useState } from "react";
import { Button, View, ViewStyle, Text, TextStyle } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Svg, { Path } from "react-native-svg";
import { Dialog } from "./dialogSample";
import Entypo from "react-native-vector-icons/Entypo";
import { TouchableOpacity } from "react-native";
const DIALOG: ViewStyle = {
  borderRadius: 7,
};
const ACTIVITY_TEXT_STYLE: TextStyle = {
  fontWeight: "bold",
  fontSize: 25,
};
const COMPONET_STYLE: ViewStyle = {
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  marginBottom: 10,
};
const COMPONENT_TEXT_STYLE: TextStyle = {
  fontWeight: "bold",
  fontSize: 14,
};
const EMOTION_BOARD: ViewStyle = {
  width: "100%",
  height: "50%",
  backgroundColor: "#F3F3F3",
  borderRadius: 5,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};
const EMOTION_ICON: ViewStyle = {
  margin: 30,
};
function DialogTesting() {
  const [show, setShow] = useState(false);
  return (
    <View>
      <Button
        title="click"
        onPress={() => {
          setShow(true);
        }}
      >
        <Text>Show dialog</Text>
      </Button>
      <Dialog
        visible={show}
        title="Record New Progress"
        style={DIALOG}
        onClose={() => {
          setShow(false);
        }}
      >
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Text>Activity :</Text>
          <Text style={ACTIVITY_TEXT_STYLE}>Take the stairs</Text>
        </View>
        <View style={COMPONET_STYLE}>
          <Text style={COMPONENT_TEXT_STYLE}>
            How many times did you do this activity?
          </Text>
          <View
            style={{
              backgroundColor: "#F3F3F3",
              marginTop: 5,
              borderRadius: 5,
            }}
          >
            <TextInput
              placeholder="1"
              style={{
                height: 40,
                width: 250,
                padding: 10,
              }}
            />
          </View>
        </View>
        <View style={COMPONET_STYLE}>
          <Text style={COMPONENT_TEXT_STYLE}>
            How did you do overall for this activity?
          </Text>
          <View style={EMOTION_BOARD}>
            {Emotion("emoji-sad", "grey")}
            {Emotion("emoji-neutral", "grey")}
            {Emotion("emoji-happy", "grey")}
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#294FA5",
              width: "100%",
              height: 30,
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Save</Text>
          </TouchableOpacity>
        </View>
      </Dialog>
    </View>
  );

  function Emotion(name, color) {
    return (
      <TouchableOpacity>
        <View style={EMOTION_ICON}>
          <Entypo name={name} size={35} color={color} />
        </View>
      </TouchableOpacity>
    );
  }
}
export default DialogTesting;
