import React, { useState } from 'react'
import { useNotes } from '../context/NoteContext'
import { CiSearch } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";
import type { Note } from '../types/NodeTypes';

function Notes() {

    const { state, dispatch } = useNotes();
    const [addNewNote, setAddNewNote] = useState<boolean>(false);
    const [updateNote, setUpdateNote] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [menuOpenID, setMenuOpenID] = useState<string>("");

    const [updatedTitle, setUpdatedTitle] = useState<string>("");
    const [updatedContent, setUpdatedContent] = useState<string>("");
    const [updateID, setUpdateID] = useState<string>("");

    const [searchNote, setSearchNote] = useState<string>("");

    const cardColors: string[] = [
        "#FED7AA",
        "#FEF3C7",
        "#E0F2FE",
        "#D1FAE5",
        "#FFE4E6",
        "#E0E7FF",
        "#ECFCCB",
        "#FCE7F3",
        "#E0F7FA",
    ]

    const handleAddNote = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) {
            alert("Lütfen başlık ve içerik giriniz");
            return;
        }

        const newNote: Note = {
            id: crypto.randomUUID(),
            title: title.trim(),
            content: content.trim(),
            createdAt: new Date().toLocaleString(),
        }

        dispatch({ type: "ADD", payload: newNote });

        setTitle("");
        setContent("");
        setAddNewNote(false);
    }


    const handleData = (note: Note) => {
        setUpdateNote(!updateNote);
        setUpdateID(note.id);
        setUpdatedTitle(note.title);
        setUpdatedContent(note.content);
    }


    const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!updatedTitle.trim() || !updatedContent.trim()) {
            alert("Lütfen başlık ve içerik giriniz");
            return;
        }

        const newNote: Note = {
            id: updateID,
            title: updatedTitle.trim(),
            content: updatedContent.trim(),
            createdAt: new Date().toLocaleString(),
        }

        dispatch({ type: "UPDATE", payload: newNote });

        setUpdatedTitle("");
        setUpdatedContent("");
        setUpdateNote(false);
    }


    return (
        <div>
            <header className='flex bg-gray-300 p-5'>
                <div className='flex w-full xl:px-40 lg:px-32 md:px-10 sm:px-5 items-center justify-between'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-serif'>My Notes</h1>
                    <form className='flex items-center relative'>
                        <CiSearch className='absolute left-3 text-2xl text-gray-400' />
                        <input
                            type="text"
                            placeholder='Not ara'
                            value={searchNote}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => (setSearchNote(e.target.value))}
                            className='outline-none focus:outline-none p-2 rounded-md md:w-80 sm:w-auto w-52 pl-11 pr-6 focus:ring-2 ring-blue-300 transition duration-150 ease-in-out'
                        />
                    </form>
                </div>

            </header>

            <div className='relative w-full max-w-7xl mx-auto px-6 sm:px-14 lg:px-20 pt-10 pb-32'>

                {state.length === 0 ? (
                    <div className="flex flex-col items-center justify-center min-h-[50vh] text-gray-400">
                        <h3 className="text-2xl font-bold text-gray-600 mb-3">Henüz not eklemediniz</h3>
                        <p className="text-gray-500 text-lg max-w-md text-center leading-relaxed">
                            Düşüncelerinizi kaydetmeye başlamak için sağ alttaki <span className="font-bold text-blue-500">+</span> butonuna tıklayın.
                        </p>
                    </div>
                ) : (

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>

                        {
                            state && state.filter((note) =>
                                searchNote.length === 0 || note.title.toLowerCase().includes(searchNote.toLowerCase())
                            )
                                .map((note, index) => (
                                    <div key={note.id} className='relative sm:h-72 h-auto rounded-xl pt-3 pl-5 pr-8 pb-8 flex flex-col shadow-md duration-200 ' style={{ backgroundColor: cardColors[index % cardColors.length] }}>

                                        <div className="absolute top-3 right-3">
                                            <button
                                                onClick={() => { setMenuOpen(!menuOpen); setMenuOpenID(note.id) }}
                                                className="text-gray-500 hover:text-gray-700"
                                            >
                                                <FiMoreVertical size={20} />
                                            </button>

                                            {/* Dropdown menü */}
                                            {menuOpen && menuOpenID === note.id && (
                                                <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg border rounded-md z-10">
                                                    <button
                                                        onClick={() => { handleData(note); setMenuOpen(false); }}
                                                        className="block border-b-2 w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                                                    >
                                                        Güncelle
                                                    </button>
                                                    <button
                                                        onClick={() => { dispatch({ type: "DELETE", payload: note.id }); setMenuOpen(false); }}
                                                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                                                    >
                                                        Sil
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                        <h2 className='pb-2 font-semibold sm:text-xl text-lg text-gray-900'>{note.title}</h2>
                                        <hr className='border-t border-black/20' />
                                        <p className='py-3 text-gray-700 text-base overflow-y-auto flex-1 scrollbar-hidden'>{note.content}</p>
                                        <span className='absolute bottom-2 right-4 text-sm text-gray-500 italic'>
                                            {note.createdAt}
                                        </span>
                                    </div>
                                ))
                        }
                    </div>
                )}
            </div>

            <button
                className='fixed bottom-7 sm:bottom-10 right-6 sm:right-10 bg-blue-500 hover:bg-blue-600 text-white xl:p-5 sm:p-4 p-3 rounded-full shadow-xl transition-transform transform hover:scale-110 z-50 flex items-center justify-center'
                onClick={() => setAddNewNote(!addNewNote)}
            >
                <IoIosAdd size={40} />
            </button>

            {
                addNewNote && (
                    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6 pb-20'>
                        <div className="bg-gray-100 rounded-lg shadow-lg w-full max-w-xl h-auto p-6 relative">
                            <h2 className="text-2xl font-semibold mb-4">Yeni Not Ekle</h2>

                            <form onSubmit={handleAddNote} className="space-y-6">

                                <div className="flex flex-col gap-2">
                                    <label className="text-md font-medium text-gray-700 ml-2">Başlık</label>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                                        placeholder="Not başlığını giriniz"
                                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400 transition duration-150"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-md font-medium text-gray-700 ml-2">Açıklama</label>
                                    <textarea
                                        placeholder="Notunuzu giriniz..."
                                        rows={10}
                                        value={content}
                                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
                                        className="border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400 transition duration-150"
                                    ></textarea>
                                </div>

                                <div className="flex justify-end gap-3 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setAddNewNote(false)}
                                        className="px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium transition"
                                    >
                                        İptal
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition"
                                    >
                                        Kaydet
                                    </button>
                                </div>
                            </form>

                            {/* Kapatma butonu */}
                            <button
                                onClick={() => setAddNewNote(false)}
                                className="absolute top-4 right-6 text-red-400 font-bold hover:text-red-600 text-2xl"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                )
            }

            {
                updateNote && (
                    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6 pb-20'>
                        <div className="bg-gray-100 rounded-lg shadow-lg w-full max-w-xl h-auto p-6 relative">
                            <h2 className="text-2xl font-semibold mb-4">Not Güncelle</h2>

                            <form onSubmit={handleUpdate} className="space-y-6">

                                <div className="flex flex-col gap-2">
                                    <label className="text-md font-medium text-gray-700 ml-2">Başlık</label>
                                    <input
                                        type="text"
                                        value={updatedTitle}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUpdatedTitle(e.target.value)}
                                        placeholder="Not başlığını giriniz"
                                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400 transition duration-150"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-md font-medium text-gray-700 ml-2">Açıklama</label>
                                    <textarea
                                        placeholder="Notunuzu giriniz..."
                                        rows={10}
                                        value={updatedContent}
                                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setUpdatedContent(e.target.value)}
                                        className="border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400 transition duration-150"
                                    ></textarea>
                                </div>

                                <div className="flex justify-end gap-3 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setUpdateNote(false)}
                                        className="px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium transition"
                                    >
                                        İptal
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition"
                                    >
                                        Güncelle
                                    </button>
                                </div>
                            </form>

                            {/* Kapatma butonu */}
                            <button
                                onClick={() => setUpdateNote(false)}
                                className="absolute top-4 right-6 text-red-400 font-bold hover:text-red-600 text-2xl"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Notes