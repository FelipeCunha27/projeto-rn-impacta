import React, { useState } from 'react';
import { style } from './styles';
import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

export default function Users() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [loading, setLoading] = useState(false);

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
        <MaterialIcons name='logout' style={style.iconLogout} />
        <TouchableOpacity
          onPress={() => addUser()}
          disabled={loading}
          style={style.iconAdd}
        >
          <MaterialIcons name='person-add' color={'white'} size={30} />
        </TouchableOpacity>
      </View>

      <View style={style.listBox}>
        <Text style={style.listName}>Nome de Usuário 1</Text>
        <Text style={style.listUsername}>username 1</Text>
      </View>

      <View style={style.listBox}>
        <Text style={style.listName}>Nome de Usuário 2</Text>
        <Text style={style.listUsername}>username 2</Text>
      </View>

      <View style={style.boxBottom}></View>
    </View>
  );
}
