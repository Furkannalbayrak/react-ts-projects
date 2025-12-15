import Todos from './Todos';
import { useSelector } from 'react-redux';
import type { TodoType } from '../types/Types';
import type { RootState } from '../redux/store';

function TodoList() {

    const {todos} = useSelector((state:RootState)=> state.todo)

    return (
        <div className='w-full'>
            <div className='flex flex-col p-8 gap-2'>
               {
                todos && todos.map((element: TodoType)=> (
                    <Todos key={element.id} todoProps={element} />
                ))
               }
            </div>
        </div>
    )
}

export default TodoList