import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  StarIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
  ArrowLeftCircleIcon,
} from "react-native-heroicons/outline";
import MenuItem from "../components/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { setRestaurant } from "../features/restaurantSlice";

const RestaurantScreen = () => {
  const dispatch = useDispatch();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, [dispatch]);

  const navigation = useNavigation();

  const basketTotalPrice = useSelector(selectBasketTotal);
  const totalItems = useSelector((state) => {
    return selectBasketItems(state);
  });
  return (
    <>
      {/* Basket sticker */}
      {totalItems?.length > 0 ? (
        <View className="absolute bottom-10 w-full z-50">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Basket");
            }}
            className="flex-row items-center justify-between mx-4 p-4 rounded-md bg-[#00BBCC]"
          >
            <Text className="text-white font-bold text-lg bg-[#2e949d] px-2 py-1">
              {totalItems?.length}
            </Text>
            <Text className="text-white font-bold text-lg  px-2 py-1">
              View Basket
            </Text>
            <Text className="text-white font-bold text-lg px-2 py-1">
              £{basketTotalPrice.toFixed(2)}
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <ScrollView className="relative">
        {/* Image of Restaurant */}
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="w-full h-64"
          resizeMode="cover"
        />
        {/* goBack to previous screen button */}
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="absolute top-10 left-4 bg-gray-500 rounded-full"
        >
          <ArrowLeftCircleIcon size={35} color="white" />
        </TouchableOpacity>
        {/* Restaurant information */}
        <View className="bg-white">
          <View className="mx-4 my-4 space-y-2">
            <Text className="font-extrabold text-xl">{title}</Text>
            <View className="flex-row items-center space-x-1">
              <StarIcon size={20} color="#00BBCC" />
              <Text className="text-xs text-gray-500">
                {rating} - {genre}
              </Text>
              <MapPinIcon size={20} color="gray" />
              <Text className="text-xs text-gray-500">Nearby - {address}</Text>
            </View>
            <Text className="text-justify text-gray-500">
              {short_description}
            </Text>
          </View>
        </View>

        {/* Food allergy section */}
        <View className="bg-white">
          <View className="mx-4">
            {/* Divider */}
            <View className="w-full h-[1px] bg-gray-300"></View>
            <View className="flex-row space-x-4 py-4">
              <View className="flex-row items-center space-x-4 flex-1">
                <QuestionMarkCircleIcon size={20} color="gray" />
                <Text className="font-bold">Have food allergy?</Text>
              </View>
              <ChevronRightIcon size={20} color="#00BBCC" />
            </View>
            {/* Divider */}
            <View className="w-full h-[1px] bg-gray-300"></View>
          </View>
        </View>
        {/* Menu */}
        <Text className="font-bold text-2xl mx-4 my-4">Menu</Text>
        {/* Looping through dishes */}
        {dishes.map((dish, index, array) => (
          <MenuItem
            key={dish._id}
            id={dish._id}
            name={dish.name}
            short_description={dish.short_description}
            price={dish.price}
            imgUrl={dish.image}
            lastItem={index == array.length - 1 ? true : false}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
