import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Item = {
  id: string;
  name: string;
  quantity: number;
};

export default function ItemCard({ item }: { item: Item }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.quantity}>x{item.quantity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    color: '#111',
  },
  quantity: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
});
