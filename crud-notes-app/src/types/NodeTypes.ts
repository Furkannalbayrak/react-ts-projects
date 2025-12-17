
export interface Note {
    id: string,
    title: string,
    content: string,
    createdAt: string
}

export type Action = | { type: "ADD"; payload: Note } | { type: "DELETE"; payload: string } | { type: "UPDATE", payload: Note };