import React, { useState } from "react";
import { Text, View } from "react-native";
import { style } from "./styles";
import {
  InputConfirmarSenha,
  InputLogin,
  InputName,
  InputSenha,
} from "../../components/InputSave";
import { ButtonSave } from "../../components/ButtonSave";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { userRepo } from "../../services/user.repo";
import { User } from "../../models/users";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function Login() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function saveUser() {
    try {
      setLoading(true);

      if (!name || !login || !password || !confirmPassword) {
        return alert("Informe os campos obrigatórios");
      } else if (password != confirmPassword) {
        return alert("Senhas não coincidem");
      }

      const user = {
        name,
        login,
        password,
      };

      userRepo.save(user).then(() => {
        console.log("Login salvo com sucesso!");
        navigation.goBack();
      });

      navigation.reset({ routes: [{ name: "Users" }] });

      console.log("Usuário criado com sucesso!");
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
        <View>
          <Text style={style.textTitle}>Novo Usuário</Text>
          <TouchableOpacity
            onPress={() => saveUser()}
            disabled={loading}
            style={style.iconAdd}
          >
            <MaterialIcons name="arrow-back" color={"white"} size={30} />
          </TouchableOpacity>
        </View>
      </View>

      <InputName value={name} onChangeText={setName} />

      <View style={style.firstBar}></View>

      <InputLogin value={login} onChangeText={setLogin} />

      <View style={style.secondBar}></View>

      <InputSenha value={password} onChangeText={setPassword} />

      <View style={style.thirdBar}></View>

      <InputConfirmarSenha
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <View style={style.secondBar}></View>

      <ButtonSave
        text={"Salvar"}
        loading={loading}
        onPress={() => saveUser()}
      />

      <View style={style.boxBottom}></View>
    </View>
  );
}
