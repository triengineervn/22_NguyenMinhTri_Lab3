import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { RadioButton } from "react-native-paper";

export default function Screen6() {
  const [name, onChangeName] = React.useState("");
  const [phone, onChangePhone] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [hidePass, setHidePass] = React.useState(false);
  const [password, onChangePassword] = React.useState("");
  const [birthday, onChangeBirthday] = React.useState("");
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>REGISTER</Text>
      <TextInput
        style={styles.input}
        value={name}
        placeholder="Name"
        onChangeText={onChangeName}
      />
      <TextInput
        style={styles.input}
        value={phone}
        placeholder="Phone"
        onChangeText={onChangePhone}
      />
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Email"
        onChangeText={onChangeEmail}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Password"
        onChangeText={onChangePassword}
        outlineColor="black"
        returnKeyType="next"
        mode="outlined"
        secureTextEntry={hidePass ? true : false}
        right={
          <TextInput.Icon name="eye" onPress={() => setHidePass(!hidePass)} />
        }
      />
      <TextInput
        placeholder="Birthday"
        style={styles.input}
        value={birthday}
        onChangeText={onChangeBirthday}
      />
      <View style={{ flexDirection: "row", gap: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RadioButton value="Male" />
          <Text style={{ fontSize: 20, fontWeight: 600 }}>Male</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RadioButton value="Female" />
          <Text style={{ fontSize: 20, fontWeight: 600 }}>Female</Text>
        </View>
      </View>
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
      <Text style={styles.txtStyle}>
        When you agree to terms and conditions
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(49,170,82,0.19)",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 62,
  },
  input: {
    width: "100%",
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: "#CAE1D1",
  },
  btnLogin: {
    width: "100%",
    backgroundColor: "#C34E3B",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 32,
  },
  txtStyle: {
    marginTop: 12,
  },
  loginWith: {
    marginTop: 20,
    flexDirection: "row",
  },
  itemLogin: {
    padding: 12,
  },
});
