import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import * as Location from 'expo-location';
import { Camera } from 'expo-camera';

export default function EntryFormScreen() {
  const [photo, setPhoto] = useState('');
  const [species, setSpecies] = useState('');
  const [length, setLength] = useState('');
  const [weight, setWeight] = useState('');
  const [location, setLocation] = useState(null);

  const takePhoto = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === 'granted') {
      const camera = await Camera.takePictureAsync({
        quality: 0.7,
        allowsEditing: true,
        aspect: [1, 1]
      });
      setPhoto(camera.uri);
    }
  };

  const getCurrentLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High
      });
      setLocation(location);
    }
  };

  const handleSubmit = () => {
    // Implement submission logic
  };

  return (
    <ScrollView>
      <View className="p-5 items-center">
        <Text className="text-xl font-bold mb-4">Submit Your Catch</Text>
        
        <TouchableOpacity
          onPress={takePhoto}
          className="bg-blue-500 p-4 rounded-lg mb-4">
          <Text className="text-white">Take Photo</Text>
        </TouchableOpacity>
        
        {photo && (
          <Image
            source={{ uri: photo }}
            className="w-64 h-64 mb-4 rounded-lg"
          />
        )}
        
        <TextInput
          placeholder="Fish Species"
          value={species}
          onChangeText={setSpecies}
          className="w-3/4 p-2 mb-4 border border-gray-300 rounded"
        />
        
        <TextInput
          placeholder="Length (inches)"
          keyboardType="numeric"
          value={length}
          onChangeText={setLength}
          className="w-3/4 p-2 mb-4 border border-gray-300 rounded"
        />
        
        <TextInput
          placeholder="Weight (lbs)"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
          className="w-3/4 p-2 mb-4 border border-gray-300 rounded"
        />
        
        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-green-500 p-4 rounded-lg">
          <Text className="text-white">Submit Entry</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}