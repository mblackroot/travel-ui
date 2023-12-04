import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-2 relative">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="w-20 h-20 rounded"
      />
      <View className="absolute h-5 justify-center w-full bottom-0 bg-[#00BBCC]">
        <Text className="text-white font-semibold text-center">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
