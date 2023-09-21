import { StyleSheet, ScrollView, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
export const ScrollViewScreen = () => {
  const [data, setData] = useState([
    { name: "Devin", sdt: "0878002632" },
    { name: "Dan", sdt: "0878002632" },
    { name: "Dominic", sdt: "0878002632" },
    { name: "Jackson", sdt: "0878002632" },
    { name: "James", sdt: "0878002632" },
    { name: "Jackson", sdt: "0878002632" },
    { name: "James", sdt: "0878002632" },
  ]);

  return (
    <SafeAreaView>
      <ScrollView style={styles.content}>
        {data.map((item) => (
          <View style={{ flexDirection: "row" }}>
            <Text>{item.name} </Text>
            <Text> {item.sdt}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    height: 100,
    backgroundColor: "#33CCFF",
    borderRadius: 10,
    paddingLeft: 10,
  },
});
