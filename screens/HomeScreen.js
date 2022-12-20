import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeroImage } from '../assets';
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {

const navigation = useNavigation();

useLayoutEffect(() => {
  navigation.setOptions({
    headerShown: false,   
  })
}, [])

  return (
    <SafeAreaView className= "bg-white-100 flex-1 relative" >
        {/* First SEction */}

        <View className="flex-row px-6 mt-6 items-center space-x-2" >
          <View className="w-20 h-20 bg-black rounded-full items-center justify-center" >
            <Text className="text-[#BEDB39] text-3xl font-semibold" >BON</Text>
          </View>
          <Text className="text-[#004358] text-3xl font-semibold" >Voyage</Text>
        </View>

        {/* Second section */}

        <View className="px-6 mt-3 space-y-1">
          <Text className="text-[#004358] text-[42px]">Enjoy the trip with</Text>
          <Text className="text-[#1F8A70] text-[38px] font-bold">Good Moments</Text>
        

        <Text className="text-[#004358] text-base" >Eat, See and Sleep application for travelers</Text>
        </View>

        {/* Third Section */}
        <View className="w-[350px] h-[350px] bg-[#4A5B8C] rounded-full absolute bottom-12 -right-36"></View>
        <View className="w-[350px] h-[350px] bg-[#BFCDD9] rounded-full absolute -bottom-28 -left-9"></View>

        {/* Image container */}
        <View className="flex-1 relative items-center justify-center">
          <Animatable.Image
            animation="fadeIn"
            easing="ease-in-out"
            source={HeroImage}
            className="w-full h-full object-cover mt-9"
          />
                 
                  <TouchableOpacity 
                  onPress={() => navigation.navigate("Discover")}
                  className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#1F8A70] rounded-full items-center justify-center">                 
                        <Animatable.View 
                            animation="pulse" 
                            easing="ease-in-out"
                            iterationCount="infinite" 
                            className="w-20 h-20 items-center justify-center rounded-full bg-[#1F8A70]">
                            <Text className="text-gray-50 text-[36px] font-semibold text-center">Go</Text>
                        </Animatable.View>                  
                  </TouchableOpacity>
                  
        </View>



    
    </SafeAreaView>
  )
}

export default HomeScreen;
