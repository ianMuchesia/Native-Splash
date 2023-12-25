import { View, Text } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View className="bg-green-800 h-[400] flex items-start justify-end pl-8 pb-32 ">
     <View className="flex flex-col ">
      <Text className="text-white text-5xl ">Image Gallery</Text>
      <Text className="text-gray-200 text-sm capitalize">supported by unsplash</Text>
      </View>
    </View>
  );
};

export default Header;
