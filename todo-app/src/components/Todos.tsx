import React, { useState } from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import type { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { editTodo, removeTodo } from '../redux/todoSlice';

interface TodoProps {
    todoProps: TodoType
}

function Todos({ todoProps }: TodoProps) {
    const { id, content } = todoProps;
    const [editable, setEditable] = useState<Boolean>(false);
    const [updatedText, setUpdatedText] = useState<string>(content);

    const dispatch = useDispatch();

    const handleUpdatedText = (id: number) => {
        if (updatedText.length == 0) {
            alert("Todo boş bir değer ile güncellenemez");
            return;
        }

        const payload: TodoType = {
            id: id,
            content: updatedText
        }
        dispatch(editTodo(payload));
    }

    return (
        <div className='bg-white px-3 sm:px-5 py-2 rounded-lg text-base sm:text-lg flex justify-between items-center'>
            <div className='pr-5 w-full'>
                {
                    editable ?
                        <input type="text"
                            className='border-b-2 border-b-gray-500 w-full outline-none'
                            value={updatedText}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUpdatedText(e.target.value)}
                        />
                        : content
                }
            </div>
            <div className='flex gap-3 '>
                <IoMdRemoveCircleOutline
                    className='text-3xl text-red-500 transform duration-150 hover:-translate-y-[2px] cursor-pointer'
                    onClick={() => dispatch(removeTodo(id))}
                />
                {
                    editable ?
                        <IoMdCheckmark className='text-[27px] text-gray-700 transform duration-150 hover:-translate-y-[2px] cursor-pointer'
                            onClick={() => {
                                setEditable(!editable),
                                    handleUpdatedText(id);
                            }}
                        />
                        : <FaRegEdit className='text-[27px] text-gray-700 transform duration-150 hover:-translate-y-[2px] cursor-pointer'
                            onClick={() => setEditable(!editable)}
                        />
                }
            </div>
        </div>
    )
}

export default Todos