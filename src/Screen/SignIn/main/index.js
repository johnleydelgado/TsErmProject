//import liraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { db } from "../../../Services";
import { inject, observer } from "mobx-react";
const index = ({ store, navigation }) => {
  const TextInputs = ({ title, onChange }) => {
    return (
      <TextInput
        placeholder={title}
        placeholderTextColor="white"
        onChangeText={(txt) => onChange(txt)}
        style={{
          paddingHorizontal: 16,
          width: "80%",
          height: 80,
          borderRadius: 16,
          borderColor: "tomato",
          borderWidth: 1,
          color: "white",
          marginBottom: 16
        }}
      />
    );
  };

  const submitHandler = () => {
    console.log(store.patient.name);
    db.localDB
      .put({
        _id: store.patient.id,
        name: store.patient.name
      })
      .then(function (response) {})
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <TextInputs title="ID" onChange={(text) => (store.patient.id = text)} />
      <TextInputs
        title="NAME"
        onChange={(text) => (store.patient.name = text)}
      />
      <TouchableOpacity
        onPress={() => submitHandler()}
        style={{
          backgroundColor: "tomato",
          height: 68,
          width: "70%",
          borderRadius: 16,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16
        }}>
        <Text style={{ color: "white" }}>SUBMIT</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("list")}
        style={{
          backgroundColor: "tomato",
          height: 68,
          width: "70%",
          borderRadius: 16,
          alignItems: "center",
          justifyContent: "center"
        }}>
        <Text style={{ color: "white" }}>SEE LIST</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default inject("store")(observer(index));
