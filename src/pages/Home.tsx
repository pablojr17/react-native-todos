import React, { useState } from 'react';
import { Alert } from 'react-native';

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
    const taskClick = tasks.map((item) => item)[0];
    if (taskClick.id === id) {
      taskClick.done = !taskClick.done
    }
    const newTask = [...new Set([taskClick, ...tasks])];

    setTasks(newTask);
  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => oldState.filter(
      skill => skill.id !== id
    ));
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  )
}