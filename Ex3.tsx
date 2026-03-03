import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ItemCard from './ItemCard';

type Item = { id: string; name: string; quantity: number };

export default function App() {
  const data: Item[] = [
    { id: '1', name: 'Milk', quantity: 2 },
    { id: '2', name: 'Eggs', quantity: 12 },
    { id: '3', name: 'Bread', quantity: 1 },
    { id: '4', name: 'Apples', quantity: 6 },
    { id: '5', name: 'Rice', quantity: 1 },
  ];

  const renderItem = ({ item }: { item: Item }) => <ItemCard item={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Supermarket List</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f6fb',
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    alignSelf: 'center',
  },
  listContent: {
    paddingBottom: 24,
  },
  separator: {
    height: 12,
  },
});
