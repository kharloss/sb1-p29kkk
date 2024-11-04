import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function RulesScreen() {
  return (
    <ScrollView>
      <View className="p-5">
        <Text className="text-2xl font-bold mb-4">Contest Rules</Text>
        
        <Text className="text-lg font-bold mb-2">Eligible Species</Text>
        <Text className="mb-4">
          Bass, Trout, Pike, and Walleye
        </Text>
        
        <Text className="text-lg font-bold mb-2">Requirements</Text>
        <Text className="mb-1">• Photo must clearly show the entire fish</Text>
        <Text className="mb-1">• Location services must be enabled</Text>
        <Text className="mb-1">• Measurements must be accurate</Text>
        <Text className="mb-4">• One entry per species per day</Text>
        
        <Text className="text-lg font-bold mb-2">Scoring</Text>
        <Text className="mb-1">• Length: 1 point per inch</Text>
        <Text className="mb-1">• Weight: 2 points per pound</Text>
        <Text className="mb-4">• Bonus: 10 points for catch of the day</Text>
        
        <Text className="text-lg font-bold mb-2">Prizes</Text>
        <Text className="mb-1">1st Place: $1000</Text>
        <Text className="mb-1">2nd Place: $500</Text>
        <Text className="mb-1">3rd Place: $250</Text>
      </View>
    </ScrollView>
  );
}