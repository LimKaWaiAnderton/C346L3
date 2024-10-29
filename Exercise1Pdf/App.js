import React, { useState } from 'react';
import { Text, View, TextInput, Button, Alert, TouchableOpacity, ToastAndroid } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

// ============================================================================
// Exercise 1A
/* function App (){
  return (
    <View>
      <Text>Password</Text>
      <TextInput style={{borderWidth: 1, height: 50}}/>
    </View>
  );
}

export default App; */
// ===========================================================================
// Exercise 1B
/* function App() {
  return (
    <View>
      <Text style={{marginTop: 50, color:'gray'}}>User Type</Text>
      <RNPickerSelect onValueChange={(value) => console.log(value)}
        items={[
          { label: 'Admin', value: 'admin' },
          { label: 'Guest', value: 'guest' }
        ]}
      />
      <Text style={{marginTop: 50, color: 'gray'}} >Password</Text>
      <TextInput style={{borderWidth: 1, height: 50}}/>
    </View>
  );
}

export default App; */
// ===========================================================================
// Exercise 1C & 1D
/* function App() {
  return (
    <View>
      <Text style={{ marginTop: 50, color: 'gray' }}>User Type</Text>
      <RNPickerSelect onValueChange={(value) => console.log(value)}
        items={[
          { label: 'Admin', value: 'admin' },
          { label: 'Guest', value: 'guest' }
        ]}
      />
      <Text style={{ marginTop: 50, color: 'gray' }} >Password</Text>
      <TextInput style={{ borderWidth: 1, height: 50 }} />
      <Button onPress={() => {
        Alert.alert('Welcome')
      }} title='LOG IN' color={"blue"}/>
    </View>
  );
}

export default App; */
// ===========================================================================
// Exercise 1E
/* function App() {
  return (
    <View>
      <Text style={{ marginTop: 50, color: 'gray' }}>User Type</Text>
      <RNPickerSelect onValueChange={(value) => console.log(value)}
        items={[
          { label: 'Admin', value: 'admin' },
          { label: 'Guest', value: 'guest' }
        ]}
      />
      <Text style={{ marginTop: 50, color: 'gray' }} >Password</Text>
      <TextInput style={{ borderWidth: 1, height: 50 }} />
      <TouchableOpacity onPress={() => {
        Alert.alert('Welcome')
      }}>
        <Text>LOG IN</Text>
      </TouchableOpacity>
    </View >
  );
}

export default App; */
// ===========================================================================
// Exercise 1F
/* function App() {
  return (
    <View>
      <Text style={{ marginTop: 50, color: 'gray' }}>User Type</Text>
      <RNPickerSelect onValueChange={(value) => console.log(value)}
        items={[
          { label: 'Admin', value: 'admin' },
          { label: 'Guest', value: 'guest' }
        ]}
      />
      <Text style={{ marginTop: 50, color: 'gray' }} >Password</Text>
      <TextInput style={{ borderWidth: 1, height: 50 }} />
      <TouchableOpacity onPress={() => {
        ToastAndroid.show('Welcome', ToastAndroid.SHORT)
      }}>
        <Text>LOG IN</Text>
      </TouchableOpacity>
    </View >
  );
}

export default App;  */
// ===========================================================================
// Exercise 1G
const InputBox = ({ label, onChangeText }) => {
  return (
    <View>
      <Text style={{ marginTop: 50, color: 'gray' }}>{label}</Text>
      <TextInput style={{ borderWidth: 1, height: 50 }} onChangeText={onChangeText} />
    </View>
  );
}


const App = () => {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [pw, setPw] = useState('');
  return (
    <View>
      <Text style={{ marginTop: 50, color: 'gray' }}>User Type</Text>
      <RNPickerSelect onValueChange={(value) => setRole(value)}
        items={[
          { label: 'Admin', value: 'Admin' },
          { label: 'Guest', value: 'Guest' }
        ]}
      />
      <InputBox label='Username' onChangeText={(text) => setUsername(text)} />
      <InputBox label='Password' onChangeText={(text) => setPw(text)} />
      <TouchableOpacity onPress={() => {
        const correctPassword = '123';
        let myMessage = "Error! Wrong password!";
        if (pw === correctPassword) {
          myMessage = `Welcome ${role} ${username}`;
        }
        ToastAndroid.show(`${myMessage}`, ToastAndroid.SHORT)
      }}>
        <Text>LOG IN</Text>
      </TouchableOpacity>
      <Text>User Name:{username}, Password: {pw}</Text>
    </View>
  );
};

export default App;
