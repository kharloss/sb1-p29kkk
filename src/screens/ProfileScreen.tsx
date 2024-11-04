import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import { User, FishEntry } from '../types';

export default function ProfileScreen() {
  const [user, setUser] = useState<User | null>(null);
  const [entries, setEntries] = useState<FishEntry[]>([]);

  useEffect(() => {
    // Fetch user data and entries
  }, []);

  const renderEntry = ({ item }: { item: FishEntry }) => (
    <View className="flex-row p-2 border-b border-gray-200">
      <Image
        source={{ uri: item.photo }}
        className="w-16 h-16 rounded-lg"
      />
      <View className="flex-1 ml-2">
        <Text className="font-bold">{item.species}</Text>
        <Text className="text-sm text-gray-600">
          {item.length}" / {item.weight}lbs
        </Text>
        <Text className="text-xs text-gray-500">
          {new Date(item.timestamp).toLocaleDateString()}
        </Text>
      </View>
    </View>
  );

  return (
    <ScrollView>
      <View className="items-center p-5">
        <Image
          source={{ uri: user?.profilePicture }}
          className="w-32 h-32 rounded-full mb-4"
        />
        
        <Text className="text-xl font-bold mb-2">
          {user?.username}
        </Text>
        
        <Text className="text-gray-600 mb-4">
          {user?.email}
        </Text>
        
        <Text className="text-lg font-bold mt-4 mb-2 self-start">
          Your Catches
        </Text>
        
        <FlatList
          data={entries}
          renderItem={renderEntry}
          keyExtractor={(item) => item.id}
          className="w-full"
        />
      </View>
    </ScrollView>
  );
}