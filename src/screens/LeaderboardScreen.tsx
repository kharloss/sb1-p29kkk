import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { FishEntry } from '../types';

export default function LeaderboardScreen() {
  const [entries, setEntries] = useState<FishEntry[]>([]);

  useEffect(() => {
    // Fetch leaderboard data
  }, []);

  const renderItem = ({ item, index }: { item: FishEntry; index: number }) => (
    <View className="flex-row p-2 border-b border-gray-200">
      <Image
        source={{ uri: item.photo }}
        className="w-16 h-16 rounded-lg"
      />
      <View className="flex-1 ml-2 justify-center">
        <Text className="font-bold">{item.species}</Text>
        <Text className="text-sm text-gray-600">
          {item.length}" / {item.weight}lbs
        </Text>
      </View>
      <Text className="font-bold">#{index + 1}</Text>
    </View>
  );

  return (
    <View className="flex-1">
      <Text className="text-xl font-bold m-4">Leaderboard</Text>
      <FlatList
        data={entries}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}