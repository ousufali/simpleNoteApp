import React from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../reducers/noteReducer'

const NewNote = (props) => {

    const dispatch = useDispatch()


    const addNote = (event) => {
        event.preventDefault()
        const content = event.target.note.value
        console.log(content)
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