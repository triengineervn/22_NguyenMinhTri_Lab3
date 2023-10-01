import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function Screen4() {
  return (
    <View style={styles.primary}>
      <View style={styles.container}>
        <Text style={{fontSize: 60, fontWeight: 700}}>CODE</Text>
        <Text style={styles.titleStyle}>VERIFICATION</Text>
        <Text style={styles.txtStyle}>Enter ontime password sent on
++849092605798</Text>
        <View style={styles.boxRow}>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
        </View>
        <View style={styles.btnRow}>
          <TouchableOpacity onPress={null} style={{flex: 1}}>
            <View
              style={styles.btnStyle}>
              <Text style={{color: 'black', fontSize: 18, fontWeight: '700'}}>
                VERIFY CODE
              </Text>
            </View>
          </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    primary: {
        width: "100%",
        height: "100%",
        backgroundColor: "#cbf4f6"
        },
        container: {
        flex: 1,
        backgroundColor: '#cbf4f6',
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
    input: {
        width: "100%",
        height: 40,
        marginTop: 22,
        padding: 10,
        backgroundColor: "#CAE1D1",
    },
  boxRow: {
    marginTop: 24,
    flexDirection: "row",
    width: "100%",
      justifyContent: "center",
    },
    box: {
    width: 50,
    height: 50,
    borderWidth: 1,
    },
})