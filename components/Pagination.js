import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/paginator";
import {
  View,
  Text,
  AppRegistry,
  StyleSheet,
  TouchableOpacity
} from "react-native";

class Pagination extends Component {
  back = () => {
    const { pageNumber } = this.props;
    const prevPage = pageNumber - 1;
    this.props.handlePagination(prevPage, 14);
  };

  advance = () => {
    const { pageNumber } = this.props;
    const nextPage = pageNumber + 1;
    this.props.handlePagination(nextPage, 14);
  };

  left() {
    return (
      <View disabled={this.props.page === 1 ? "disabled" : ""}>
        <TouchableOpacity style={styles.backButton} onPress={this.back}>
          <Text>Prev</Text>
        </TouchableOpacity>
      </View>
    );
  }

  right() {
    const { pageSize } = this.props;

    const end = this.props.houses.length !== pageSize ? true : false;

    return (
      <View disabled={end}>
        <TouchableOpacity style={styles.forwardButton} onPress={this.advance}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.paginationButtons}>
        {this.left()}
        <Text style={styles.page}>Page {this.props.pageNumber}</Text>
        {this.right()}
      </View>
    );
  }
}

const mapStateToProps = ({ pagination, houses, characters }) => {
  const { pageSize, pageNumber } = pagination;
  return {
    houses: houses.houses,
    characters: characters.characters,
    pageSize,
    pageNumber
  };
};

export default connect(
  mapStateToProps,
  actions
)(Pagination);

const styles = StyleSheet.create({
  paginationButtons: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: 12
  },
  backButton: {
    backgroundColor: "#91AEBF",
    padding: 5,
    borderRadius: 5
  },
  forwardButton: {
    backgroundColor: "#91AEBF",
    padding: 5,
    borderRadius: 5
  },
  page: {
    marginHorizontal: 7,
    paddingTop: 5
  }
});

AppRegistry.registerComponent("ASOIAF", () => Pagination);
