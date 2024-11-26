import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';

import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRight, DollarSign, CreditCard, Wallet, TrendingUp } from 'lucide-react-native';

export default function Page() {
  const { user } = useUser();

  // Mock data for demonstration
  const balance = 5000;
  const income = 3000;
  const expenses = 2000;
  const recentTransactions = [
    { id: 1, title: 'Grocery Shopping', amount: -150, date: '2023-06-15' },
    { id: 2, title: 'Salary Deposit', amount: 3000, date: '2023-06-14' },
    { id: 3, title: 'Electric Bill', amount: -80, date: '2023-06-13' },
    { id: 4, title: 'Freelance Payment', amount: 500, date: '2023-06-12' },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SignedIn>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F3F4F6' }}>
          <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
            <View style={{ flex: 1 }}>
              {/* Header */}
              <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
                Welcome back, {user?.firstName || 'John'}!
              </Text>

              {/* Balance Overview */}
              <View style={{ backgroundColor: '#3B82F6', borderRadius: 8, padding: 16, marginBottom: 16, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4 }}>
                <Text style={{ color: '#FFF', fontSize: 18, marginBottom: 8 }}>Current Balance</Text>
                <Text style={{ color: '#FFF', fontSize: 36, fontWeight: 'bold' }}>${balance.toLocaleString()}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
                  <View>
                    <Text style={{ color: '#FFF', fontSize: 14 }}>Income</Text>
                    <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '600' }}>+${income.toLocaleString()}</Text>
                  </View>
                  <View>
                    <Text style={{ color: '#FFF', fontSize: 14 }}>Expenses</Text>
                    <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '600' }}>-${expenses.toLocaleString()}</Text>
                  </View>
                </View>
              </View>

              {/* Quick Actions */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
                <TouchableOpacity style={{ backgroundColor: '#FFF', borderRadius: 8, padding: 16, flex: 1, marginRight: 8, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4 }}>
                  <DollarSign size={24} color="#4A5568" />
                  <Text style={{ marginTop: 8, fontWeight: '600' }}>Add Income</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#FFF', borderRadius: 8, padding: 16, flex: 1, marginLeft: 8, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4 }}>
                  <CreditCard size={24} color="#4A5568" />
                  <Text style={{ marginTop: 8, fontWeight: '600' }}>Add Expense</Text>
                </TouchableOpacity>
              </View>

              {/* Recent Transactions */}
              <View style={{ backgroundColor: '#FFF', borderRadius: 8, padding: 16, marginBottom: 16, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <Text style={{ fontSize: 18, fontWeight: '600' }}>Recent Transactions</Text>
                  <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: '#3B82F6', marginRight: 4 }}>View All</Text>
                    <ArrowRight size={16} color="#3B82F6" />
                  </TouchableOpacity>
                </View>
                {recentTransactions.map((transaction) => (
                  <View key={transaction.id} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#E5E7EB' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: transaction.amount > 0 ? '#D1FAE5' : '#FEE2E2', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
                        {transaction.amount > 0 ? <Wallet size={20} color="#10B981" /> : <CreditCard size={20} color="#EF4444" />}
                      </View>
                      <View>
                        <Text style={{ fontWeight: '600' }}>{transaction.title}</Text>
                        <Text style={{ color: '#6B7280', fontSize: 12 }}>{transaction.date}</Text>
                      </View>
                    </View>
                    <Text style={{ fontWeight: '600', color: transaction.amount > 0 ? '#10B981' : '#EF4444' }}>
                      {transaction.amount > 0 ? '+' : '-'}${Math.abs(transaction.amount).toLocaleString()}
                    </Text>
                  </View>
                ))}
              </View>

              {/* Financial Goals */}
              <View style={{ backgroundColor: '#FFF', borderRadius: 8, padding: 16, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, marginBottom: 96}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <Text style={{ fontSize: 18, fontWeight: '600' }}>Financial Goals</Text>
                  <TouchableOpacity>
                    <Text style={{ color: '#3B82F6' }}>Add Goal</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: 8, padding: 12 }}>
                  <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#DBEAFE', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
                    <TrendingUp size={20} color="#3B82F6" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: '600' }}>Emergency Fund</Text>
                    <View style={{ width: '100%', height: 10, backgroundColor: '#E5E7EB', borderRadius: 5, marginTop: 4 }}>
                      <View style={{ width: '70%', height: 10, backgroundColor: '#3B82F6', borderRadius: 5 }} />
                    </View>
                  </View>
                  <Text style={{ marginLeft: 12, fontWeight: '600' }}>70%</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in">
          <Text>Sign In</Text>
        </Link>
        <Link href="/sign-up">
          <Text>Sign Up</Text>
        </Link>
      </SignedOut>
    </SafeAreaView>
  );
}
