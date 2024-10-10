import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Add = () => {
  // State variables
  const [categoryName, setCategoryName] = useState('');
  const [expenseDescription, setExpenseDescription] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Handle creating a new category
  const handleCreateCategory = () => {
    if (!categoryName.trim()) {
      Alert.alert('Error', 'Please enter a category name');
      return;
    }
    // Submit category name to your backend or Neon DB
    // For now, we'll just log it
    console.log('Category created:', categoryName);
    setCategoryName(''); // Clear the input
  };

  // Handle creating a new expense
  const handleCreateExpense = () => {
    if (!expenseDescription.trim() || !expenseAmount.trim()) {
      Alert.alert('Error', 'Please enter both description and amount');
      return;
    }
    // Submit the expense data (description, amount) to your backend or Neon DB
    console.log('Expense created:', {
      category: selectedCategory,
      description: expenseDescription,
      amount: expenseAmount,
    });
    setExpenseDescription('');
    setExpenseAmount('');
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      {/* Create Category Section */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Create Category</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            marginTop: 10,
            borderRadius: 5,
          }}
          placeholder="Enter category name"
          value={categoryName}
          onChangeText={setCategoryName}
        />
        <Button title="Create Category" onPress={handleCreateCategory} />
      </View>

      {/* Create Expense Section */}
      <View>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Create Expense</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            marginTop: 10,
            borderRadius: 5,
          }}
          placeholder="Enter description"
          value={expenseDescription}
          onChangeText={setExpenseDescription}
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            marginTop: 10,
            borderRadius: 5,
          }}
          placeholder="Enter amount"
          keyboardType="numeric"
          value={expenseAmount}
          onChangeText={setExpenseAmount}
        />

        {/* Dropdown for Category Selection */}
        <Text style={{ marginTop: 10 }}>Select Category:</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            marginTop: 5,
            borderRadius: 5,
          }}
          placeholder="Select category"
          value={selectedCategory}
          onChangeText={setSelectedCategory}
        />

        <Button title="Create Expense" onPress={handleCreateExpense} />
      </View>
    </SafeAreaView>
  );
};

export default Add;
