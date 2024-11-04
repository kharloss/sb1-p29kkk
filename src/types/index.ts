export interface User {
  id: string;
  email: string;
  username: string;
  profilePicture?: string;
}

export interface FishEntry {
  id: string;
  userId: string;
  species: string;
  length: number;
  weight: number;
  photo: string;
  location: {
    latitude: number;
    longitude: number;
  };
  timestamp: Date;
  verified: boolean;
}