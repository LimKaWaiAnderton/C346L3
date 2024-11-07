import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, ToastAndroid, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';
// ===========================================================================
function Question({ name, picture }) {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{name}</Text>
      <Image source={picture} style={styles.image} />
    </View>
  );
}

function QuizGame() {
  const [q1Answer, setQ1Answer] = useState('');
  const [q2Answer, setQ2Answer] = useState('');
  const [q3Answer, setQ3Answer] = useState('');
  const [q4Answer, setQ4Answer] = useState('');
  const [q5Answer, setQ5Answer] = useState('');

  const checkScore = () => {
    let score = 0;
    const correctAnswers = {
      q1: 'APT',
      q2: 'Die with a Smile',
      q3: 'Never say never',
      q4: 'Stressed Out',
      q5: 'Rude',
    };

    if (q1Answer === correctAnswers.q1) score++;
    if (q2Answer === correctAnswers.q2) score++;
    if (q3Answer === correctAnswers.q3) score++;
    if (q4Answer === correctAnswers.q4) score++;
    if (q5Answer === correctAnswers.q5) score++;

    const messages = [
      'You got 0. Try again!',
      'You got 1. Try harder!',
      'You got 2. Keep it up!',
      'You got 3. Not bad!',
      'You got 4. Almost there!',
      'Congratulations! You got a perfect score!',
    ];
    ToastAndroid.show(messages[score], ToastAndroid.SHORT);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Song Quiz</Text>
        <Icon name="gamepad" size={30} color="blue" />
      </View>

      <Question name="What is this song from Spotify?" picture={require('./assets/APT.png')} />
      <RNPickerSelect
        onValueChange={(value) => setQ1Answer(value)}
        style={pickerSelectStyles}
        items={[
          { label: 'APT', value: 'APT' },
          { label: 'Bruno Mars and Roses', value: 'Bruno Mars and Rose' },
          { label: 'TPA', value: 'TPA' },
          { label: 'I dont know', value: 'I dont know' },
        ]}
      />

      <Question name="What is this song from Spotify?" picture={require('./assets/diewithasmile.png')} />
      <RNPickerSelect
        onValueChange={(value) => setQ2Answer(value)}
        style={pickerSelectStyles}
        items={[
          { label: 'Die when you feel like it', value: 'Die when you feel like it' },
          { label: 'Die with a smile', value: 'Die with a Smile' },
          { label: 'Die when you are happy', value: 'Die when you are happy' },
          { label: 'I dont know', value: 'I dont know' },
        ]}
      />

      <Question name="What is this song from Spotify?" picture={require('./assets/neversaynever.png')} />
      <RNPickerSelect
        onValueChange={(value) => setQ3Answer(value)}
        style={pickerSelectStyles}
        items={[
          { label: 'Always say never', value: 'Always say never' },
          { label: 'Never say never', value: 'Never say never' },
          { label: 'Never use never', value: 'Never use never' },
          { label: 'I dont know', value: 'I dont know' },
        ]}
      />

      <Question name="What is this song from Spotify?" picture={require('./assets/stressedout.png')} />
      <RNPickerSelect
        onValueChange={(value) => setQ4Answer(value)}
        style={pickerSelectStyles}
        items={[
          { label: 'Stressed Out', value: 'Stressed Out' },
          { label: 'Stressed In', value: 'Stressed In' },
          { label: 'Stressed Over', value: 'Stressed Over' },
          { label: 'I dont know', value: 'I dont know' },
        ]}
      />

      <Question name="What is this song from Spotify?" picture={require('./assets/rude.png')} />
      <RNPickerSelect
        onValueChange={(value) => setQ5Answer(value)}
        style={pickerSelectStyles}
        items={[
          { label: 'Magic', value: 'Magic' },
          { label: 'Rude', value: 'Rude' },
          { label: 'Dont kill the magic', value: 'Dont kill the magic' },
          { label: 'I dont know', value: 'I dont know' },
        ]}
      />


      <TouchableOpacity onPress={checkScore} style={styles.button}>
        <Text style={styles.buttonText}>Score</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginRight: 10,
  },
  questionContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: 'white',
    marginBottom: 15,
    width: '90%', // Adjust to match the container
    alignSelf: 'center', // Center align within the container
  },
  inputAndroid: {
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: 'white',
    marginBottom: 15,
    width: '90%', // Adjust to match the container
    alignSelf: 'center', // Center align within the container
  },
};

export default QuizGame;

// ===========================================================================