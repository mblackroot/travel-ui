import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description, isLast }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured" && _id == $id]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
            name
          }
        },
      }[0]
    `,
        { id: id }
      )
      .then((data) => setRestaurants(data?.restaurants));
  }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between mx-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00BBCC" />
      </View>

      <Text className="mx-4 text-xs text-gray-500 text-justify">
        {description}
      </Text>

      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className={`pt-4 pb-2 ${isLast ? "mb-20" : ""}`}
      >
        {/* RestaurantsCards */}

        {restaurants?.map((restaurant, index, array) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.genre}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
