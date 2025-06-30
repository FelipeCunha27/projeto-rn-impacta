import React from "react";
import { View, TextInput } from "react-native";
import { styles } from "./styles";

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const InputName = ({ value, onChangeText }: InputProps) => {
  return (
    <View style={styles.firstBox}>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder="Nome"
        placeholderTextColor="#6f6f6f"
      ></TextInput>
    </View>
  );
};

export const InputLogin = ({ value, onChangeText }: InputProps) => {
  return (
    <View style={styles.secondBox}>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder="Login"
        placeholderTextColor="#6f6f6f"
      ></TextInput>
    </View>
  );
};

export const InputSenha = ({ value, onChangeText }: InputProps) => {
  return (
    <View style={styles.thirdBox}>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder="Senha"
        placeholderTextColor="#6f6f6f"
        secureTextEntry={true}
      ></TextInput>
    </View>
  );
};

export const InputConfirmarSenha = ({ value, onChangeText }: InputProps) => {
  return (
    <View style={styles.fortyBox}>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder="Confirmar Senha"
        placeholderTextColor="#6f6f6f"
        secureTextEntry={true}
      ></TextInput>
    </View>
  );
};
