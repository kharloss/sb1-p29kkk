import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { User, FishEntry } from "../../types";

export function ProfileScreen() {
  const [user, setUser] = React.useState<User | null>(null);
  const [entries, setEntries] = React.useState<FishEntry[]>([]);

  React.useEffect(() => {
    // Fetch user data and entries
  }, []);

  return (
    <scrollView>
      <flexboxLayout style={styles.container}>
        <image
          src={user?.profilePicture || "res://default_avatar"}
          className="w-32 h-32 rounded-full mb-4"
        />
        
        <label className="text-xl font-bold mb-2">
          {user?.username}
        </label>
        
        <label className="text-gray-600 mb-4">
          {user?.email}
        </label>
        
        <label className="text-lg font-bold mt-4 mb-2">
          Your Catches
        </label>
        
        <listView
          items={entries}
          className="w-full"
          itemTemplate={(item: FishEntry) => (
            <gridLayout columns="auto, *" className="p-2 border-b border-gray-200">
              <image
                src={item.photo}
                className="w-16 h-16 rounded-lg"
                col="0"
              />
              <stackLayout col="1" className="ml-2">
                <label className="font-bold">{item.species}</label>
                <label className="text-sm text-gray-600">
                  {item.length}" / {item.weight}lbs
                </label>
                <label className="text-xs text-gray-500">
                  {new Date(item.timestamp).toLocaleDateString()}
                </label>
              </stackLayout>
            </gridLayout>
          )}
        />
      </flexboxLayout>
    </scrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },
});