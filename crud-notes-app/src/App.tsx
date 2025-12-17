import './App.css'
import Notes from './components/Notes'
import { NoteProvider } from './context/NoteContext'

function App() {
  return (
    <NoteProvider>
      <Notes/>
    </NoteProvider>
  )
}

export default App
