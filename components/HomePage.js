import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { Header, Container, Title, Button } from "native-base";

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
        <Text>A Searchable Overview Involving All Families</Text>
        <Button style={styles.button} onPress={() => navigate("Houses")}>
          <Text> Who's Who? </Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#91AEBF",
    marginLeft: 140,
    marginTop: 150,
    padding: 10
  },
  title: {
    fontSize: 50,
    paddingBottom: 30
  }
});

AppRegistry.registerComponent("ASOIAF", () => HomePage);
