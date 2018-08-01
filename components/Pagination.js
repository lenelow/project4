import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/paginator";
import { View, Text } from "react-native";
import { Button } from "native-base";

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
        <Button onPress={this.back}>
          <Text>Symbol</Text>
        </Button>
      </View>
    );
  }

  right() {
    const { pageSize } = this.props;

    const end = this.props.houses.length !== pageSize ? true : false;

    return (
      <View disabled={end}>
        <Button onPress={this.advance}>
          <Text>Symbol</Text>
        </Button>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.left()}
        <Text>Page {this.props.pageNumber}</Text>
        {this.right()}
      </View>
    );
  }
}

const mapStateToProps = ({ pagination, houses }) => {
  const { pageSize, pageNumber } = pagination;
  return {
    houses: houses.houses,
    pageSize,
    pageNumber
  };
};

export default connect(
  mapStateToProps,
  actions
)(Pagination);
