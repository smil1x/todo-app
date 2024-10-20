import {useState} from "react";
import {addTask} from "../../store/slices/todo/todoSlice.ts";
import {useAppDispatch} from "../../store";
import {Button, TextInput} from "../shared";
import plusIcon from '../../assets/plus-icon.svg'
import styles from './CreateTask.module.scss'


function CreateTask() {
    const [newTaskName, setNewTaskName] = useState('')

    const dispatch = useAppDispatch();

    const createTask = () => {
        if (newTaskName) {
            dispatch(addTask(newTaskName));
            setNewTaskName('')
        }
    }

    return <div className={styles.wrapper}>
        <span className = {styles.label}>Новая задача</span>
        <div className={styles.container}>
            <TextInput onChange = {setNewTaskName} value = {newTaskName}/>
            <Button onClick={createTask} className={styles.addButton}>
                <div className={styles.container}>
                    <img className={styles.plusIcon} src={plusIcon} alt='plus-icon'/>
                    Добавить
                </div>
            </Button>
        </div>

    </div>
}

export default CreateTask

