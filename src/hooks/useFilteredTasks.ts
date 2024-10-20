import {useSelector} from 'react-redux';
import {RootState} from "../store";
import {ITask} from "../store/slices/todo/type.ts";

const useFilteredTasks = (): ITask[] => {
    const { tasks, filters } = useSelector((state: RootState) => state.todo);

    const filteredTasks = tasks.filter(task => {
        switch (filters.status) {
            case 'all': return true;
            case 'active': return !task.completed;
            case 'completed': return task.completed;
            default: return true;
        }
    });

    return filteredTasks.sort((a, b) => {
        if (filters.sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (filters.sortBy === 'status') {
            return Number(a.completed) - Number(b.completed);
        }
        return 0;
    });
};

export default useFilteredTasks;