import * as React from "react";
import { Dimensions, TextStyle, ViewStyle, Text } from "react-native";
import {
  Dialog as CustomDialog,
  DialogProps as CustomDialogProps,
  TouchableOpacity,
  View,
} from "react-native-ui-lib";
import Fontisto from "react-native-vector-icons/Fontisto";
import { LoadingView } from "./loading-view";
const CONTENT: ViewStyle = {
  backgroundColor: "white",
  width: "100%",
  height: 400,
  padding: 15,
  borderRadius: 4,
//   alignItems: "center",
  justifyContent: "flex-start",
};

const TEXT: TextStyle = {
  fontSize: 20,
  color: "blue",
};
const TITLE_TEXT: TextStyle = {
  fontWeight: "bold",
  fontSize: 15,
};

const TITLE: ViewStyle = {
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
};
const HEADER: ViewStyle = {
  width: "100%",
  flexDirection: "column",
  justifyContent: "center",
};
const LINE: ViewStyle = {
  borderBottomColor: "#F8F7F7",
  borderBottomWidth: 1,
  marginTop: 10,
  marginBottom: 10,
  width: "100%",
};
const CLOSE_BTN_SHAPE: ViewStyle = {
  height: 30,
  width: 30,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 30 / 2,
  backgroundColor: "#EAF0FE",
};

export interface DialogProps extends CustomDialogProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle;
  /**
   *
   */
  visible?: boolean;
  /**
   *
   */
  title?: Text;
  /**
   *
   */
  children?: React.ReactNode;
  /**
   *
   */
  onClose?: () => void;
  /**
   *
   */
  rest?: any;

  loading?: boolean;
}

/**
 * Describe your component here
 */
const { height } = Dimensions.get("window");

export function Dialog(props: DialogProps) {
  const { style, visible, title, children, loading, onClose, ...rest } = props;

  return (
    <CustomDialog visible={visible} height={height} {...rest}>
      {loading ? (
        <LoadingView />
      ) : (
        <View flex center>
          <View style={[CONTENT, style]}>
            <View style={HEADER}>
              <View style={TITLE}>
                {title && <Text style={TITLE_TEXT}>{title}</Text>}
                <View style={CLOSE_BTN_SHAPE}>
                  <TouchableOpacity onPress={onClose}>
                    <Fontisto name="close-a" color="#2A4EA6" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={LINE} />
            </View>

            {children}
          </View>
        </View>
      )}
    </CustomDialog>
  );
}
