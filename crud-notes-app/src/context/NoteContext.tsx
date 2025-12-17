import { createContext, useContext, useEffect, useReducer, type ReactNode } from "react";
import type { Action, Note } from "../types/NodeTypes";

interface NoteContextType {
    state: Note[];
    dispatch: React.Dispatch<Action>;
}

const NoteContext = createContext<NoteContextType | undefined>(undefined);

const NoteReducer = (state: Note[], action: Action): Note[] => {
    switch (action.type) {
        case "ADD":
            return [action.payload, ...state];

        case "DELETE":
            return state.filter((note) => note.id !== action.payload);

        case "UPDATE":
            return state.map((note) => note.id === action.payload.id ? action.payload : note);

        default:
            return state;
    }
}

export const NoteProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(NoteReducer, [], () => {
        const localData = localStorage.getItem("notes");
        return localData ? JSON.parse(localData) : [];
    })

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(state));
    }, [state])

    return (
        <NoteContext.Provider value={{ state, dispatch }}>
            {children}
        </NoteContext.Provider>
    )
}

export const useNotes = () => {
    const context = useContext(NoteContext);
    if (!context) {
        throw new Error("NoteProvider içinde olmalı");
    }
    return context;
}