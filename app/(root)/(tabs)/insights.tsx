import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRight, PieChart, BarChart, TrendingUp } from 'lucide-react-native';

const InsightsPage = () => {
  // Mock data for demonstration
  const totalExpenses = 2500;
  const categories = [
    { name: 'Housing', amount: 1000, percentage: 40 },
    { name: 'Food', amount: 500, percentage: 20 },
    { name: 'Transportation', amount: 300, percentage: 12 },
    { name: 'Entertainment', amount: 200, percentage: 8 },
    { name: 'Others', amount: 500, percentage: 20 },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F3F4F6' }}>
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 32 }}>
        <View style={{ marginBottom: 16 }}>
          {/* Header */}
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Insights</Text>

          {/* Expense Overview */}
          <View style={{ backgroundColor: 'white', borderRadius: 8, padding: 16, shadowOpacity: 0.1, marginBottom: 16 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <Text style={{ fontSize: 18, fontWeight: '600' }}>Expense Overview</Text>
              <PieChart size={24} color="#4A5568" />
            </View>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>${totalExpenses}</Text>
            <Text style={{ color: '#718096', marginBottom: 16 }}>Total Expenses This Month</Text>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 16 }}>
              <Text style={{ color: '#3B82F6', marginRight: 8 }}>View Details</Text>
              <ArrowRight size={16} color="#3B82F6" />
            </TouchableOpacity>
          </View>

          {/* Category Breakdown */}
          <View style={{ backgroundColor: 'white', borderRadius: 8, padding: 16, shadowOpacity: 0.1, marginBottom: 16 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <Text style={{ fontSize: 18, fontWeight: '600' }}>Category Breakdown</Text>
              <BarChart size={24} color="#4A5568" />
            </View>
            {categories.map((category, index) => (
              <View key={index} style={{ marginBottom: 12 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
                  <Text>{category.name}</Text>
                  <Text>${category.amount}</Text>
                </View>
                <View style={{ height: 8, backgroundColor: '#E2E8F0', borderRadius: 4 }}>
                  <View style={{ height: '100%', width: `${category.percentage}%`, backgroundColor: '#3B82F6', borderRadius: 4 }} />
                </View>
              </View>
            ))}
          </View>

          {/* Spending Trends */}
          <View style={{ backgroundColor: 'white', borderRadius: 8, padding: 16, shadowOpacity: 0.1, marginBottom: 16 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <Text style={{ fontSize: 18, fontWeight: '600' }}>Spending Trends</Text>
              <TrendingUp size={24} color="#4A5568" />
            </View>
            <Text style={{ color: '#718096', marginBottom: 16 }}>Your spending has increased by 5% compared to last month.</Text>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 16 }}>
              <Text style={{ color: '#3B82F6', marginRight: 8 }}>Analyze Trends</Text>
              <ArrowRight size={16} color="#3B82F6" />
            </TouchableOpacity>
          </View>

          {/* Quick Actions */}
          <View style={{ backgroundColor: 'white', borderRadius: 8, padding: 16, shadowOpacity: 0.1, marginBottom: 66}}>
            <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 16 }}>Quick Actions</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#3B82F6', borderRadius: 8, paddingVertical: 12, marginRight: 8 }}>
                <Text style={{ color: 'white', fontWeight: '600' }}>Add Expense</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#10B981', borderRadius: 8, paddingVertical: 12 }}>
                <Text style={{ color: 'white', fontWeight: '600' }}>Set Budget</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InsightsPage;
