import React from 'react';
import {
  ActivityIndicator,
  TouchableHighlightProps,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

type Props = TouchableHighlightProps & {
  text: String;
  loading?: boolean;
};

export function Button({ ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.boxButton} {...rest}>
      <View style={styles.button}>
        <MaterialIcons name='login' style={styles.iconLogin} />
        {rest.loading ? (
          <ActivityIndicator style={styles.indicator} color='white' />
        ) : (
          <Text style={styles.textButton}>{rest.text}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
