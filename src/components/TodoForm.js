/* eslint-disable no-shadow */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../store/todoSlice';
const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addTodo({text}));
    setText('');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.todoForm}>
        <TextInput
          style={styles.input}
          placeholder="Текст новой задачи"
          placeholderTextColor="#000"
          value={text}
          onChangeText={text => setText(text)}
        />

        <TouchableOpacity onPress={addTask}>
          <View style={styles.addTodo}>
            <Text style={{color: '#fff'}}>Добавить</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TodoForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoForm: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: 100,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 200,
    textAlign: 'center',
  },
  addTodo: {
    width: 200,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#123',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
});
