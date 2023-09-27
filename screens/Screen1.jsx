import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-web';

export default function Screen1() {
  return (
    <View style={styles.primary}>
      <View style={styles.container}>
        <Entypo name="circle" size={140}/>
        <Text style={styles.titleStyle}>grow<br/> your business</Text>
        <Text style={styles.txtStyle}>We will help you to grow your business using
          online server</Text>
        <View style={styles.btnRow}>
          <TouchableOpacity onPress={null} style={{flex: 1, marginRight: 12}}>
            <View
              style={styles.btnStyle}>
              <Text style={{color: 'white', fontSize: 18, fontWeight: '600'}}>
                LOGIN
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={null} style={{flex: 1, marginLeft: 12}}>
            <View
              style={styles.btnStyle}>
              <Text style={{color: 'white', fontSize: 18, fontWeight: '600'}}>
                SIGN UP
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  primary: {
    width: "100%",
    height: "100%",
    backgroundColor: "#00CCF9"
  },
  container: {
    flex: 1,
    backgroundColor: '#00CCF9',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 29,
  },
  titleStyle: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: '700',
    textTransform: "uppercase",
    marginTop: 52,
  },
  txtStyle: {
    fontSize: 15,
    fontWeight: 700,
    textAlign: "center",
    marginTop: 62,
  },
  btnRow: {
    width: "100%",
    paddingTop: 45,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnStyle: {
    flex: 1,
    backgroundColor: '#E3C000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 32,
    borderRadius: 12,
  },
});
