import React from 'react'
import {  connect } from 'react-redux'
import { createNote } from '../reducers/noteReducer'
// import noteServices from '../services/notes'

const NewNote = (props) => {

    // const dispatch = useDispatch()


    const addNote = async (event) => {
        event.preventDefault()
        const content = event.target.note.value
        // console.log(content)
        event.target.note.value = ''
        // dispatch(createNote(content))
        props.createNote(content)
    }

    return (

        <form onSubmit={addNote}>
            <input name='note'></input>
            <button type="submit">add</button>
        </form>

    )

}
// const mapDispatchToProps = { createNote }

export default connect(null, { createNote })(NewNote)