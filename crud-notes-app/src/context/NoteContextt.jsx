import { createContext, useContext, useReducer } from "react";

const NoteContext = createContext();

const NoteReducer = (state, action)=>{
    switch(action.type){
        case "ADD":
            return [...state, action.payload];

        case "DELETE":
            return state.filter((note)=> note.id !== action.payload);
            
        case "UPDATE":
            return state.map((note)=> note.id === action.payload.id ? action.payload : note);

        default:
            return state;    
    }
}

export const NoteProvider = ({children})=>{
    const [state, dispatch] = useReducer(NoteReducer, [])

    return (
        <NoteContext.Provider value={{state, dispatch}}>
            {children}
        </NoteContext.Provider>
    )
}

export const useNotes= ()=>{
    const context = useContext(NoteContext);
    if(!context){
        throw new Error ("NoteProvider içinde olmalı");
    }
    return context;
}