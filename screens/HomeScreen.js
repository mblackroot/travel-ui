import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";

import { useEffect, useState } from "react";
import React from "react";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
  AdjustemntsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured"]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type-> {
          name
        }
      },
    }
    `
      )
      .then((data) => setFeaturedCategories(data));
  }, []);

  return (
    <SafeAreaView className="pt-5">
      {/* Header Part 1 */}
      <View className="flex-row mx-4 space-x-2 items-center">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="bg-gray-200 w-10 h-10 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver now!</Text>
          <Text className="font-extrabold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Header Part 2 */}
      <View className="flex-row mx-4 items-center space-x-2">
        <View className="flex-row flex-1 bg-gray-200 p-3 space-x-2 rounded-md">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon size={20} color="#00BBCC" />
      </View>

      {/* Scrollable Container */}
      <ScrollView className="">
        {/* Categories */}
        <Categories />

        {/* Featured */}

        {featuredCategories?.map((category, index, array) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
            /* isLast is used to check if the current element is the last one in the array
              so that we can add margin bottom to it, in order for it to be totally visible
            */
            isLast={index == array.length - 1 ? true : false}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
