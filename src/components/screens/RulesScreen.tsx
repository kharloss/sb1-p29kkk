import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function RulesScreen() {
  return (
    <scrollView>
      <flexboxLayout style={styles.container}>
        <label className="text-2xl font-bold mb-4">Contest Rules</label>
        
        <label className="text-lg font-bold mb-2">Eligible Species</label>
        <label className="mb-4">
          Bass, Trout, Pike, and Walleye
        </label>
        
        <label className="text-lg font-bold mb-2">Requirements</label>
        <label className="mb-1">• Photo must clearly show the entire fish</label>
        <label className="mb-1">• Location services must be enabled</label>
        <label className="mb-1">• Measurements must be accurate</label>
        <label className="mb-4">• One entry per species per day</label>
        
        <label className="text-lg font-bold mb-2">Scoring</label>
        <label className="mb-1">• Length: 1 point per inch</label>
        <label className="mb-1">• Weight: 2 points per pound</label>
        <label className="mb-4">• Bonus: 10 points for catch of the day</label>
        
        <label className="text-lg font-bold mb-2">Prizes</label>
        <label className="mb-1">1st Place: $1000</label>
        <label className="mb-1">2nd Place: $500</label>
        <label className="mb-1">3rd Place: $250</label>
      </flexboxLayout>
    </scrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 20,
  },
});