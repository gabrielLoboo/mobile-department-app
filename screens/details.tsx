import { RouteProp, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../navigation';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-ionicons';

type DetailsSreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export default function Details( { route } ) {
  const { todo } = route.params;

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{todo.sigla}</Text>
        <Text style={styles.title}>Funcionários: </Text>
        <FlatList 
          
          data={todo.funcionarios}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => ( 
            <View style={styles.card}> 
              
              <Text style={styles.title}>{item.nome}</Text>
              <Text style={styles.info}>RG: {item.rg}</Text>
            </View>
          )} 
        />

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
  },
  info: {
    fontSize: 15,
    marginBottom: 20,
  },

  card: {
    flex: 1,
    padding: 15,
    margin: 5,
    borderRadius: 20,
    backgroundColor: '#ffff',
    elevation: 3,
  } 

});
