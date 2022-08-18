import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Button,
} from "react-native";
import React from "react";

const { width } = Dimensions.get("window");

const ProductCard = (props) => {
  const { name, price, image, countInStock } = props;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: image ? image : "https://via.placeholder.com/150" }}
      />
      <View style={styles.card} />
      <Text style={styles.title}>
        {name.length > 15 ? name.substring(0, 15) + "..." : name}
      </Text>
      <Text style={styles.price}>$ {price}</Text>
      {countInStock > 0 ? (
        <View style={{ marginBottom: 80, marginTop: 5 }}>
          <Button title="Add to Cart" color="green" />
        </View>
      ) : (
        <View>
          <Text style={{ marginBottom: 60 }}>Out of Stock</Text>
        </View>
      )}
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: width / 1.7,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginLeft: 10,
    marginBottom: 5,
    alignItems: "center",
    elevation: 8,
    backgroundColor: "white",
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: "transparent",
    position: "absolute",
    top: -45,
    flex: 1,
    flexWrap: "wrap",
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 20 - 90,
    backgroundColor: "transparent",
    width: width / 2 - 20 - 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  price: {
    fontSize: 20,
    textAlign: "center",
    color: "orange",
  },
});
