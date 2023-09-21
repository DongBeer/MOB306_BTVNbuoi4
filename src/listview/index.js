import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";

export const ListviewScreen = () => {
  const [data, setData] = useState([
    { name: "Devin", sdt: "0878002632" },
    { name: "Dan", sdt: "0878002632" },
    { name: "Dominic", sdt: "0878002632" },
    { name: "Jackson", sdt: "0878002632" },
    { name: "James", sdt: "0878002632" },
  ]);

  let Email;
  let Pass;

  // const [Email, setEmail] = useState("");
  // const [Pass, setPass] = useState("");

  const handleAler = (item) => {
    alert(`${item.name} - ${item.sdt}`);
    console.log(item);
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flastlist}
        data={data}
        extraData={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleAler(item)}>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "green",
              }}
            >
              <Text style={styles.item}>{item.name}</Text>
              <Text style={styles.item}>{item.sdt}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "center",
        }}
      >
        <Button
          title="Add"
          onPress={() => {
            // data.push({ name: "Long", sdt: "0987555889" });
            // setData(data);

            const newItem = { name: "Long", sdt: "0987555889" };
            setData((prevData) => [...prevData, newItem]);
          }}
        />
        <Button
          title="Delete"
          onPress={() => {
            // const a = data.splice(0, 1);
            // setData(a);
            const newData = [...data];
            newData.shift(); // Xóa phần tử đầu tiên
            setData(newData);
            console.log(newData.length);
          }}
        />
      </View>
      <View style={styles.viewInput}>
        <Text style={{ margin: 20 }}>Nhập Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            Email = value;
          }}
          value={Email}
        />
      </View>
      <View style={styles.viewInput}>
        <Text style={{ marginLeft: 20 }}>Mật khẩu</Text>
        <TextInput
          style={styles.input1}
          onChangeText={(value) => {
            Pass = value;
          }}
          value={Pass}
          secureTextEntry={true}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => {
            if (Email == "" || Pass == "") {
              Alert.alert("Vui lòng nhập đủ thông tin");
            }
            //  else if (
            //   !Email.match(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]{2,4}$/)
            // )
            //  {
            //   Alert.alert("Email không đúng định dạng");
            // }
            else {
              Alert.alert(
                // "Đăng nhập thành công ☺  " +
                //   "\n" +
                "Email: " + `${Email}` + "\n" + "\tPass: " + `${Pass}`
              );
            }
          }}
        >
          <Text style={styles.btnLoginText}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#fff",
  },
  item: {
    padding: 10,
  },
  input: {
    width: 230,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  input1: {
    marginLeft: 32,
    width: 230,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  viewInput: {
    marginTop: 30,
    alignItems: "center",
    flexDirection: "row",
  },
  flastlist: {
    height: 200,
  },
  btnLogin: {
    width: 120,
    backgroundColor: "#00CCFF",
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  btnLoginText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
