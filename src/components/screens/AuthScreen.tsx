import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { TextField, Button } from "@nativescript/core";

export function AuthScreen() {
  const [isLogin, setIsLogin] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {
    // Implement authentication logic
  };

  return (
    <flexboxLayout style={styles.container}>
      <label className="text-2xl font-bold mb-4">
        {isLogin ? "Login" : "Register"}
      </label>
      
      <TextField
        hint="Email"
        keyboardType="email"
        text={email}
        onTextChange={(args) => setEmail(args.value)}
        className="mb-4 w-3/4"
      />
      
      <TextField
        hint="Password"
        secure={true}
        text={password}
        onTextChange={(args) => setPassword(args.value)}
        className="mb-4 w-3/4"
      />
      
      <button
        className="bg-blue-500 text-white p-4 rounded-lg w-3/4"
        onTap={handleSubmit}
      >
        {isLogin ? "Login" : "Register"}
      </button>
      
      <button
        className="mt-4 text-blue-500"
        onTap={() => setIsLogin(!isLogin)}
      >
        {isLogin ? "Need an account? Register" : "Have an account? Login"}
      </button>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});