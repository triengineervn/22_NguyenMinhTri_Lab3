import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.logoContainer]}>
        <Image source={require("../assets/logo.png")} style={[styles.logo]} />
      </View>
      <View style={[styles.formContainer]}>
        <View style={[styles.inputContainer]}>
          <Image source={require("../assets/user.png")} style={[styles.icon]} />
          <TextInput
            placeholder="Please input user name"
            style={[styles.input]}
          />
        </View>
        <View style={[styles.inputContainer]}>
          <Image source={require("../assets/lock.png")} style={[styles.icon]} />
          <TextInput
            placeholder="Please input password"
            style={[styles.input]}
          />
        </View>
        <TouchableOpacity style={[styles.button]}>LOGIN</TouchableOpacity>
        <View style={[styles.helpContainer]}>
          <TouchableOpacity>Register</TouchableOpacity>
          <TouchableOpacity>Forget Password</TouchableOpacity>
        </View>
      </View>
      <View style={styles.ordermethod}>
        <View style={[styles.line]}></View>Order login method
        <View style={[styles.line]}></View>
      </View>
      <View style={styles.orderLogin}>
        <TouchableOpacity>
          <Image
            source={require("../assets/twt.png")}
            style={[styles.iconMethod]}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/wifi.png")}
            style={[styles.iconMethod]}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/fb.png")}
            style={[styles.iconMethod]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: "100px",
    height: "100px",
    paddingHorizontal: "30px",
  },
  formContainer: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "50px",
    borderWidth: "1px",
    borderTopWidth: "0px",
    borderLeftWidth: "0px",
    borderRightWidth: "0px",
    marginBottom: "30px",
  },
  icon: {
    width: "30px",
    height: "30px",
  },
  button: {
    backgroundColor: "blue",
    paddingHorizontal: "30px",
    color: "white",
    textAlign: "center",
    paddingVertical: "10px",
    borderRadius: "10px",
    width: "100%",
  },
  helpContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "20px",
    alignItems: "center",
  },
  input: {
    paddingLeft: "20px",
    width: "100%",
    height: "50px",
  },
  line: {
    borderBottomWidth: "1px",
    borderBottomColor: "blue",
    width: "20%",
    marginVertical: "10px",
  },
  ordermethod: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: "20px",
    width: "80%",
  },
  iconMethod: {
    width: "80px",
    height: "80px",
  },
  orderLogin: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    width: "80%",
    alignItems: "center",
    paddingBottom: "30px",
  },
  logoContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50px",
  },
});
