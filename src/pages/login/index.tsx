import React, { useState } from "react";
import { Text, View } from "react-native";
import { style } from "./styles";
import { InputLogin, InputSenha } from "../../components/InputLogin";
import { ButtonLogin } from "../../components/ButtonLogin";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    try {
      setLoading(true);

      if (!login || !password) {
        return alert("Informe os campos obrigatórios");
      }

      navigation.reset({ routes: [{ name: "Users" }] });

      console.log("Login feito com sucesso!");
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
          <Text style={style.textTitle}>Acesso</Text>
        </View>
      </View>

      <InputLogin value={login} onChangeText={setLogin} />

      <View style={style.firstBar}></View>

      <InputSenha value={password} onChangeText={setPassword} />

      <View style={style.secondBar}></View>

      <ButtonLogin
        text={"Entrar"}
        loading={loading}
        onPress={() => getLogin()}
      />

      <View style={style.boxBottom}></View>
    </View>
  );
}
