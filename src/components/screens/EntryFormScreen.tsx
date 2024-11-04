import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { TextField, Button } from "@nativescript/core";
import * as Geolocation from "@nativescript/geolocation";
import * as Camera from "@nativescript/camera";

export function EntryFormScreen() {
  const [photo, setPhoto] = React.useState("");
  const [species, setSpecies] = React.useState("");
  const [length, setLength] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [location, setLocation] = React.useState(null);

  const takePhoto = async () => {
    const cameraAvailable = await Camera.isAvailable();
    if (cameraAvailable) {
      const image = await Camera.takePicture({
        width: 1024,
        height: 1024,
        keepAspectRatio: true,
        saveToGallery: true
      });
      setPhoto(image.android || image.ios);
    }
  };

  const getCurrentLocation = async () => {
    const hasPermission = await Geolocation.enableLocationRequest();
    if (hasPermission) {
      const loc = await Geolocation.getCurrentLocation({
        desiredAccuracy: 3,
        maximumAge: 5000,
        timeout: 10000
      });
      setLocation(loc);
    }
  };

  const handleSubmit = () => {
    // Implement submission logic
  };

  return (
    <scrollView>
      <flexboxLayout style={styles.container}>
        <label className="text-xl font-bold mb-4">Submit Your Catch</label>
        
        <button
          className="bg-blue-500 text-white p-4 rounded-lg mb-4"
          onTap={takePhoto}
        >
          Take Photo
        </button>
        
        {photo && (
          <image
            src={photo}
            className="w-64 h-64 mb-4 rounded-lg"
          />
        )}
        
        <TextField
          hint="Fish Species"
          text={species}
          onTextChange={(args) => setSpecies(args.value)}
          className="mb-4 w-3/4"
        />
        
        <TextField
          hint="Length (inches)"
          keyboardType="number"
          text={length}
          onTextChange={(args) => setLength(args.value)}
          className="mb-4 w-3/4"
        />
        
        <TextField
          hint="Weight (lbs)"
          keyboardType="number"
          text={weight}
          onTextChange={(args) => setWeight(args.value)}
          className="mb-4 w-3/4"
        />
        
        <button
          className="bg-green-500 text-white p-4 rounded-lg"
          onTap={handleSubmit}
        >
          Submit Entry
        </button>
      </flexboxLayout>
    </scrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
  },
});