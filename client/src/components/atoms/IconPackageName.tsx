import React from "react";
import { ViewStyle } from "react-native";
import {
  FontAwesome,
  MaterialIcons,
  AntDesign,
  Entypo,
  Ionicons,
  SimpleLineIcons,
  FontAwesome5,
  FontAwesome6,
} from "@expo/vector-icons";

interface IconProps {
  iconPackage:
    | "FontAwesome"
    | "FontAwesome5"
    | "FontAwesome6"
    | "MaterialIcons"
    | "AntDesign"
    | "Entypo"
    | "Ionicons"
    | "SimpleLineIcons";
  name: string;
  size?: number;
  color?: string;
  style?: ViewStyle;
}

const IconPackageName: React.FC<IconProps> = ({
  iconPackage,
  name,
  size = 24,
  color = "#000",
  style,
}) => {
  const iconPackages: Record<string, any> = {
    FontAwesome,
    FontAwesome5,
    FontAwesome6,
    MaterialIcons,
    AntDesign,
    Entypo,
    Ionicons,
    SimpleLineIcons,
  };

  const IconComponent = iconPackages[iconPackage];

  if (!IconComponent) {
    console.warn(`Invalid icon package: ${iconPackage}`);
    return null; // Return null to avoid rendering errors
  }

  return <IconComponent name={name} size={size} color={color} style={style} />;
};

export default IconPackageName;
