import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

// Type that brands a number as non-negative at compile time
type NonNegativeNumber = number & { readonly __nonNegative__: unique symbol };

function makeNonNegative(n: number): NonNegativeNumber {
  if (n < 0) throw new Error('Negative values are not allowed for punctuation');
  return n as NonNegativeNumber;
}

interface Punctuation {
  teamA: NonNegativeNumber;
  teamB: NonNegativeNumber;
}

interface TeamColor {
  team: 'A' | 'B';
  color: string;
}

export default function App() {
  const [score, setScore] = React.useState<Punctuation>({
    teamA: makeNonNegative(0),
    teamB: makeNonNegative(0),
  });

  const teamColors: Record<'A' | 'B', TeamColor> = {
    A: { team: 'A', color: '#1E90FF' }, // DodgerBlue
    B: { team: 'B', color: '#FF4500' }, // OrangeRed
  };

  function addPoints(team: 'A' | 'B', points: 1 | 2 | 3) {
    setScore(prev => {
      const prevValue = team === 'A' ? prev.teamA : prev.teamB;
      const next = makeNonNegative(prevValue + points);
      return team === 'A' ? { ...prev, teamA: next } : { ...prev, teamB: next };
    });
  }

  function resetScores() {
    setScore({ teamA: makeNonNegative(0), teamB: makeNonNegative(0) });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Basketball Counter</Text>

      <View style={styles.row}>
        <View style={styles.teamCard}>
          <Text style={[styles.teamName, { color: teamColors.A.color }]}>Team A</Text>
          <Text style={styles.score}>{String(score.teamA)}</Text>
          <View style={styles.controls}>
            <Pressable onPress={() => addPoints('A', 1)} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
              <Text style={styles.btnText}>+1</Text>
            </Pressable>
            <Pressable onPress={() => addPoints('A', 2)} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
              <Text style={styles.btnText}>+2</Text>
            </Pressable>
            <Pressable onPress={() => addPoints('A', 3)} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
              <Text style={styles.btnText}>+3</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.teamCard}>
          <Text style={[styles.teamName, { color: teamColors.B.color }]}>Team B</Text>
          <Text style={styles.score}>{String(score.teamB)}</Text>
          <View style={styles.controls}>
            <Pressable onPress={() => addPoints('B', 1)} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
              <Text style={styles.btnText}>+1</Text>
            </Pressable>
            <Pressable onPress={() => addPoints('B', 2)} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
              <Text style={styles.btnText}>+2</Text>
            </Pressable>
            <Pressable onPress={() => addPoints('B', 3)} style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
              <Text style={styles.btnText}>+3</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable onPress={resetScores} style={({ pressed }) => [styles.resetBtn, pressed && styles.resetBtnPressed]}>
        <Text style={styles.resetText}>Reset</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  teamCard: {
    width: '48%',
    padding: 12,
    backgroundColor: '#f7f9fc',
    borderRadius: 8,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  score: {
    fontSize: 42,
    fontWeight: '800',
    marginBottom: 12,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  btn: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 10,
    backgroundColor: '#1e90ff',
    borderRadius: 6,
    alignItems: 'center',
  },
  btnPressed: {
    backgroundColor: '#187bcd',
  },
  btnText: {
    color: '#fff',
    fontWeight: '700',
  },
  resetBtn: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f44336',
    borderRadius: 6,
  },
  resetBtnPressed: {
    opacity: 0.9,
  },
  resetText: {
    color: '#fff',
    fontWeight: '700',
  },
});
