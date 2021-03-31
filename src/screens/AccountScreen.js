import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { Context } from "../context/authContext";
import { SafeAreaView } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";
import Spacer from "../components/Spacer";
// function component

const AccountScreen = () => {
  const { signout } = useContext(Context);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={styles.heading}> Account Screen </Text>
      <Spacer />
      <Button title="Signout" onPress={signout} />
    </SafeAreaView>
  );
};

// Styling Options

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={20} />,
};

// Exporting the functional component

export default AccountScreen;
