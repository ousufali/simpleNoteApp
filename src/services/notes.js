import axios from 'axios'

const baseUrl = "http://localhost:3001/notes"


const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNote = async (content) => {
    const object = {
        content,
        important: false,
    }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const toggleImportance = async (id) => {
    let notes = await getAll(baseUrl)

    const note = notes.find(x => x.id === id)
    const newNote = {
        ...note,
        important: !note.important,
    }
    const url = baseUrl + `/${id}`
    console.log(url, note, newNote) ///log
    const response = await axios.put(url, newNote)
    return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, createNote, toggleImportance }