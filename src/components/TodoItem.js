import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {
  SwipeItem,
  SwipeButtonsContainer,
  SwipeProvider,
} from 'react-native-swipe-item';
import {useDispatch} from 'react-redux';
import {removeTodo, toogleTodo} from '../store/todoSlice';
import React from 'react';

const TodoItem = ({todo}) => {
  const dispatch = useDispatch();
  const leftButton = (
    <SwipeButtonsContainer
      style={{
        alignSelf: 'center',
        aspectRatio: 1,
        flexDirection: 'column',
        padding: 10,
      }}>
      <TouchableOpacity onPress={() => dispatch(removeTodo(todo.id))}>
        <Image
          source={require('../images/delete.png')}
          style={{width: 30, height: 30}}
        />
      </TouchableOpacity>
    </SwipeButtonsContainer>
  );
  return (
    <SwipeProvider>
      <SwipeItem
        style={styles.button}
        swipeContainerStyle={styles.swipeContentContainerStyle}
        leftButtons={leftButton}>
        <View style={styles.todoItems}>
          <CheckBox
            value={todo.completed}
            onValueChange={() => dispatch(toogleTodo(todo.id))}
          />
          <Text style={todo.completed ? styles.label : ''}>{todo.text}</Text>
        </View>
      </SwipeItem>
    </SwipeProvider>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todoItems: {
    width: 300,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginVertical: 10,
  },
  label: {
    textDecorationLine: 'line-through',
  },
  button: {
    width: 300,
    height: 50,
    alignSelf: 'center',
    marginVertical: 10,
  },
  swipeContentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
