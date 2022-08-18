import { StyleSheet, View } from "react-native";
import React from "react";
import { Content, Left, Body, ListItem, Thumbnail, Text } from "native-base";

const SearchedProduct = (props) => {
  const { productsFiltered } = props;
  return (
    <Content>
      {productsFiltered.length > 0 ? (
        productsFiltered.map((product) => (
          <ListItem key={product._id} avatar>
            <Left>
              <Thumbnail source />
            </Left>
            <Body>
              <Text>{product.name}</Text>
              <Text note>{product.price}</Text>
            </Body>
          </ListItem>
        ))
      ) : (
        <Text>No products found</Text>
      )}
    </Content>
  );
};

export default SearchedProduct;

const styles = StyleSheet.create({});
