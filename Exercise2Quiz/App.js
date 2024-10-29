import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';
// ===========================================================================
function Question({ name, picture }) {
  return (
    <View>

      <View style={{ marginVertical: 20, alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
        <Image
          source={picture}
          style={{
            width: '50%',
            height: 200,
            resizeMode: 'cover',
            borderRadius: 8,
          }}
        />
      </View>
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
      q5: 'Rude'
    };

    if (q1Answer === correctAnswers.q1) {
      score++;
    }
    if (q2Answer === correctAnswers.q2) {
      score++;
    }
    if (q3Answer === correctAnswers.q3) {
      score++;
    }
    if (q4Answer === correctAnswers.q4) {
      score++;
    }
    if (q5Answer === correctAnswers.q5) {
      score++;
    }

    if (score === 5) {
      ToastAndroid.show('Congratulations! You got a perfect score!', ToastAndroid.SHORT);
    }
    else if (score === 4) {
      ToastAndroid.show('You got 4. Almost there!', ToastAndroid.SHORT);
    }
    else if (score === 3) {
      ToastAndroid.show('You got 3. Not bad!', ToastAndroid.SHORT);
    }
    else if (score === 2) {
      ToastAndroid.show('You got 2. Keep it up!', ToastAndroid.SHORT);
    }
    else if (score === 1) {
      ToastAndroid.show('You got 1. Try harder!', ToastAndroid.SHORT);
    }
    else {
      ToastAndroid.show('You got 0. Try again!', ToastAndroid.SHORT);
    }
  };

  return (
    <ScrollView>
      <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 50, marginLeft: 10 }}>
        <Text style={{ fontSize: 24, marginRight: 10 }}>Song Quiz</Text>
        <Icon name="gamepad" size={30} color="blue" />
      </View>
      <Question name="What is this song from Spotify?" picture={require('./assets/APT.png')} />
      <RNPickerSelect
        onValueChange={(value) => setQ1Answer(value)}
        items={[
          { label: 'APT', value: 'APT' },
          { label: 'Bruno Mars and Roses', value: 'Bruno Mars and Rose' },
          { label: 'TPA', value: 'TPA' },
          { label: 'I dont know', value: 'I dont know' }
        ]}
      />

      <Question name="What is this song from Spotify?" picture={require('./assets/diewithasmile.png')} />
      <RNPickerSelect
        onValueChange={(value) => setQ2Answer(value)}
        items={[
          { label: 'Die when you feel like it', value: 'Die when you feel like it' },
          { label: 'Die with a smile', value: 'Die with a Smile' },
          { label: 'Die when you are happy', value: 'Die when you are happy' },
          { label: 'I dont know', value: 'I dont know' }
        ]}
      />

      <Question name="What is this song from Spotify?" picture={require('./assets/neversaynever.png')} />
      <RNPickerSelect
        onValueChange={(value) => setQ3Answer(value)}
        items={[
          { label: 'Always say never', value: 'Always say never' },
          { label: 'Never say never', value: 'Never say never' },
          { label: 'Never use never', value: 'Never use never' },
          { label: 'I dont know', value: 'I dont know' }
        ]}
      />

      <Question name="What is this song from Spotify?" picture={require('./assets/stressedout.png')} />
      <RNPickerSelect
        onValueChange={(value) => setQ4Answer(value)}
        items={[
          { label: 'Stressed Out', value: 'Stressed Out' },
          { label: 'Stressed In', value: 'Stressed In' },
          { label: 'Stressed Over', value: 'Stressed Over' },
          { label: 'I dont know', value: 'I dont know' }
        ]}
      />

      <Question name="What is this song from Spotify?" picture={require('./assets/rude.png')} />
      <RNPickerSelect
        onValueChange={(value) => setQ5Answer(value)}
        items={[
          { label: 'Magic', value: 'Magic' },
          { label: 'Rude', value: 'Rude' },
          { label: 'Dont kill the magic', value: 'Dont kill the magic' },
          { label: 'I dont know', value: 'I dont know' }
        ]}
      />

      <TouchableOpacity onPress={checkScore} style={{ marginTop: 20, alignItems: 'center' }}>
        <Text style={{ fontSize: 18, color: 'blue' }}>Score</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default QuizGame;

// ===========================================================================