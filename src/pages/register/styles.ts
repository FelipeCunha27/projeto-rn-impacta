import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
  },

  boxTop: {
    height: 29,
    width: "100%",
  },

  boxTitle: {
    height: 70,
    width: "100%",
    backgroundColor: "#424242",
  },

  textTitle: {
    fontSize: 25,
    marginTop: 20,
    marginLeft: 20,
    fontWeight: "bold",
    color: "white",
  },

  firstBar: {
    marginBottom: 10,
    marginLeft: 12,
    marginRight: 12,
    height: 1.5,
    backgroundColor: "#6f6f6f",
  },

  secondBar: {
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 10,
    height: 1.5,
    backgroundColor: "#6f6f6f",
  },

  thirdBar: {
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 10,
    height: 1.5,
    backgroundColor: "#6f6f6f",
  },

  boxBottom: {
    position: "absolute",
    flex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "black",
    flexDirection: "row",
  },
});
