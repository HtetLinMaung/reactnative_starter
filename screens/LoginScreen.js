import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Dimensions,
} from "react-native";
import loginImage from "../assets/login.png";

import StyledButton from "../components/StyledButton";
import Text from "../components/Text";

const screenHeight = Dimensions.get("window").height;

const LoginScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <View style={styles.root}>
          <View style={styles.firstContainer}>
            <Image source={loginImage} style={styles.image} />
            <Text style={styles.title}>Login</Text>

            <Text style={styles.label}>Username</Text>
            <TextInput style={styles.input} />

            <Text style={styles.label}>Password</Text>
            <TextInput secureTextEntry={true} style={styles.input} />
          </View>

          <View style={styles.secondContainer}>
            <StyledButton
              style={{
                marginHorizontal: 10,
                ...Platform.select({
                  ios: {
                    marginHorizontal: 20,
                  },
                }),
              }}
              color="#3E3C58"
              rounded={true}
              onPress={() => console.log("login")}
            >
              Login
            </StyledButton>

            <Text style={{ textAlign: "center", marginVertical: 10 }}>Or</Text>

            <StyledButton
              style={{
                marginHorizontal: 10,
                borderColor: "#3E3C58",
                ...Platform.select({
                  ios: {
                    marginHorizontal: 20,
                  },
                }),
              }}
              rounded={true}
              outlined={true}
              onPress={() => console.log("signup")}
            >
              SignUp
            </StyledButton>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 290,
    resizeMode: "contain",
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    borderColor: "#c4c4c4",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    ...Platform.select({
      android: {
        marginHorizontal: 10,
        paddingVertical: 5,
      },
      ios: {
        marginHorizontal: 20,
        paddingVertical: 10,
      },
    }),
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    ...Platform.select({
      android: {
        paddingLeft: 10,
      },
      ios: {
        paddingLeft: 20,
      },
    }),
  },
  firstContainer: {
    height: screenHeight * (2 / 3),
    justifyContent: "flex-end",
  },
  secondContainer: {
    height: screenHeight * (1 / 3),
    justifyContent: "center",
  },
});

export default LoginScreen;
