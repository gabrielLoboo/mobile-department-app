import { RouteProp, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../navigation';

type DetailsSreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export default function Details( { route } ) {
  const { todo } = route.params;

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{todo.title}</Text>
        <Text style={styles.notes}>Observações: {todo.notes}</Text>
        <Text>Local: {todo.location}</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  notes: {
    marginBottom: 10
  }

});
