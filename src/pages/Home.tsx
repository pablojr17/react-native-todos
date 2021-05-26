import React, { useState } from 'react';
import { Alert, View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [mode, setMode] = useState(false);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle == '') {
      Alert.alert('O campo está vazio, por favor digite alguma coisa!')
      return
    }
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }
    setTasks(oldState => [...oldState, data]);
  }

  function handleMarkTaskAsDone(id: number) {
    const task = tasks.filter((item) => item?.id === id)[0];

    task.done = !task?.done;

    const newTasks = [...new Set([task, ...tasks])];

    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => oldState.filter(
      skill => skill.id !== id
    ));
  }

  return (
    <View style={mode === true && { flex: 1, backgroundColor: '#222222' }}>
      <Header mode={mode} setMode={setMode} />

      <TodoInput mode={mode} addTask={handleAddTask} />

      <MyTasksList
        mode={mode}
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}

      />
    </View>
  )
}