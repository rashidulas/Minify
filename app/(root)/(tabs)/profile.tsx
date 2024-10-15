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

  // Mock data for profile (replace with real data from your app)
  const profileData = {
    username: "Enjelin Morgeana",
    handle: "@enjelin_morgeana",
  };

  return (
    <SafeAreaView className="bg-[#e5f4f1] flex-1">
      <View className="p-4 items-center">
        {/* Profile Header */}
        <Text className="text-lg font-semibold mb-2">Profile</Text>

        {/* Profile Image */}
        {/* <Image
          source={require("")} // Replace with actual avatar image
          className="w-20 h-20 rounded-full"
        /> */}

        {/* Username and Handle */}
        <Text className="text-xl font-bold mt-2">{profileData.username}</Text>
        <Text className="text-gray-500">{profileData.handle}</Text>
      </View>

      {/* Profile Options */}
      <View className="mt-6 space-y-4">
        <ProfileOption icon={icons.profile} label="Invite Friends" />
        <ProfileOption icon={icons.search} label="Account info" />
        <ProfileOption icon={icons.profile} label="Personal profile" />
        <ProfileOption icon={icons.pin} label="Message center" />
        <ProfileOption icon={icons.point} label="Login and security" />
        <ProfileOption icon={icons.email} label="Data and privacy" />
      </View>

      {/* Sign Out button */}
      <TouchableOpacity
        onPress={handleSignOut}
        className="mt-auto mb-4 p-4 rounded-full bg-red-500 flex-row justify-center items-center mx-4"
      >
        <Image source={icons.out} className="w-4 h-4 mr-2" />
        <Text className="text-white">Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Reusable component for each profile option
interface ProfileOptionProps {
  icon: any; // Replace 'any' with the appropriate type if known
  label: string;
}

const ProfileOption: React.FC<ProfileOptionProps> = ({ icon, label }) => (
  <TouchableOpacity className="flex-row items-center p-4 bg-white mx-4 rounded-lg shadow">
    <Image source={icon} className="w-6 h-6 mr-4" />
    <Text className="text-lg">{label}</Text>
  </TouchableOpacity>
);

export default Profile;
