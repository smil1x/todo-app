import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import Todo from './components/Todo/Todo.tsx'
import store from "./store";
import './styles/common.scss'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <Todo/>
        </Provider>
    </StrictMode>,
)
