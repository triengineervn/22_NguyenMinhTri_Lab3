import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-web';
import React from 'react';

export default function Screen5() {
  const [hidePass, setHidePass] = React.useState(true);
  const [password, setPassword] = React.useState('');
  return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>LOGIN</Text>
        <TextInput
          style={styles.input}
          label="Email"
        />
        <TextInput
          style={styles.input}
          label="Password"
          outlineColor="black"
          returnKeyType="next"
          mode="outlined"
          secureTextEntry={hidePass ? true : false}
          onChangeText={password}
          right={
            <TextInput.Icon
              name="eye"
              onPress={() => setHidePass(!hidePass)}
            />
          }
        />
        <TouchableOpacity style={{width:"100%"}} onPress={() => this.onLogin()}>
          <View
            style={styles.btnLogin}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: '600'}}>
              LOGIN
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.txtStyle}>When you agree to terms and conditions</Text>
        <Text style={[styles.txtStyle, {color:"#5D25FA"}]}>For got your password?</Text>
        <Text style={styles.txtStyle}>Or login with</Text>
        <View
          style={styles.loginWith}>
          <View style={[{flex: 1}, styles.itemLogin]}>
            <Text>1</Text>
          </View>
          <View style={[{flex: 2}, styles.itemLogin]}>
            <Text>2</Text>
          </View>
          <View style={[{flex: 3}, styles.itemLogin]}>
            <Text>3</Text>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(49,170,82,0.19)",
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: '#C34E3B',
    alignItems: 'center',
    justifyContent: 'center',
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
  }
});