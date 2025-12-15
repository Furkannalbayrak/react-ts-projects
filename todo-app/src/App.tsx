import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className='flex flex-col justify-center items-center max-w-2xl mx-auto w-full pb-10'>
        <TodoCreate/>
        <TodoList/>
    </div>
  )
}

export default App
