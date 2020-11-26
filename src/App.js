import React, { useEffect } from 'react'
import Notes from './components/Notes'
import NewNote from './components/NewNote'
import VisibilityFilter from './components/VisibilityFilter'
import { useDispatch } from 'react-redux'
// import noteServices from './services/notes'
import { initializeNotes } from './reducers/noteReducer'


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeNotes())
  }, [dispatch])

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default App