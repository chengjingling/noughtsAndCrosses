import { StyleSheet, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View
          style={[
            styles.col,
            styles.boxBottom,
            styles.boxRight,
            styles.noughtBox,
          ]}
        >
          <Image
            source={require("./assets/letter-o.png")}
            style={styles.letter}
          />
        </View>
        <View
          style={[
            styles.col,
            styles.boxBottom,
            styles.boxRight,
            styles.noughtBox,
          ]}
        >
          <Image
            source={require("./assets/letter-o.png")}
            style={styles.letter}
          />
        </View>
        <View style={[styles.col, styles.boxBottom, styles.crossBox]}>
          <Image
            source={require("./assets/letter-x.png")}
            style={styles.letter}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={[styles.col, styles.boxRight, styles.crossBox]}>
          <Image
            source={require("./assets/letter-x.png")}
            style={styles.letter}
          />
        </View>
        <View style={[styles.col, styles.boxRight, styles.noughtBox]}>
          <Image
            source={require("./assets/letter-o.png")}
            style={styles.letter}
          />
        </View>
        <View style={[styles.col, styles.noughtBox]}>
          <Image
            source={require("./assets/letter-o.png")}
            style={styles.letter}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View
          style={[styles.col, styles.boxTop, styles.boxRight, styles.crossBox]}
        >
          <Image
            source={require("./assets/letter-x.png")}
            style={styles.letter}
          />
        </View>
        <View
          style={[styles.col, styles.boxTop, styles.boxRight, styles.crossBox]}
        >
          <Image
            source={require("./assets/letter-x.png")}
            style={styles.letter}
          />
        </View>
        <View style={[styles.col, styles.boxTop, styles.noughtBox]}>
          <Image
            source={require("./assets/letter-o.png")}
            style={styles.letter}
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  row: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },

  boxBottom: {
    borderBottomColor: "black",
    borderBottomWidth: 4,
  },

  boxTop: {
    borderTopColor: "black",
    borderTopWidth: 4,
  },

  boxRight: {
    borderRightColor: "black",
    borderRightWidth: 4,
  },

  col: {
    flex: 1,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },

  noughtBox: {
    backgroundColor: "#ccdaff",
  },

  crossBox: {
    backgroundColor: "#e2ffb3",
  },

  letter: {
    width: 70,
    height: 70,
  },
});
