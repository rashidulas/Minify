import { icons } from '@/constants';
import { useAuth } from '@clerk/clerk-expo';
import { router } from 'expo-router';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
    const { signOut } = useAuth();
    
    const handleSignOut = () => {
        signOut();
        router.replace("/(auth)/sign-in");
      };
      
    return (
        <SafeAreaView>
            <Text>Profile</Text>

            {/* Sign Out button */}
            <TouchableOpacity
                onPress={handleSignOut}
                className="justify-center items-center w-10 h-10 rounded-full bg-white"
              >
                <Image source={icons.out} className="w-4 h-4" />
              </TouchableOpacity>
        </SafeAreaView>

    )
}

export default Profile;