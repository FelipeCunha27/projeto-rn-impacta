import React, { useState } from 'react';
import { style } from './styles';
import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation,useFocusEffect, NavigationProp } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { User } from "../../models/users";
import { userRepo } from "../../services/user.repo";

export default function Users() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [loading, setLoading] = useState(false);

  const [users, setUsers] = React.useState<User[]>([]);

  useFocusEffect(() => {
    userRepo.getUsers().then((list) => setUsers(list));
  });
  
  async function addUser() {
    try {
      setLoading(true);
      navigation.reset({ routes: [{ name: 'Register' }] });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}></View>

      <View style={style.boxTitle}>
        <Text style={style.textTitle}>Usuários</Text>
        <MaterialIcons name="logout" style={style.iconLogout} />
        <TouchableOpacity
          onPress={() => addUser()}
          disabled={loading}
          style={style.iconAdd}
        >
          <MaterialIcons name="person-add" color={"white"} size={30} />
        </TouchableOpacity>
      </View>

      {users.map((user) => (
        <View style={style.listBox}>
          <Text style={style.listName}>{user.login}</Text>
          <Text style={style.listUsername}>{user.name}</Text>
        </View>
      ))}

      <View style={style.boxBottom}></View>
    </View>
  );
}
