import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { RootStackParamList } from '../navigation';
import { useEffect, useState } from 'react';


type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Overview'>;

export default function Overview() {
  const navigation = useNavigation<OverviewScreenNavigationProps>();
  const [lists, setList] = useState([])

  useEffect(()=>{

    const fetchList = async () => {
      const response = await fetch('http://192.168.0.23:5085/api/departamento/selecionarTodos')
      const data = await response.json()
      setList(data);
    }

    fetchList();
  }, [])


  return (
    <View style={styles.container}>
        <FlatList 
        data={lists}
        renderItem={({ item }) =>(
          <TouchableOpacity onPress={() => navigation.navigate('Details', { todo: item })}>
            <View style={styles.item}>
              <Text style={styles.text}>{item.nome}</Text>
            </View>
          </TouchableOpacity>
        )}  
        keyExtractor={(item) => item.id.toString()}
        />

        
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    
  },
  text: {
    color: 'black'
  },

  item: {
    flex: 1,
    padding: 15,
    margin: 5,
    borderRadius: 20,
    backgroundColor: '#ffff',
    elevation: 3,
    
  }
});
