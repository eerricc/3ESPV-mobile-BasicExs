import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, Pressable, Keyboard } from 'react-native';

type NameItem = { id: string; name: string };

export default function App() {
  const [input, setInput] = React.useState('');
  const [names, setNames] = React.useState<NameItem[]>([]);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  function addName() {
    const trimmed = input.trim();
    if (!trimmed) return;
    const item: NameItem = { id: String(Date.now()) + Math.random().toString(36).slice(2, 7), name: trimmed };
    setNames(prev => [...prev, item]);
    setInput('');
    Keyboard.dismiss();
  }

  function clearAll() {
    setNames([]);
    setSelectedId(null);
    setInput('');
  }

  function sortRandom() {
    if (names.length < 2) return;
    const idx = Math.floor(Math.random() * names.length);
    setSelectedId(names[idx].id);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who will pay the coffee?</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Type a name"
          value={input}
          onChangeText={setInput}
          onSubmitEditing={addName}
          returnKeyType="done"
        />
        <Pressable onPress={addName} style={({ pressed }) => [styles.addBtn, pressed && styles.btnPressed]}>
          <Text style={styles.btnText}>Add</Text>
        </Pressable>
      </View>

      <FlatList
        data={names}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={{ paddingBottom: 24 }}
        ListEmptyComponent={<Text style={styles.empty}>No names yet. Add someone!</Text>}
        renderItem={({ item }) => (
          <View style={[styles.itemCard, selectedId === item.id && styles.selectedCard]}>
            <Text style={[styles.itemText, selectedId === item.id && styles.selectedText]}>{item.name}</Text>
          </View>
        )}
      />

      <View style={styles.controls}>
        <Pressable
          onPress={sortRandom}
          disabled={names.length < 2}
          style={({ pressed }) => [
            styles.sortBtn,
            names.length < 2 ? styles.sortBtnDisabled : null,
            pressed && styles.btnPressed,
          ]}
        >
          <Text style={styles.btnText}>Sort</Text>
        </Pressable>

        <Pressable onPress={clearAll} style={({ pressed }) => [styles.clearBtn, pressed && styles.btnPressed]}>
          <Text style={styles.clearText}>Clear</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fbff',
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
    alignSelf: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  input: {
    flex: 1,
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  addBtn: {
    marginLeft: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#10b981',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: '700',
  },
  btnPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.995 }],
  },
  list: {
    flex: 1,
    marginTop: 8,
  },
  itemCard: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#edf2f7',
  },
  itemText: {
    fontSize: 16,
    color: '#111827',
  },
  selectedCard: {
    backgroundColor: '#fff8e1',
    borderColor: '#f59e0b',
    // shadow for emphasis
    shadowColor: '#f59e0b',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 6,
  },
  selectedText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#b45309',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  sortBtn: {
    flex: 1,
    marginRight: 8,
    paddingVertical: 12,
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    alignItems: 'center',
  },
  sortBtnDisabled: {
    backgroundColor: '#93c5fd',
    opacity: 0.7,
  },
  clearBtn: {
    flex: 1,
    marginLeft: 8,
    paddingVertical: 12,
    backgroundColor: '#ef4444',
    borderRadius: 8,
    alignItems: 'center',
  },
  clearText: {
    color: '#fff',
    fontWeight: '700',
  },
  empty: {
    marginTop: 12,
    alignSelf: 'center',
    color: '#6b7280',
  },
});
