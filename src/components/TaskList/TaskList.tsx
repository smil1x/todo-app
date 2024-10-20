import styles from './TaskList.module.scss';
import TrashIcon from '../../assets/trash-icon.svg'
import Button from '../shared/Button/Button.tsx';
import React from 'react';
import {ITask} from '../../store/slices/todo/type.ts';
import {changeTaskStatus, removeTask} from '../../store/slices/todo/todoSlice.ts';
import {useAppDispatch} from '../../store';
import classnames from 'classnames';

interface TaskListProps {
    tasks: ITask[];
}

const TaskList: React.FC<TaskListProps> = ({tasks})  => {
    const dispatch = useAppDispatch();


    const renderTasks = () => {
        return tasks.map((task) => {

            const taskClass = classnames({
                [styles.task]: true,
                [styles.completed]: task.completed
            })

            return <div className={taskClass} key={task.id}>
                <input className={styles.checkbox} type='checkbox'
                       checked={task.completed}
                       onChange={() => dispatch(changeTaskStatus(task.id))}
                />
                <label className={styles.taskName}>
                    {task.name}
                </label>
                <Button onClick={() => dispatch(removeTask(task.id))} style='icon'>
                    <img src={TrashIcon} alt='trash-icon'/>
                </Button>
            </div>
        })
    }

    return <div className={styles.taskList}>
        {renderTasks()}
    </div>
}

export default TaskList

