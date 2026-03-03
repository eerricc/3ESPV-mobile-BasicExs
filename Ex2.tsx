import { StyleSheet, Pressable, TextInput, View, Text } from 'react-native';
import React from 'react';

export default function Ex2() {
    const [text, onChangeText] = React.useState('');
    const [submitted, setSubmitted] = React.useState<string[]>([]);

    return (
    <View style={styles.container}>
       <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
         <Pressable
           onPress={() => {
              if (text.trim() === '') return;
              setSubmitted(prev => [...prev, text]);
              onChangeText('');
              console.log('Submitted:', text);
           }}
           style={({ pressed }) => [
             styles.btn,
             pressed ? styles.btnActive : null,
             pressed ? styles.btnPressed : null,
           ]}
         >
           <Text style={styles.btnText}>Submit</Text>
         </Pressable>

         <Pressable
           onPress={() => setSubmitted([])}
           style={({ pressed }) => [
             styles.resetBtn,
             pressed ? styles.resetBtnPressed : null,
           ]}
         >
           <Text style={styles.resetBtnText}>Reset</Text>
         </Pressable>

        {submitted.length > 0 ? (
          <View style={styles.submissionsWrap}>
            {submitted.map((s, i) => (
              <Text key={i} style={styles.submittedText}>{s}</Text>
            ))}
          </View>
        ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    margin: 12,
    width: 200,
    borderWidth: 1,
    padding: 10,
  },

  btn: {
    marginTop: 8,
    width: 120,
    paddingVertical: 10,
    backgroundColor: '#2196F3',
    borderRadius: 6,
    alignItems: 'center',
  },

  btnActive: {
    backgroundColor: '#4CAF50',
  },

  btnPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  btnText: {
    color: '#fff',
    fontWeight: '600',
  },

  submittedText: {
    marginTop: 12,
    fontSize: 18,
    color: '#333',
  },
  submissionsWrap: {
    marginTop: 12,
    alignItems: 'center',
  },
  resetBtn: {
    marginTop: 8,
    width: 120,
    paddingVertical: 10,
    backgroundColor: '#f44336',
    borderRadius: 6,
    alignItems: 'center',
  },
  resetBtnPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  resetBtnText: {
    color: '#fff',
    fontWeight: '600',
  },
});
