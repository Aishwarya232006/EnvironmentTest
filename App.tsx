import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

function App() {
  const [message, setMessage] = useState("Hello, I'm Aishwarya Chhablani");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to CPAN 213</Text>
        <Text style={styles.subtitle}>Cross-Platform Mobile Development</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Greeting Message */}
        <Text style={styles.greeting}>{message}</Text>

        {/* Interactive Button */}
        <View style={styles.buttonContainer}>
          <Button
            title="Press Me!"
            color="#3498db"
            onPress={() => setMessage("You pressed the button! ")}
          />
        </View>

        {/* Student Info */}
        <Text style={styles.info}>Student ID: N01711300</Text>
        <Text style={styles.info}>Program: Computer Programming</Text>

        {/* Course Goals */}
        <View style={styles.goals}>
          <Text style={styles.sectionTitle}>My Course Goals:</Text>
          <Text style={styles.goal}> Learn React Native fundamentals</Text>
          <Text style={styles.goal}> Build cross-platform mobile apps</Text>
          <Text style={styles.goal}> Master state management with Redux</Text>
          <Text style={styles.goal}> Deploy apps to app stores</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#3498db',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    fontStyle: 'italic',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    marginVertical: 15,
    width: '50%',
    alignSelf: 'center',
  },
  info: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 5,
  },
  goals: {
    marginTop: 30,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  goal: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 5,
    lineHeight: 22,
  },
});

export default App;
