import React from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../reducers/noteReducer'
// import noteServices from '../services/notes'

const NewNote = () => {

    const dispatch = useDispatch()


    const addNote = async (event) => {
        event.preventDefault()
        const content = event.target.note.value
        // console.log(content)
        // const newNote = await noteServices.createNote(content)
        event.target.note.value = ''
        dispatch(createNote(content))
    }

    return (

        <form onSubmit={addNote}>
            <input name='note'></input>
            <button type="submit">add</button>
        </form>

    )

}
export default NewNote