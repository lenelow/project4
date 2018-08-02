import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Header, Container, Title } from "native-base";

export default class HomePage extends Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.container}>
        <Header>
          <Title style={styles.title}>ASOIAF</Title>
        </Header>
        <Text style={styles.text}>
          A Searchable Overview Involving All Families
        </Text>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate("Houses")}
          >
            <Text style={styles.buttonText}> Who's Who? </Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#91AEBF",
    paddingVertical: 20,
    alignItems: "center",
    marginHorizontal: 45,
    marginTop: 200,
    marginBottom: -30,
    borderRadius: 15
  },
  buttonText: {
    fontSize: 22
  },
  title: {
    fontSize: 50,
    marginBottom: -30
  },
  text: {
    marginVertical: 30,
    marginHorizontal: 27,
    fontSize: 16
  }
});

AppRegistry.registerComponent("ASOIAF", () => HomePage);
