import React, { useState } from "react";
import { style } from "./styles";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import {
  useNavigation,
  useFocusEffect,
  NavigationProp,
} from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { User } from "../../models/users";
import { userRepo } from "../../services/user.repo";

export default function Users() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [loading, setLoading] = useState(false);

  const [users, setUsers] = React.useState<User[]>([]);

  useFocusEffect(() => {
    userRepo.getUsers().then((list) => setUsers(list));
  });

  async function goLogin() {
    navigation.reset({ routes: [{ name: "Login" }] });
  }

  async function addUser() {
    try {
      setLoading(true);
      navigation.reset({ routes: [{ name: "Register" }] });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={style.container}>
      <View style={style.boxTop}></View>

      <View style={style.boxTitle}>
        <Text style={style.textTitle}>Usuários</Text>

        <TouchableOpacity
          onPress={() => goLogin()}
          disabled={loading}
          style={style.iconLogout}
        >
          <MaterialIcons name="logout" color={"white"} size={30} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => addUser()}
          disabled={loading}
          style={style.iconAdd}
        >
          <MaterialIcons name="person-add" color={"white"} size={30} />
        </TouchableOpacity>
      </View>

      {users.map((user) => (
        <View key={user.login} style={style.listBox}>
          <Text style={style.listName}>{user.login}</Text>
          <Text style={style.listUsername}>{user.name}</Text>
        </View>
      ))}

      <View style={style.boxBottom}></View>
    </SafeAreaView>
  );
}
