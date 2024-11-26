import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Users, UserPlus, DollarSign, Briefcase } from 'lucide-react-native';
import { icons } from '@/constants';

const CommunityPage = () => {
  const groups = [
    { id: 1, name: 'Family Budget', members: 4, totalSavings: 2500 },
    { id: 2, name: 'Vacation Fund', members: 6, totalSavings: 1800 },
    { id: 3, name: 'Investment Club', members: 8, totalSavings: 5000 },
  ];

  const advisors = [
    { id: 1, name: 'John Smith', specialty: 'Retirement Planning', rating: 4.8 },
    { id: 2, name: 'Sarah Johnson', specialty: 'Debt Management', rating: 4.9 },
    { id: 3, name: 'Michael Brown', specialty: 'Investment Strategies', rating: 4.7 },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="flex-1">
        <View className="p-4">
          <View className="space-y-4">
            {/* Header */}
            <Text className="text-2xl font-bold">Community</Text>

            {/* Quick Actions */}
            <View className="flex-row justify-between">
              <TouchableOpacity className="bg-blue-500 rounded-lg p-4 shadow flex-1 mr-2 items-center flex-row">
                <UserPlus size={24} color="#FFFFFF" />
                <Text className="ml-2 text-white font-semibold">Create Group</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-green-500 rounded-lg p-4 shadow flex-1 ml-2 items-center flex-row">
                <Users size={24} color="#FFFFFF" />
                <Text className="ml-2 text-white font-semibold">Join Group</Text>
              </TouchableOpacity>
            </View>

            {/* Your Groups */}
            <View className="bg-white rounded-lg p-4 shadow">
              <Text className="text-lg font-semibold mb-4">Your Groups</Text>
              {groups.map((group) => (
                <TouchableOpacity key={group.id} className="flex-row items-center justify-between py-3 border-b border-gray-200">
                  <View className="flex-row items-center">
                    <View className="w-10 h-10 rounded-full bg-blue-100 items-center justify-center mr-3">
                      <Users size={20} color="#3B82F6" />
                    </View>
                    <View>
                      <Text className="font-semibold">{group.name}</Text>
                      <Text className="text-gray-500 text-sm">{group.members} members</Text>
                    </View>
                  </View>
                  <View className="items-end">
                    <Text className="font-semibold text-green-500">${group.totalSavings}</Text>
                    <Text className="text-gray-500 text-sm">Total Savings</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            {/* Financial Advisors */}
            <View className="bg-white rounded-lg p-4 shadow">
              <Text className="text-lg font-semibold mb-4">Financial Advisors</Text>
              {advisors.map((advisor) => (
                <TouchableOpacity key={advisor.id} className="flex-row items-center justify-between py-3 border-b border-gray-200">
                  <View className="flex-row items-center">
                    <View className="w-10 h-10 rounded-full bg-green-100 items-center justify-center mr-3">
                      <Briefcase size={20} color="#10B981" />
                    </View>
                    <View>
                      <Text className="font-semibold">{advisor.name}</Text>
                      <Text className="text-gray-500 text-sm">{advisor.specialty}</Text>
                    </View>
                  </View>
                  <View className="items-end">
                    <Text className="font-semibold text-blue-500">{advisor.rating}</Text>
                    <Text className="text-gray-500 text-sm">Rating</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            {/* Community Challenges */}
            <View className="bg-white rounded-lg p-4 shadow mb-28">
              <Text className="text-lg font-semibold mb-4">Community Challenges</Text>
              <TouchableOpacity className="bg-yellow-100 rounded-lg p-3 flex-row items-center">
                <View className="w-10 h-10 rounded-full bg-yellow-200 items-center justify-center mr-3">
                  <DollarSign size={20} color="#D97706" />
                </View>
                <View className="flex-1">
                  <Text className="font-semibold">30-Day Saving Challenge</Text>
                  <Text className="text-gray-500 text-sm">Join 500+ members in saving $500 this month!</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommunityPage;

