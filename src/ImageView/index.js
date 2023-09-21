import { View, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";

const ImgView = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/background03.jpg")}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height / 3,
    width: Dimensions.get("window").width / 2,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImgView;
