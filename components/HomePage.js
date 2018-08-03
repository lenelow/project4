import React, { Component } from "react";
import { Container } from "native-base";
import {
  AppRegistry,
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default class HomePage extends Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.MainContainer}>
        <Text style={styles.header}>ASOIAF</Text>
        <Text style={styles.text}>
          A Searchable Overview Involving All Families
        </Text>
        <View
          style={{
            flexWrap: "wrap",
            alignItems: "flex-start",
            flexDirection: "column"
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigate("Houses")}
            style={{ marginBottom: 15, marginTop: 100 }}
          >
            <LinearGradient
              colors={["#1FE1FF", "#f83600", "#fe8c00"]}
              style={styles.LinearGradientStyle}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0.9 }}
              locations={[0.2, 0.6, 0.9]}
            >
              <Text style={styles.buttonText}>Houses</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate("Characters")}>
            <LinearGradient
              colors={["#1FE1FF", "#f83600", "#fe8c00"]}
              style={styles.LinearGradientStyle}
            >
              <Text style={styles.buttonText}>People</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
    backgroundColor: "#C4E3E8"
  },
  header: {
    backgroundColor: "white",
    paddingBottom: -20,
    borderBottomWidth: -1,
    textAlign: "center",
    marginBottom: 30,
    height: 100,
    width: 310,
    margin: 0,
    padding: 0,
    marginRight: 0,
    backgroundColor: "#C4E3E8",
    fontSize: 40,
    fontFamily: "Zapfino",
    fontWeight: "bold"
  },
  LinearGradientStyle: {
    shadowOffset: {
      width: 8,
      height: 10
    },
    shadowColor: "grey",
    shadowOpacity: 1.0,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  TouchableOpacity: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 300
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "black",
    backgroundColor: "transparent",
    fontWeight: "bold"
  },
  text: {
    marginHorizontal: 27,
    fontSize: 16
  }
});

AppRegistry.registerComponent("ASOIAF", () => HomePage);
