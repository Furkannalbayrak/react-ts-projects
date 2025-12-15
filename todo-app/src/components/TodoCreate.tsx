import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createTodo } from '../redux/todoSlice';

function TodoCreate() {

    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState<string>("");

    const handleCreateTodo = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        if(newTodo.trim().length == 0){
            alert("Todo giriniz");
            return;
        }

        const payload = {
            id: Math.floor(Math.random()*99999999),
            content: newTodo
        }
        dispatch(createTodo(payload));
        setNewTodo("");
    }

    return (
        <div className='mt-8 w-full'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-center font-semibold text-3xl sm:text-4xl font-serif'>TODO LİST</h1>
                <form onSubmit={handleCreateTodo} className='flex flex-col gap-4 pb-8 px-10 sm:px-20 pt-4'>
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
                        placeholder='Görev yazınız'
                        className='border-2 border-gray-300 rounded-lg text-base sm:text-lg outline-none transition duration-100 focus:ring-1 ring-blue-400 max-w-6xl px-5 py-2'

                    />
                    <button
                        className='px-2 py-2 sm:py-3 rounded-full mx-auto transition duration-100 bg-yellow-500 hover:bg-yellow-400 w-36 text-base sm:text-lg font-semibold'
                        type='submit'
                    >
                        Todo Ekle
                    </button>
                </form>
            </div>
        </div>
    )
}

export default TodoCreate