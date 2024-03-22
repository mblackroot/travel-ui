import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  AdjustmentsHorizontalIcon,
  BellIcon,
  BuildingOfficeIcon,
  CalendarIcon,
  ChevronDoubleDownIcon,
  ChevronDownIcon,
  GlobeAltIcon,
  HeartIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  RocketLaunchIcon,
  ShoppingBagIcon,
  TruckIcon,
  WrenchIcon,
} from "react-native-heroicons/outline";
const Homepage = () => {
  return (
    <View className="flex-1">
      <ScrollView className="bg-gray-300 flex-1">
        <View className="mb-16">
          {/* Header + Search Destination + Categories */}
          <View className="px-4 pt-16 pb-10 rounded-b-[30px] bg-white">
            {/* Header */}
            <View className="flex-row items-center justify-between">
              <Image
                source={{
                  uri: "https://cgfaces.com/collection/preview/cc30d8eb-e792-4a1d-a645-cc6f5c53a0b9.jpg",
                }}
                className="w-14 h-14 rounded-full"
              />
              {/* Location */}
              <View className="justify-center items-center">
                <Text className="text-xs text-gray-400">Location</Text>
                <View className="flex-row items-center gap-x-2">
                  {/* Icon */}
                  <MapPinIcon size={20} color={"red"} />
                  <Text className="font-semibold text-md">
                    Brooklyn, NY 112
                  </Text>

                  {/* Icon */}
                  <TouchableOpacity>
                    <ChevronDownIcon size={16} color={"black"} />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Notification Icon */}
              <TouchableOpacity className="border border-gray-300 p-3 rounded-full">
                <BellIcon size={20} color={"black"} />
              </TouchableOpacity>
            </View>

            {/* Search Area */}
            <View className="flex-row mt-6 border border-gray-300 items-center rounded-[30px] p-3 justify-between">
              <View className="flex-row items-center">
                {/* Search Icon */}
                <TouchableOpacity>
                  <MagnifyingGlassIcon size={20} color={"black"} />
                </TouchableOpacity>
                <TextInput placeholder="Search destination" className="ml-4" />
              </View>
              {/* Filter Icon */}
              <TouchableOpacity>
                <AdjustmentsHorizontalIcon size={20} color={"black"} />
              </TouchableOpacity>
            </View>

            {/* Categories: Main services */}
            <View className="mt-6 flex-row justify-between">
              <TouchableOpacity className="items-center gap-y-1">
                <View className="bg-black p-5 rounded-full">
                  {/* Icon */}
                  <GlobeAltIcon size={20} color={"white"} />
                </View>
                <Text className="text-black font-semibold">Trip</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center gap-y-1">
                <View className="bg-white p-5 rounded-full border border-gray-300">
                  {/* Icon */}
                  <BuildingOfficeIcon size={20} color={"gray"} />
                </View>
                <Text className="text-black">Hotel</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center gap-y-1">
                <View className="bg-white p-5 rounded-full border border-gray-300">
                  {/* Icon */}
                  <TruckIcon size={20} color={"gray"} />
                </View>
                <Text className="text-black">Bus</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center gap-y-1">
                <View className="bg-white p-5 rounded-full border border-gray-300">
                  {/* Icon */}
                  <RocketLaunchIcon size={20} color={"gray"} />
                </View>
                <Text className="text-black">Flight</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center gap-y-1">
                <View className="bg-white p-5 rounded-full border border-gray-300">
                  {/* Icon */}
                  <ShoppingBagIcon size={20} color={"gray"} />
                </View>
                <Text className="text-black">Ship</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Destination Card: Can be coded in a separate comp ofc */}
          <View className="mx-2 mt-6 relative">
            <Image
              source={{
                uri: "https://w0.peakpx.com/wallpaper/377/192/HD-wallpaper-winter-night-snow-light-alps-switzerland-cityscape-valley-town-zermatt-man-made-towns.jpg",
              }}
              className="h-[370px] w-full rounded-[30px]"
              resizeMode="cover"
            />

            {/* Favorite Icon: To be customized later on */}
            <TouchableOpacity className="absolute top-4 left-4 bg-white/30 p-4 rounded-full">
              <HeartIcon size={20} color={"white"} />
            </TouchableOpacity>

            {/* Location */}
            <View>
              <Text className="absolute bottom-0 left-4 text-white font-bold text-4xl">
                Bali{"\n"}Tourism{"\n"}
              </Text>
              <View className="absolute bottom-4 left-4 flex-row items-center">
                <MapPinIcon size={14} color={"red"} />
                <Text className="text-white ml-2 text-xs font-normal">
                  Bali, Indonesia
                </Text>
              </View>
              <Text className="absolute right-3 bottom-10 text-white font-bold text-3xl">
                $ 147
              </Text>
              <Text className="text-white absolute right-3 bottom-4 text-xs">
                / Person
              </Text>
            </View>
          </View>

          {/* Destination Card: Can be coded in a separate comp ofc */}
          <View className="mx-2 mt-6 relative">
            <Image
              source={{
                uri: "https://istanbultourservice.com/in/tours/2-day-trabzon-tours-from-istanbul/2-day-trabzon-tours-from-istanbul-1.jpeg",
              }}
              className="h-[370px] w-full rounded-[30px]"
              resizeMode="cover"
            />

            {/* Favorite Icon: To be customized later on */}
            <TouchableOpacity className="absolute top-4 left-4 bg-white/30 p-4 rounded-full">
              <HeartIcon size={20} color={"white"} />
            </TouchableOpacity>

            {/* Location */}
            <View>
              <Text className="absolute bottom-0 left-4 text-white font-bold text-4xl">
                Trabzon{"\n"}Tourism{"\n"}
              </Text>
              <View className="absolute bottom-4 left-4 flex-row items-center">
                <MapPinIcon size={14} color={"red"} />
                <Text className="text-white ml-2 text-xs font-normal">
                  Trabzon, Turkey
                </Text>
              </View>
              <Text className="absolute right-3 bottom-10 text-white font-bold text-3xl">
                $ 90
              </Text>
              <Text className="text-white absolute right-3 bottom-4 text-xs">
                / Person
              </Text>
            </View>
          </View>

          {/* Destination Card: Can be coded in a separate comp ofc */}
          <View className="mx-2 mt-6 relative">
            <Image
              source={{
                uri: "https://images.prismic.io/bounce/ca56891d-a5c8-4bd2-8515-a63e0fff3124_raimond-klavins-LiQs23S9Wtk-unsplash.jpg?auto=format,compress",
              }}
              className="h-[370px] w-full rounded-[30px]"
              resizeMode="cover"
            />

            {/* Favorite Icon: To be customized later on */}
            <TouchableOpacity className="absolute top-4 left-4 bg-white/30 p-4 rounded-full">
              <HeartIcon size={20} color={"white"} />
            </TouchableOpacity>

            {/* Location */}
            <View>
              <Text className="absolute bottom-0 left-4 text-white font-bold text-4xl">
                Istanbul{"\n"}Tourism{"\n"}
              </Text>
              <View className="absolute bottom-4 left-4 flex-row items-center">
                <MapPinIcon size={14} color={"red"} />
                <Text className="text-white ml-2 text-xs font-normal">
                  Istanbul, Turkey
                </Text>
              </View>
              <Text className="absolute right-3 bottom-10 text-white font-bold text-3xl">
                $ 83
              </Text>
              <Text className="text-white absolute right-3 bottom-4 text-xs">
                / Person
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="absolute bottom-10 bg-black rounded-[30px] self-center py-3 flex-row gap-x-4">
        <TouchableOpacity className="bg-white/20 rounded-full p-3">
          {/* Tab Menu: Fake btw */}
          <HomeIcon size={20} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity className=" rounded-full p-3">
          {/* Tab Menu: Fake btw */}
          <MapPinIcon size={20} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity className="rounded-full p-3">
          {/* Tab Menu: Fake btw */}
          <CalendarIcon size={20} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity className=" rounded-full p-3">
          {/* Tab Menu: Fake btw */}
          <HeartIcon size={20} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity className="rounded-full p-3">
          {/* Tab Menu: Fake btw */}
          <WrenchIcon size={20} color={"white"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Homepage;
