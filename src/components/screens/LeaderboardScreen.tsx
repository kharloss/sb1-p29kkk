import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FishEntry } from "../../types";

export function LeaderboardScreen() {
  const [entries, setEntries] = React.useState<FishEntry[]>([]);

  React.useEffect(() => {
    // Fetch leaderboard data
  }, []);

  return (
    <flexboxLayout style={styles.container}>
      <label className="text-xl font-bold mb-4">Leaderboard</label>
      
      <listView
        items={entries}
        className="w-full"
        itemTemplate={(item: FishEntry) => (
          <gridLayout columns="auto, *, auto" className="p-2 border-b border-gray-200">
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
            </stackLayout>
            <label col="2" className="font-bold">
              #{entries.indexOf(item) + 1}
            </label>
          </gridLayout>
        )}
      />
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    padding: 20,
  },
});