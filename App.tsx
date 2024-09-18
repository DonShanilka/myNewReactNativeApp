import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';

function App(): React.JSX.Element {
  const [number, onChangeNumber] = React.useState('');
  const [text, setText] = React.useState('');

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const [data, setData] = useState([]);

  const saveData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: name,
        body: age,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };

  // const getAllData = () => {
  //   fetch('https://jsonplaceholder.typicode.com/posts/1')
  //     .then(response => response.json())
  //     .then(json => console.log(json));
  // };

  return (
    <SafeAreaView style={{backgroundColor: '#ffffff', height: '200%'}}>
      <TextInput
        onChangeText={text => setName(text)}
        mode="outlined"
        label="Name input"
        placeholder="Type something"
        right={<TextInput.Affix text="/100" />}
      />

      <TextInput
        onChangeText={text => setAge(text)}
        mode="outlined"
        label="Age input"
        placeholder="Type something"
        right={<TextInput.Affix text="/100" />}
      />

      <Button icon="camera" mode="contained" onPress={saveData}>
        Press me
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
