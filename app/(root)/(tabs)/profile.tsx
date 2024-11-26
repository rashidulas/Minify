import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@clerk/clerk-expo';
import { router } from 'expo-router';
import { icons } from '@/constants';
import { images } from '@/constants';
import { 
  Box, 
  VStack, 
  Text, 
  Heading, 
  Divider, 
  Button,
  ButtonText,
  ButtonIcon 
} from '@gluestack-ui/themed';
import { ArrowRight } from 'lucide-react-native';

const Profile = () => {
  const { signOut } = useAuth();
    
  const handleSignOut = () => {
    signOut();
    router.replace("/(auth)/sign-in");
  };
      
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <Box className="p-4">
        <VStack>
          {/* Profile Header */}
          <Box className="flex-row justify-between items-center mb-4">
            <Heading>Profile</Heading>
            <TouchableOpacity
              onPress={handleSignOut}
              className="justify-center items-center w-10 h-10 rounded-full bg-white shadow"
            >
              <Image source={icons.out} className="w-4 h-4" />
            </TouchableOpacity>
          </Box>

          {/* Profile Image and Information */}
          <Box className="bg-white rounded-lg p-4 shadow mb-4 items-center">
            <Image
              source={images.onboarding1} // Replace with actual profile image URL
              className="w-24 h-24 rounded-full mb-4"
            />
            <Heading className="mb-2">John Doe</Heading>
            <Text className="text-gray-600">john@example.com</Text>
          </Box>

          {/* Application Information */}
          <Box className="bg-white rounded-lg p-4 shadow mb-4">
            <Heading className="mb-2">Application Information</Heading>
            <Text className="text-gray-600">Version: 1.0.0</Text>
            <Text className="text-gray-600">Last Updated: June 1, 2023</Text>
          </Box>

          {/* General Settings */}
          <Box className="bg-white rounded-lg p-4 shadow">
            <Heading className="mb-2">General Settings</Heading>
            <VStack>
              <Button
                className="justify-between mb-2"
              >
                <ButtonText>Notification Preferences</ButtonText>
                <ButtonIcon as={ArrowRight} />
              </Button>
              <Divider />
              <Button
                className="justify-between my-2"
              >
                <ButtonText>Currency Settings</ButtonText>
                <ButtonIcon as={ArrowRight} />
              </Button>
              <Divider />
              <Button
                className="justify-between mt-2"
              >
                <ButtonText>Privacy Settings</ButtonText>
                <ButtonIcon as={ArrowRight} />
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </SafeAreaView>
  );
};

export default Profile;
