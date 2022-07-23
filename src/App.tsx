import React, { FC, useState } from 'react';
import TodoTask from './components/TodoTask';
import { Task } from './types';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<Task[]>([]);

  const handleSetTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  }

  const handleSetDeadline = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeadline(Number(event.target.value));
  }

  const addTask = (): void => {
    const newTask = { description: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline(0);
    console.log(todoList);
  }

  const completeTask = (taskDescToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.description != taskDescToDelete;
    }))
  }

  return (
    <div className='App'>
      <div className='header'>
        <div className='inputContainer'>
          <input type='text' placeholder='Task...' value={task} onChange={handleSetTask}></input>
          <input type='number' placeholder='Deadline (in Days)...' value={deadline} onChange={handleSetDeadline}></input>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todoList'>
        {todoList.map((task: Task, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask}></TodoTask>
        })}
      </div>
    </div>
  );
}

export default App;
