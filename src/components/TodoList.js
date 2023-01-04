import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = ({navigation}) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setState(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  const todos = useSelector(state => state.todos.todos);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://azalianow.ru/static/images/oglogo.png',
          }}
          style={{width: 300, height: 100}}
        />
      </View>
      {!state ? <ActivityIndicator size="large" color="red" /> : null}
      <ScrollView style={styles.listContainer}>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('TodoForm')}>
        <View style={styles.addWrapper}>
          <Text>+</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingVertical: 10,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
});
