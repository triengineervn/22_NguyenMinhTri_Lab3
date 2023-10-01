import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-web";
import { TouchableOpacity } from "react-native";

export default function Screen7() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <View style={{ margin: 15 }}>
        <TextInput placeholder="Name" style={styles.input} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => this.onLogin()}
        >
          <View style={styles.btnLogin}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
              REGISTER
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.txtStyle}>CREATE ACCOUNT</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FBCB00",
  },
  title: {
    marginLeft: 30,
    marginTop: 82,
    marginBottom: 50,
    fontSize: 30,
    fontWeight: 700,
  },
  input: {
    marginTop: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: "#fff",
    fontSize: 16,
    fontWeight: 600,
    backgroundColor: "#fbbf24",
  },
  btnLogin: {
    width: "100%",
    backgroundColor: "#060000",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 59,
  },
  txtStyle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 700,
    marginTop: 45,
  },
});
