import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      start_pressed: false,
    };
  }

  startGame = () => {
    this.setState({ start_pressed: true });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.start_pressed ? (
          <ActivityIndicator size="large" color="blue" />
        ) : (
          <>
            <Text style={styles.header}>Puzzle Adventure</Text>
            <TouchableOpacity
              style={styles.butt_start}
              onPress={this.startGame}
            >
              <Text style={styles.sub_header}>Start</Text>
            </TouchableOpacity>
          </>
        )}
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#887",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: "2em",
  },
  sub_header: {
    fontSize: "1.8em",
    color: "white",
  },
  butt_start: {
    width: "50%",
    height: "40",
    textAlign: "center",
    backgroundColor: "#7575F0",
    borderRadius: 45,
  },
});

export default App;
