import React from 'react'
import { Task } from '../types';

type Props = {
    task: Task;
    completeTask(taskDescToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
    return (
        <div className='task'>
            <div className='content'>
                <span>{task.description}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={() => { completeTask(task.description) }}>X</button>
        </div>
    )
}

export default TodoTask