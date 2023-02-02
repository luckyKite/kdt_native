import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import EmartButton from './assets/components/EmartButton';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Header</Text>
        <Text style={styles.title}>title</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Section</Text>
        <EmartButton name="Click" />
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Footer</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#f1c40f',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  section: {
    width: '100%',
    flex: 7,
    backgroundColor: '#1abc9c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 2,
    width: '100%',
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
  
});
