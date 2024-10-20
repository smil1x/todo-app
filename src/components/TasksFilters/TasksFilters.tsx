import {RootState, useAppDispatch} from '../../store';
import {useSelector} from 'react-redux';
import {updateFilters} from '../../store/slices/todo/todoSlice.ts';
import {ITaskFilters} from '../../store/slices/todo/type.ts';
import {RadioGroup, Select} from "../shared";
import styles from './TaskFilters.module.scss'

const SortOptions = [
    {
        name: "Наименование",
        value: "name",
    },
    {
        name: "Статус",
        value: "status",
    }
]
const StatusOptions = [
    {
        label: 'Все',
        value: 'all',
    },
    {
        label: 'Активные',
        value: 'active',
    },
    {
        label: 'Завершённые',
        value: 'completed',
    }
]



function TasksFilters() {
    const dispatch = useAppDispatch();
    const sortBy = useSelector((state: RootState) => state.todo.filters.sortBy);
    const statusFilter = useSelector((state: RootState) => state.todo.filters.status);

    const handleSort = (sortBy: string) => {
        dispatch(updateFilters({
            sortBy: sortBy as ITaskFilters['sortBy'],
            status: statusFilter
        }));
    }

    const handleStatusFilter = (status: string) => {
        dispatch(updateFilters({
            sortBy,
            status: status as ITaskFilters['status']
        }))
    }

    return <div className = {styles.options}>
        <div className = {styles.option}>
            <span className={styles.optionName}>Статус</span>
            <RadioGroup name = 'status'
                        options = {StatusOptions}
                        onChange = {handleStatusFilter}
                        selectedValue = {statusFilter}
            />
        </div>

        <div className={styles.option}>
            <span className = {styles.optionName}>Сортировка</span>
            <Select options = {SortOptions}
                    placeholder = 'Наименование и статус'
                    selected = {sortBy}
                    onSelect = {handleSort}
            />
        </div>
    </div>

}

export default TasksFilters