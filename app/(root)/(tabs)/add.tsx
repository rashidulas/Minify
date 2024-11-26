import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DollarSign, Calendar, Tag, FileText } from 'lucide-react-native';

const AddTransactionPage = () => {
  const [isExpense, setIsExpense] = useState(true);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = () => {
    // Implement transaction submission logic here
    console.log('Transaction submitted:', { isExpense, amount, category, date, note });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="flex-1">
        <View className="p-4">
          <View className="space-y-4">
            {/* Header */}
            <Text className="text-2xl font-bold">Add Transaction</Text>

            {/* Transaction Type Toggle */}
            <View className="flex-row items-center justify-between bg-white rounded-lg p-4 shadow">
              <Text className="font-semibold">Transaction Type</Text>
              <View className="flex-row items-center">
                <Text className={`mr-2 ${isExpense ? 'text-red-500 font-semibold' : 'text-gray-500'}`}>Expense</Text>
                <Switch
                  value={!isExpense}
                  onValueChange={(value) => setIsExpense(!value)}
                  trackColor={{ false: '#EF4444', true: '#10B981' }}
                  thumbColor={isExpense ? '#F87171' : '#34D399'}
                />
                <Text className={`ml-2 ${!isExpense ? 'text-green-500 font-semibold' : 'text-gray-500'}`}>Income</Text>
              </View>
            </View>

            {/* Amount Input */}
            <View className="bg-white rounded-lg p-4 shadow">
              <Text className="font-semibold mb-2">Amount</Text>
              <View className="flex-row items-center border-b border-gray-300 pb-2">
                <DollarSign size={20} color="#4B5563" />
                <TextInput
                  className="flex-1 ml-2 text-lg"
                  placeholder="0.00"
                  keyboardType="numeric"
                  value={amount}
                  onChangeText={setAmount}
                />
              </View>
            </View>

            {/* Category Input */}
            <View className="bg-white rounded-lg p-4 shadow">
              <Text className="font-semibold mb-2">Category</Text>
              <View className="flex-row items-center border-b border-gray-300 pb-2">
                <Tag size={20} color="#4B5563" />
                <TextInput
                  className="flex-1 ml-2"
                  placeholder="Select category"
                  value={category}
                  onChangeText={setCategory}
                />
              </View>
            </View>

            {/* Date Input */}
            <View className="bg-white rounded-lg p-4 shadow">
              <Text className="font-semibold mb-2">Date</Text>
              <View className="flex-row items-center border-b border-gray-300 pb-2">
                <Calendar size={20} color="#4B5563" />
                <TextInput
                  className="flex-1 ml-2"
                  placeholder="Select date"
                  value={date}
                  onChangeText={setDate}
                />
              </View>
            </View>

            {/* Note Input */}
            <View className="bg-white rounded-lg p-4 shadow">
              <Text className="font-semibold mb-2">Note</Text>
              <View className="flex-row items-center border-b border-gray-300 pb-2">
                <FileText size={20} color="#4B5563" />
                <TextInput
                  className="flex-1 ml-2"
                  placeholder="Add a note"
                  multiline
                  numberOfLines={3}
                  value={note}
                  onChangeText={setNote}
                />
              </View>
            </View>

            {/* Submit Button */}
            <TouchableOpacity
              className="bg-blue-500 rounded-lg p-4 shadow items-center"
              onPress={handleSubmit}
            >
              <Text className="text-white font-semibold text-lg">Add Transaction</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddTransactionPage;

