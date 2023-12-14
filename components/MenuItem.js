import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/basketSlice";

const MenuItem = ({ id, name, short_description, price, imgUrl, lastItem }) => {
  const [quantity, setQuantity] = useState(0);
  const [showQuantity, setShowQuantity] = useState(false);

  const items = useSelector((state) => {
    return selectBasketItemsWithId(state, id);
  });
  const dispatch = useDispatch();

  const handleItems = (action) => {
    switch (action) {
      case "ADD":
        dispatch(addToBasket({ id, name, short_description, price, imgUrl }));
        break;
      case "SUB":
        if (items.length == 0) return;
        dispatch(removeFromBasket({ id }));
        break;
    }
  };
  return (
    <View className="bg-white">
      <View className={`mx-4 my-4 space-y-2 ${lastItem ? "mb-40" : ""}`}>
        <TouchableOpacity
          onPress={() => setShowQuantity(!showQuantity)}
          className="flex-row items-center"
        >
          <View className="space-y-1 flex-1 mr-2">
            <Text className="text-lg font-medium">{name}</Text>
            <Text className="text-justify">{short_description}</Text>
            <Text>Price - £{price}</Text>
          </View>
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-16 h-16 rounded-md"
          />
        </TouchableOpacity>
        {/* Quantity Picker */}
        {showQuantity && (
          <View className="flex-row items-center space-x-4">
            <Text className="font-semibold text-md text-gray-500">
              Choose Quantity:
            </Text>
            <TouchableOpacity
              onPress={() => handleItems("SUB")}
              disabled={items.length < 1 ? true : false}
            >
              <MinusCircleIcon
                size={30}
                color={items.length > 0 ? "#00BBCC" : "gray"}
              />
            </TouchableOpacity>
            <Text className="font-bold text-lg">
              {items?.length == undefined ? 0 : items?.length}
            </Text>
            <TouchableOpacity onPress={() => handleItems("ADD")}>
              <PlusCircleIcon size={30} color="#00BBCC" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default MenuItem;
