import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState, useMemo, useEffect } from "react";
import { XCircleIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
  selectBasketTotal,
} from "../features/basketSlice";
import { selectRestaurant } from "../features/restaurantSlice";
import { urlFor } from "../sanity";

const BasketScreen = () => {
  const navigation = useNavigation();

  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <View className="bg-gray-200 flex-1 space-y-8 relative">
      {/* Modal Header */}
      <View className="bg-white py-4 flex-row justify-between">
        <View className="mx-auto">
          <Text className="text-center text-lg font-bold">Basket</Text>
          <Text>{restaurant.title}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="mr-4"
        >
          <XCircleIcon size={40} color="#00BBCC" />
        </TouchableOpacity>
      </View>

      {/* Delivery section */}
      <View className="bg-white py-3">
        <View className="mx-4 flex-row items-center">
          <View className="flex-row items-center space-x-4 flex-1">
            <Image
              source={{
                uri: "https://links.papareact.com/wru",
              }}
              className="bg-gray-200 w-10 h-10 rounded-full"
            />
            <Text>Delivery in 50-75 mins</Text>
          </View>
          <Text className="text-[#00BBCC]">Change</Text>
        </View>
      </View>

      {/* Picked Dishes: Quantity x Dish Name ------ Price - Remove */}
      {Object.entries(groupedItemsInBasket).length > 0 && (
        <ScrollView className="bg-white py-4 space-y-6">
          {Object.entries(groupedItemsInBasket).map(
            ([key, items], index, array) => (
              <View
                key={key}
                className={`mx-4 flex-row items-center justify-between`}
              >
                <View className="flex-row items-center space-x-4">
                  <Text>{items.length} x</Text>
                  <Image
                    source={{
                      uri: urlFor(items[0]?.imgUrl).url(),
                    }}
                    className="w-10 h-10 rounded-full"
                  />
                  <Text>{items[0].name}</Text>
                </View>
                <View className="flex-row space-x-4">
                  <Text>£{items[0].price}</Text>
                  <TouchableOpacity
                    onPress={() => dispatch(removeFromBasket({ id: key }))}
                  >
                    <Text className="text-[#00BBCC]">Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          )}
        </ScrollView>
      )}

      {/* Total Paying */}
      <View className="bg-white py-8 space-y-6 absolute bottom-0 w-full">
        <View className="flex-row mx-4 justify-between">
          <Text>Subtotal</Text>
          <Text>£{basketTotal}</Text>
        </View>
        <View className="flex-row mx-4 justify-between">
          <Text>Delivery Fee</Text>
          <Text>£{basketTotal != 0 ? 3.99 : 0.0}</Text>
        </View>
        <View className="flex-row mx-4 justify-between">
          <Text>Order Total</Text>
          <Text>
            £{basketTotal != 0 ? (basketTotal + 3.99).toFixed(2) : 0.0}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("PreparingOrder")}
          className="mx-4 py-4 rounded-lg bg-[#00BBCC]"
        >
          <Text className="text-white font-bold text-lg text-center">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasketScreen;
