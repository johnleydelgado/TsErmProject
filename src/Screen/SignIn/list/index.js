//import liraries
import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { inject, observer } from "mobx-react";

// create a component
const index = ({ store, navigation }) => {
  useEffect(() => {
    const subscriber = navigation.addListener("focus", () => {
      store.getPatient();
    });
    return subscriber;
  }, [navigation]);
  return (
    <View style={styles.container}>
      {store.allPatient.map((item) => {
        return (
          <View key={item._id} style={{ flexDirection: "row" }}>
            <Text style={{ color: "white" }}>{item._id} : </Text>
            <Text style={{ color: "white" }}>{item.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default inject("store")(observer(index));
