import React, { useState } from 'react';
import { Text, View, Alert } from 'react-native';
import { style } from './styles';
import { InputLogin, InputSenha } from '../../components/Input';
import { Button } from '../../components/Button';

export default function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    try {
      setLoading(true);

      if (!login || !password) {
        return alert('Informe os campos obrigatórios');
      }

      setTimeout(() => {
        if (login == 'felipe@cunha.com' && password == '123456') {
          Alert.alert('Logado com sucesso!');
        } else {
          Alert.alert('Usuário não encontrado!');
        }
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.log(error);
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

      <Button text={'Entrar'} loading={loading} onPress={() => getLogin()} />

      <View style={style.boxBottom}></View>
    </View>
  );
}
