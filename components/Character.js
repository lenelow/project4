import React, { Component } from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { connect } from "react-redux";

class Character extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAndHandleCharacter(this.props.match.params.id);
  }

  render() {
    return (
      <View>
        <Text>{this.props.characters.name}</Text>
        <Text>{this.props.characters.culture}</Text>
        <Text>{this.props.characters.titles}</Text>
        <Text>{this.props.characters.aliases}</Text>
        <Text>{this.props.characters.father}</Text>
        <Text>{this.props.characters.mouther}</Text>
        <Text>{this.props.characters.spouse}</Text>
        <Text>{this.props.characters.allegiances}</Text>
      </View>
    );
  }
}
const mapStateToProps = ({ characters }) => ({
  character: characters.character
});

const mapDispatchToProps = dispatch => ({
  fetchAndHandleCharacter: id => dispatch(fetchAndHandleCharacter(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Character);

AppRegistry.registerComponent("ASOIAF", () => Character);
