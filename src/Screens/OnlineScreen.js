import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const OnlineScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>online shopping</Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.text2}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </View>
      <View style={styles.image}>
        <Image source={require("../../assets/bbb.png")} style={styles.img} />
      </View>
      <View style={styles.btn}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("addToCart");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("online");
          }}
        ></TouchableOpacity>
        <View style={styles.navBarContainer}>
          <View style={styles.navBarActive}></View>
          <View style={styles.navBar}></View>
          <View style={styles.navBar}></View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("addToCart");
          }}
        >
          <Text style={styles.navText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnlineScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    flex: 1,
  },
  titleText: {
    fontSize: 30,
    textTransform: "uppercase",
    paddingVertical: 20,
    paddingHorizontal: 30,
    fontWeight: "bold",
  },
  text: {
    flex: 2,
  },
  text2: {
    fontSize: 18,
    paddingHorizontal: 10,
  },
  image: {
    flex: 4,
  },
  img: {
    resizeMode: "stretch",
    width: 400,
    height: 350,
    justifyContent: "center",
    alignSelf: "center",
    paddingBottom: 20,
  },
  btn: {
    flex: 2,
  },
  button: {
    width: 200,
    height: 60,
    borderRadius: 5,
    backgroundColor: "#FF00D1",
    alignSelf: "center",
    marginVertical: 30,
  },
  buttonText: {
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
    paddingVertical: 10,
    fontWeight: "bold",
  },
  navContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  navText: {
    fontSize: 24,
    color: "#8B68A4",
  },
  navBarContainer: {
    flexDirection: "row",
  },
  navBar: {
    width: 20,
    height: 10,
    backgroundColor: "#D8D8D8",
    borderRadius: 10,
    margin: 2,
  },
  navBarActive: {
    width: 20,
    height: 10,
    backgroundColor: "#FF00D1",
    borderRadius: 10,
    margin: 2,
  },
});
