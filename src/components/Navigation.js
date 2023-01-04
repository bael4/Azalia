import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoForm from './TodoForm';
import TodoItem from './TodoList';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'TodoItem'}
        component={TodoItem}
        options={{
          title: '',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="TodoForm"
        component={TodoForm}
        options={{
          title: 'Вернуться назад',
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
