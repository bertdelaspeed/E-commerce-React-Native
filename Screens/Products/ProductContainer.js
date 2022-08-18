import {
  StyleSheet,
  View,
  // Text,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  Icon,
  Item,
  Input,
  Text,
  NativeBaseProvider,
  Box,
} from "native-base";

// const data = require("");
import data from "../../assets/data/products.json";
import ProductList from "./ProductList";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <NativeBaseProvider>
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Icon name="ios-people" />
        </Header>

        <View style={styles.container}>
          <Text>Product Container</Text>
          <View style={styles.listContainer}>
            <FlatList
              horizontal
              data={products}
              renderItem={({ item }) => (
                <ProductList key={item.id} item={item} />
              )}
              keyExtractor={(item) => item.name}
            />
          </View>
        </View>
      </Container>
    </NativeBaseProvider>
  );
};

export default ProductContainer;

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  listContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
