import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";

const Login = () => {
  return (
    <View className="mx-2">
      {/* Image */}
      <View>
        <Image
          source={{
            uri: "https://c4.wallpaperflare.com/wallpaper/6/246/332/grindelwald-swiss-alps-switzerland-snowy-peak-wallpaper-preview.jpg",
          }}
          className="w-full h-[450px] rounded-[50px] mt-1"
        />
        <Text className="absolute bottom-6 ml-4">
          <Text className="text-white font-bold text-3xl">
            Experience the {"\n"}wonders of the world
            {"\n"}
            <Text className=" text-white font-normal text-sm">
              and conquer with us
            </Text>
          </Text>
        </Text>
      </View>

      {/* Login & Signup */}
      <View className="mt-4 flex-row justify-between">
        <TouchableOpacity className="bg-black py-4 rounded-[30px] w-[180px] justify-center items-center">
          <Text className="text-white">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white py-4 b rounded-[30px] justify-center items-center order w-[180px] border border-gray-400">
          <Text className="text-black">Signup</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View className="flex-row my-4 justify-between items-center">
        <View className="border-t border-gray-300 w-[170px]"></View>
        <Text>or</Text>
        <View className="border-t border-gray-300 w-[170px]"></View>
      </View>

      {/* Social Login */}
      <View className="gap-3">
        <TouchableOpacity className="flex-row items-center border border-gray-300 py-4 rounded-[30px]">
          <View className="ml-4">
            <AntDesign name="google" size={30} />
          </View>
          <Text className="ml-20">Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center border border-gray-300 py-4 rounded-[30px]">
          <View className="ml-4">
            <AntDesign name="facebook-square" size={30} />
          </View>
          <Text className="ml-20">Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center border border-gray-300 py-4 rounded-[30px]">
          <View className="ml-4">
            <AntDesign name="apple1" size={30} />
          </View>
          <Text className="ml-20">Continue with Apple</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
