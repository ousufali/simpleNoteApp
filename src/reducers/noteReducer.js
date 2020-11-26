import noteServices from '../services/notes'

const noteReducer = (state = [], action) => {
    console.log('ACTION', action)

    switch (action.type) {
        case 'NEW_NOTE':
            return [...state, action.data]

        case 'TOGGLE_IMPORTANCE':
            const id = action.data.id
            const noteToChange = state.find(n => n.id === id)
            const changedNote = {
                ...noteToChange,
                important: !noteToChange.important
            }
            return state.map(note =>
                note.id !== id ? note : changedNote
            )
        case 'INIT_NOTES':
            return action.data

        default:
            return state
    }
}



export const createNote = (content) => {
    // return {
    //     type: 'NEW_NOTE',
    //     data,
    // }
    return async dispatch => {
        const newNote = await noteServices.createNote(content)
        dispatch({
            type: 'NEW_NOTE',
            data: newNote,
        })
    }
}
export const initializeNotes = () => {
    // return{
    //     type: 'INIT_NOTES',
    //     data : notes
    // }
    return async dipatch => {
        const notes = await noteServices.getAll()
        dipatch({
            type: 'INIT_NOTES',
            data: notes
        })
    }
}

export const toggleImportanceOf = (id) => {
    return {
        type: 'TOGGLE_IMPORTANCE',
        data: { id }
    }
}


export default noteReducer