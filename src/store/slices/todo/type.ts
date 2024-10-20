export interface ITask {
    id: string;
    name: string;
    completed: boolean;
}

export interface ITaskFilters {
    sortBy: 'name' | 'status' | 'none';
    status: 'all' | 'active' | 'completed';
}

export interface ITodo {
    tasks: ITask[]
    filters: ITaskFilters
}